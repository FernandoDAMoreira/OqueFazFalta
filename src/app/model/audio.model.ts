export interface AudioData {
    id: number;
    src: string;
    state?: AudioStates;
    audioObj: HTMLAudioElement;
    duration: number;
}

export enum AudioStates {
    PLAYING,
    PAUSED,
}
