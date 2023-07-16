import { PageData, Section } from '../model/page.model';

const audioSection: Section = {
    path: 'audio',
    title: 'Audio',
    img: 'assets/pages/musica/audio.jpg',
    dataBasePath: 'assets/pages/musica/audio/',
    dataFormat: 'mp3',
    data: [
        '1_Joao_Black_-_Fado_Anarquista',
        '2_Cancoes_Heroicas_Cancao_do_Campones_de_Lopes_Graca',
        '3_Cancoes_Heroicas _Firmeza_de_Lopes_Graca',
        '4_Vira_do_Minho',
        '5_Amalia_Rodrigues_-_Fado_Portugues',
        '6_Hino_dos_Mineiros _Aljustrel ',
        '8_Zeca_Afonso_-_Grandola_Vila_Morena',
        '9_Zeca_Afonso_-_O_Que_Faz_Falta',
        '10_Zeca_Afonso_-_Os_Vampiros ',
        '11_Sergio_Godinho_-_Com_Um_Brilhozinho_Nos_Olhos',
        '12_Paulo_de_Carvalho_E_Depois_Do_Adeus',
    ],
};

const objetosSection: Section = {
    path: 'objetos',
    title: 'Objetos',
    img: 'assets/pages/musica/objetos.jpg',
    dataBasePath: 'assets/pages/musica/objetos/',
    dataFormat: 'jpg',
    data: [
        '1_Gira-discos_cossor_conquest_1956',
        '2_Gira-discos_EMT_930ST_1956',
        '3_Gira-discos_EMT_940_1958',
        '4_Gira-discos_DUAL_DP_300_TV22_1960',
        '5_Gira-discos_radio_CROWN_SPH-100_1963',
        '6_Gira-discos_DUAL_P41_1967',
        '7_Gira-discos_EMT_928_1971',
        '8_Gira-discos_EMT_938_1987',
    ],
};

const videoSection: Section = {
    path: 'video',
    title: 'Video',
    img: 'assets/pages/musica/videos.jpg',
    dataBasePath: 'assets/pages/musica/video/',
    dataFormat: 'mp4',
    data: [
        '7_Cante_Alentejano_Taberna_em_Cuba_-_Baixo_Alentejo',
        '13_Fado_das_aguias_-_CBranco_FQuintela_VJoao_Black_-_Coimbra_Musical_RTP_Sansao_Coelho_1978',
    ],
};

export const musicaPageData: PageData = {
    path: 'musica',
    title: 'Musica',
    sections: [audioSection, objetosSection, videoSection],
};
