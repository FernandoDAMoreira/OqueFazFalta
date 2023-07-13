export interface Page {
    title: string;
    sections: Section[];
}

export interface Section {
    type: SECTIOM_TYPE;
    title: string;
    img: string;
    dataBasePath: string;
    dataFormat: string;
    data: string[];
}

export enum SECTIOM_TYPE {
    PHOTOS = 'PHOTOS',
    AUDIOS = 'AUDIOS',
    VIDEOS = 'VIDEOS',
}
