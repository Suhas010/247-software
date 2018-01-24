import LocalizedStrings from 'react-localization';
import {config} from '../../utils/config';


let strings = new LocalizedStrings({

    EN:{
        defaultLabel: "Edit Lable",
    },

    MR: {
        defaultLabel: " लेबल बदला"
    }
});

strings.setLanguage(config.lang);

export default strings;