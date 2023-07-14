export interface PageData {
    path: string;
    title: string;
    sections: Section[];
}

export interface Section {
    path: string;
    title: string;
    img: string;
    dataBasePath: string;
    dataFormat: string;
    data: string[];
}
