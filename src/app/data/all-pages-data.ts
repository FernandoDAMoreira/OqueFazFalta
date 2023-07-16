import { AllPagesData } from '../model/all-pages-data.model';
import { fotografiaPageData } from './fotografias.data';
import { imprensaPageData } from './imprensa.data';
import { mundoArtisticoPageData } from './mundo-artistico.data';
import { musicaPageData } from './musica.data';
import { radioPageData } from './radio.data';

export const allPagesData: AllPagesData = {
    radio: radioPageData,
    fotografia: fotografiaPageData,
    imprensa: imprensaPageData,
    mundoartistico: mundoArtisticoPageData,
    musica: musicaPageData,
};
