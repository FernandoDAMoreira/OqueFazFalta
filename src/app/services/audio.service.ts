import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { AudioData, AudioStates } from '../model/audio.model';

const NO_AUDIO: AudioData = {
    id: 0,
    src: '',
    audioObj: new Audio(),
    duration: 0,
};

@Injectable({
    providedIn: 'root',
})
export class AudioService {
    private audioPlaying = new BehaviorSubject<AudioData>(NO_AUDIO);

    constructor() {}

    get audioPlaying$(): Observable<AudioData> {
        return this.audioPlaying.asObservable();
    }

    play(src: string, id: number): void {
        if (this.audioAlreadyPlaying(src)) {
            this.continue();
        } else {
            const audioData = this.audioPlaying.getValue();
            this.stopAudio(audioData.audioObj);

            audioData.audioObj = new Audio(src);
            audioData.audioObj.load();
            audioData.audioObj.onloadedmetadata = () => {
                this.audioPlaying.next({
                    id,
                    src,
                    audioObj: audioData.audioObj,
                    state: AudioStates.PLAYING,
                    duration: audioData.audioObj.duration,
                });
                audioData.audioObj.play();
            };
        }
    }

    pause(): void {
        const audioData = this.audioPlaying.getValue();
        audioData.state = AudioStates.PAUSED;
        audioData.audioObj.pause();

        this.updateState(audioData);
    }

    restart(): void {
        const audioData = this.audioPlaying.getValue();
        audioData.audioObj.load();
        audioData.state = AudioStates.PLAYING;
        audioData.audioObj.play();

        this.updateState(audioData);
    }

    private continue(): void {
        const audioData = this.audioPlaying.getValue();
        audioData.state = AudioStates.PLAYING;
        audioData.audioObj.play();

        this.updateState(audioData);
    }

    private updateState(audioData: AudioData): void {
        this.audioPlaying.next({ ...audioData });
    }

    private audioAlreadyPlaying(src: string) {
        return this.audioPlaying.getValue().src == src;
    }

    private stopAudio(audioObj: HTMLAudioElement): void {
        audioObj.pause();
        audioObj.currentTime = 0;
    }
}
