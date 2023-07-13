import { Page, SECTIOM_TYPE, Section } from '../model/page.model';

const audiosSection: Section = {
    type: SECTIOM_TYPE.AUDIOS,
    title: 'Áudios',
    img: 'assets/pages/radio/audios.jpg',
    dataBasePath: 'assets/pages/radio/audios/',
    dataFormat: 'mp3',
    data: [
        '1_A_1ªSenha_da_Revolução_dos_Cravos-E_Depois_do_Adeus_de_Paulo_de_Carvalho(Rádio_Alfabeta)',
        '2_A_2ª_Senha_da_Revolução_dos_Cravos_-_Grândola_Vila_Morena_de_José_Afonso_(Rádio_Renascença)',
        '3_Rádio_Clube_Português_-_Comunicado_da_Ocupação_da_RTP_por_Luís_Filipe_Costa_(25_de_Abril_de_1974)',
    ],
};

const photosSection: Section = {
    type: SECTIOM_TYPE.PHOTOS,
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
        '7_A_PRIMEIRA_REPORTAGEM_RADIOFÓNICA_1969_documento',
        '8_(locutor_desconhecido)',
        '9_Clarisse_Guerra_Comunicado_do_MFA_1974',
        '10_PROGRAMAÇÃO_DO_DIA_26_DE_ABRIL_1974,_IN__DIÁRIO_DE_NOTÍCIAS',
    ],
};

const objectsSection: Section = {
    type: SECTIOM_TYPE.PHOTOS,
    title: 'Objetos',
    img: 'assets/pages/radio/objetos.jpg',
    dataBasePath: 'assets/pages/radio/objetos/',
    dataFormat: 'jpg',
    data: [
        '1_Recetor_de_Rádio_AGA_EUROPA_TYP_51_1939',
        '2_Recetor_de_Rádio_ECOPHONE_EX102_1944',
        '3_Recetor_de_Rádio_AGA_1731_1946',
        '4_Recetor_de_Rádio_GENERAL_ELECTRIC_X_331_1947',
        '5_Recetor_de_Rádio_GRUNDIG_80_WE_1954',
        '6_Recetor_de_Rádio_BRAUN_EXPORTER_1954',
        '7_Recetor_de_Rádio_GRUNDIG_MICKY-BOY_1955',
        '8_Recetor_de_Rádio_EUMIG_OKAY_331_1959',
        '9_Recetor_de_Rádio_BANG___OLUFSEN_BEOMASTER_900_STEREO_1964',
        '10_Recetor_de_Rádio_FISHER_R-200-B_1967',
        '11_Recetor_de_Rádio_AIWA_8_TRANSISTOR_AR_854_1968',
        '12_Recetor_de_Rádio_ARROW_PUBLIC_SERVICE_BAND_PB940_1968',
        '13_Recetor_de_Rádio_Dreamland_ladybug_LT303_1975',
        '14_Recetor_de_Comunicações_COLLINS_COL46159_1941',
        '15_Radio_Goniómetro_BEME_BL50A_1950',
        '16_Gravador_de_Audio_ACA_MAGNETAPE_RECORDER_PT_800_B_1936',
        '17_Gravador_de_Audio_AMPEX_352C_1950',
        '18_Gravador_de_Audio_AMPEX_600_1954',
        '19_Gravador_de_Audio_FERROGRAPH_TYPE_422_U_1955',
        '20_Gravador_de_Audio_AIWA_TP-60_R__1964',
        '21_Gravador_de_Audio_AIWA_TP728_1965',
        '22_Gravador_de_Audio_BASF_CC_RECORDER_9202_1974',
        '23_Gravador_de_Audio_DICTAPHONE_SCULLY_280B_1976',
        '24_Auscultadores_com_Rádio_AIWA_HR-S1_1982',
        '25_Consolete_de_Audio_COLLINS_212B-2_1950',
        '26_Amplificador_ACOUSTICAL_QUAD_II_1953',
        '27_Câmara_de_Reverberação_BINSON_ECHOREC_T5E_1960',
        '28_BLAUPUNKT_STUTTGARD_Auto-Rádio',
        '29_Microfone_AKG_DYN_60_STUDIO_1946',
        '30_Microfone_AKG_D20_1958',
        '31_Microfone_AKG_C60_1961',
        '32_Microfone_BEYERDYNAMIC_M320_1965',
        '33_Microfone_AKG_D40_1966',
        '34_Microfone_AKG_D110_1970',
        '35_Mesa_de_Palestra-Emissora_Nacional_1940',
    ],
};

export const radioData: Page = {
    title: 'Rádio',
    sections: [audiosSection, photosSection, objectsSection],
};
