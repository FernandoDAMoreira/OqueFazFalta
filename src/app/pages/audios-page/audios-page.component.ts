import { Component, ElementRef, Inject, ViewChild } from '@angular/core';
import { SectionData } from 'src/app/model/photo.model';
import { PageDataService } from 'src/app/services/page-data.service';
import { AudioService } from 'src/app/services/audio.service';
import Utils from 'src/app/utils/utils';
import { Observable } from 'rxjs';
import { AudioData, AudioStates } from 'src/app/model/audio.model';

@Component({
    selector: 'app-audios-page',
    templateUrl: './audios-page.component.html',
    styleUrls: ['./audios-page.component.scss'],
})
export class AudiosPageComponent {
    @ViewChild('audioElement') audioElement: ElementRef;

    audios: SectionData[] = [];

    audioPlayingId = 0;
    audioPausedId = 0;
    audioProgressInPixels = 0;

    private audioPlaying$: Observable<AudioData>;

    constructor(
        private pageDataService: PageDataService,
        private audioService: AudioService
    ) {}

    ngOnInit() {
        this.pageDataService.loadPageData();
        this.pageDataService.currentSectionData$.subscribe((section) => {
            this.audios = Utils.getFormatedSecionData(section);
        });
        this.audioPlaying$ = this.audioService.audioPlaying$;
        this.setAudioPlayingSub();
    }

    playAudio(audioSrc: string, id: number) {
        this.audioService.play(audioSrc, id);
    }

    pauseAudio(): void {
        this.audioService.pause();
    }

    replayAudio(): void {
        this.audioService.restart();
    }

    private setAudioPlayingSub(): void {
        this.audioPlaying$.subscribe((audioPlaying) => {
            if (audioPlaying.state == AudioStates.PLAYING) {
                this.audioPlayingId = audioPlaying.id;
                this.audioPausedId = 0;
            }
            if (audioPlaying.state == AudioStates.PAUSED) {
                this.audioPlayingId = 0;
                this.audioPausedId = audioPlaying.id;
            }

            this.handleAudioProgress(audioPlaying);
        });
    }

    private handleAudioProgress(audioData: AudioData): void {
        const totalWidth = this.audioElement.nativeElement.offsetWidth;
        const totalDuration = audioData.audioObj.duration;

        audioData.audioObj.addEventListener('timeupdate', () => {
            this.audioProgressInPixels =
                (audioData.audioObj.currentTime * totalWidth) / totalDuration;
        });
    }
}
