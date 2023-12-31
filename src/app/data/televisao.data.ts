import { PageData, Section } from '../model/page.model';

const objetosSection: Section = {
    path: 'objetos',
    title: 'Objetos',
    img: 'assets/pages/televisao/objetos.jpg',
    dataBasePath: 'assets/pages/televisao/objetos/',
    dataFormat: 'jpg',
    data: [
        '1_Identificador_RTP_1960',
        '2_Auscultadores_STC_4409_1950',
        '3_Auscultaores_AMPLIVOX_AUDIO_UPS_1969',
        '5_Projetor_de_Iluminacao_STRAND_ELECTRIC_123_1957',
        '6_Recetor_Televisao_Radio_SABA_WURTTEMBERG7_1956',
        '7_Recetor_Televisao_radio_GRAETZ_LANDGRAF_F39_1957',
        '8_Recetor_de_Televisao_ADMIRAL_IMPERIAL_C21E14_1959',
        '9_Recetor_de_Televisao_radio_BANG_OLUFSEN_HORIZONT_DE_LUXE_FM_1960',
        '10_Recetor_de_Televisao_KAISER_KFS4_1961',
        '11_Recetor de Televisao_AGA_TV21SS60_1964',
        '12_Recetor_de_Televisao_BLAUPUNKT_TIPTRONIC_1970',
        '13_Recetor_de_Televisao_GRUNDIG_TRIUMPH_1420_1978',
        '14_Recetor_de_Televisao_JVC_C_210EY_1980',
        '15_Camara_FERNSEH_KKO_100-11_1953',
        '16_Camara_FERNSEH_K3OK_101D_1957',
        '17_Camara_EMI_203_1960',
        '18_Camara_SONY_AVC-3420_CE_1969',
        '19_Camara_AMPEX_BCC4_1976',
        '20_Unidade_de_controlo_de_camara_BOSCH_KCR_1970',
        '21_Gravador_de_Video_AMPEX_2000_1960',
        '22_Gravador_de_Video_SONY_AV_3670_CE_1973',
        '23_Gravador_de_Video_BOSCH_BCN_20_1974',
        '24_Gravador_de_Video_AMPEX_VPR6_1984',
        '25_Misturador_NAGRA_KUDELSKY_BMT-3_1960',
        '26_Mesa_de_Edicao_de_Video_SONY_BVE-500_ACE_1970',
        '27_Monitor_FERNSEH_M35BC9F_1957',
        '28_Monitor_EMI_301_1960',
        '29_Monitor_BOSCH_T15_BC91_1970',
        '30_Projetor_DEBRIE_MB216_1950',
        '31_Projetor_BAUER_T10L_1956',
        '32_Projetor_FUMEO_9201_SUPER_1970',
        '33_Radio_e_televisao_1956',
        '34_Televisao_1956',
        '35_Separador_boas_noites',
        '36_Separador_ensaios_tecnicos',
        '37_Separador_programa_segue_dentro_de_momentos',
    ],
};

const reportagensSection: Section = {
    path: 'reportagens',
    title: 'Reportagens',
    img: 'assets/pages/televisao/reportagens.jpg',
    dataBasePath: 'assets/pages/televisao/reportagens/',
    dataFormat: 'mp4',
    data: [
        '1_Revolucao_dos_Cravos_Noticiarios_RTP',
        '2_Revolucao_dos_Cravos_25_de_Abril_1974_Noticiarios_RTP',
        '3_Proclamacao_da_Junta_de_Salvacao_Nacional',
        '4_Acontecimentos_25_de_Abril_de_1974',
    ],
};

const pdfSection: Section = {
    path: 'exercicios',
    title: 'Exercícios',
    dataBasePath: 'assets/pages/televisao/pdf/',
    data: ['Exercicios_Televisao_Storyboard.pdf'],
    hideSection: true,
};

export const televisaoPageData: PageData = {
    path: 'televisao',
    title: 'Televisão',
    sections: [objetosSection, reportagensSection, pdfSection],
};
