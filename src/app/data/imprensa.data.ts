import { PageData, Section } from '../model/page.model';

const jornaisSection: Section = {
    path: 'jornais',
    title: 'Jornais',
    img: 'assets/pages/imprensa/jornais.jpg',
    dataBasePath: 'assets/pages/imprensa/jornais/',
    dataFormat: 'jpg',
    data: [
        '1_O_Seculo_27_de_abril_de_1938',
        '3_Estandarte_10_Mai0_1941',
        '5_DN_fevereiro_1961',
        '7_DN_22_abril_1961',
        '8_Estandarte_25_marco_1941',
        '10_5_dezembro_1980',
        '11_DN_22_novembro_1963',
        '14_DN_3_novembro_1964',
        '15_A_populacao_e_a_policia politica',
        '16_DN_7_agosto_1966',
        '17_DN_14_maio_1967',
        '20_DN_27_setembro_1968',
        '22_DN_27_julho_1970',
        '24_O_Diario_Dezembro_1976',
        '26_DN_3_junho_1985',
        '27_A_Capital_25_abril_1974',
        '28_DN_25_abril_1974',
        '29_Republica_25_abril_1974_2ed',
        '30_O_Seculo_26_abril_1974_5ed',
        '31_Diario_Popular_25_abril_1974',
        '32_Republica_26_abril_1974',
        '33_Diario_Popular_26_abril_1974',
        '34_A_Capital_3_abril_1976',
    ],
};

const revistasSection: Section = {
    path: 'revistas',
    title: 'revistas',
    img: 'assets/pages/imprensa/revistas.jpg',
    dataBasePath: 'assets/pages/imprensa/revistas/',
    dataFormat: 'jpg',
    data: [
        '0_Banquete',
        '2_O_Seculo_Ilustrado_13_de_Maio_de_1967',
        '4_O_Seculo_Ilustrao',
        '6_O_Seculo_Ilustrao_1_dezembro_de_1973',
        '9_Flama',
        '12_Flama_25_abril_1974',
        '13_O_virar_da_pagina',
        '18_Fatos_e_Fotos',
        '19_Flama_Primavera_Marcelista_1968',
        '21_Flama_3_maio_1974',
        '23_O_Seculo_Ilustrado_4_maio_1974',
        '25_O_Seculo_Ilustrao',
        '35_Retornados_Desalojados_Espoliados',
    ],
};

export const imprensaPageData: PageData = {
    path: 'imprensa',
    title: 'Imprensa',
    sections: [jornaisSection, revistasSection],
};
