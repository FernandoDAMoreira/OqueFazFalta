import { PageData, Section } from '../model/page.model';

const audiosSection: Section = {
    path: 'audios',
    title: 'Áudios',
    img: 'assets/pages/radio/audio.jpg',
    dataBasePath: 'assets/pages/radio/audios/',
    dataFormat: 'mp3',
    data: [
        '1_A_1Senha_da_Revolucao_dos_Cravos_-_E_Depois_do_Adeus_de_Paulo_de_Carvalho(Radio_Alfabeta)',
        '2_A_2Senha_da_Revolucao_dos_Cravos_-_Grandola_Vila_Morena_de_Jose_Afonso_(Radio_Renascenca)',
        '3_Radio_Clube_Portugues_-_Comunicado_da_Ocupacao_da_RTP_por_Luis_Filipe_Costa_(25_de_Abril_de_1974)',
    ],
};

const photosSection: Section = {
    path: 'fotografias',
    title: 'Fotografias',
    img: 'assets/pages/radio/fotografias.jpg',
    dataBasePath: 'assets/pages/radio/fotografias/',
    dataFormat: 'jpg',
    data: [
        '1_(locutor_desconhecido)_-_Emissora_Nacional',
        '2_Armando_Marques_Ferreira_1951',
        '3_EMISSORA_NACIONAL',
        '4_Maria_Lourdes_Norberto_1960_programaMeiaNoite',
        '5_TSF_EM_PORTUGAL',
        '6_(locutor_desconhecido)',
        '7_A_PRIMEIRA_REPORTAGEM_RADIOFONICA_1969_documento',
        '8_(locutor_desconhecido)',
        '9_Clarisse_Guerra_Comunicado_do_MFA_1974',
        '10_PROGRAMACAO_DO_DIA_26_DE_ABRIL_1974_IN_DIARIO_DE_NOTICIAS',
    ],
};

const objectsSection: Section = {
    path: 'objetos',
    title: 'Objetos',
    img: 'assets/pages/radio/objetos.jpg',
    dataBasePath: 'assets/pages/radio/objetos/',
    dataFormat: 'jpg',
    data: [
        '1_Recetor_de_Radio_AGA_EUROPA_TYP_51_1939',
        '2_Recetor_de_Radio_ECOPHONE_EX102_1944',
        '3_Recetor_de_Radio_AGA_1731_1946',
        '4_Recetor_de_Radio_GENERAL_ELECTRIC_X_331_1947',
        '5_Recetor_de_Radio_GRUNDIG_80_WE_1954',
        '6_Recetor_de_Radio_BRAUN_EXPORTER_1954',
        '7_Recetor_de_Radio_GRUNDIG_MICKY-BOY_1955',
        '8_Recetor_de_Radio_EUMIG_OKAY_331_1959',
        '9_Recetor_de_Radio_BANG_OLUFSEN_BEOMASTER_900_STEREO_1964',
        '10_Recetor_de_Radio_FISHER_R-200-B_1967',
        '11_Recetor_de_Radio_AIWA_8_TRANSISTOR_AR_854_1968',
        '12_Recetor_de_Radio_ARROW_PUBLIC_SERVICE_BAND_PB940_1968',
        '13_Recetor_de_Radio_Dreamland_ladybug_LT303_1975',
        '14_Recetor_de_Comunicacoes_COLLINS_COL46159_1941',
        '15_Radio_Goniometro_BEME_BL50A_1950',
        '16_Gravador_de_Audio_ACA_MAGNETAPE_RECORDER_PT_800_B_1936',
        '17_Gravador_de_Audio_AMPEX_352C_1950',
        '18_Gravador_de_Audio_AMPEX_600_1954',
        '19_Gravador_de_Audio_FERROGRAPH_TYPE_422_U_1955',
        '20_Gravador_de_Audio_AIWA_TP-60_R__1964',
        '21_Gravador_de_Audio_AIWA_TP728_1965',
        '22_Gravador_de_Audio_BASF_CC_RECORDER_9202_1974',
        '23_Gravador_de_Audio_DICTAPHONE_SCULLY_280B_1976',
        '24_Auscultadores_com_Radio_AIWA_HR-S1_1982',
        '25_Consolete_de_Audio_COLLINS_212B-2_1950',
        '26_Amplificador_ACOUSTICAL_QUAD_II_1953',
        '27_Camara_de_Reverberacao_BINSON_ECHOREC_T5E_1960',
        '28_BLAUPUNKT_STUTTGARD_Auto-Radio',
        '29_Microfone_AKG_DYN_60_STUDIO_1946',
        '30_Microfone_AKG_D20_1958',
        '31_Microfone_AKG_C60_1961',
        '32_Microfone_BEYERDYNAMIC_M320_1965',
        '33_Microfone_AKG_D40_1966',
        '34_Microfone_AKG_D110_1970',
        '35_Mesa_de_Palestra-Emissora_Nacional_1940',
    ],
};

const pdfSection: Section = {
    path: 'exercicios',
    title: 'Exercícios',
    dataBasePath: 'assets/pages/radio/pdf/',
    data: ['Exercicios_Radio_Noticia.pdf'],
    hideSection: true,
};

export const radioPageData: PageData = {
    path: 'radio',
    title: 'Rádio',
    sections: [audiosSection, photosSection, objectsSection, pdfSection],
};
