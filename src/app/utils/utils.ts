import { Section } from '../model/page.model';
import { SectionData } from '../model/photo.model';

export default class Utils {
    static getFormatedSecionData(section: Section): SectionData[] {
        const result: SectionData[] = [];
        section.data.forEach((data) => {
            result.push({
                src: `${section.dataBasePath}/${data}.${section.dataFormat}`,
                description: data.substring(2).replace(/_/g, ' '),
            });
        });
        return result;
    }
}
