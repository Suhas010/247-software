import LocalizedStrings from 'react-localization';
import {config} from '../../utils/config';
export const dataArray = [
    {
        status:0,
        id:0
    },
    {
        status:0,
        id:1
    },
    {
        status:0,
        id:2
    },
    {
        status:0,
        id:3
    }
];
export const styles = {
    block: {
      maxWidth: 250,
    },
    radioButton: {
      marginBottom: 16,
    },
  };
export const STATUS ={
    ADD_ELEMENT: 0,
    RADIO_BUTTON: 1,
    INPUT_BOX: 2,
    CHECK_BOX: 3
}
let strings = new LocalizedStrings({

    EN:{
        horizontal: "horizontal",
        addElement: " + Add Element"
    },

    MR: {
    }
});

strings.setLanguage(config.lang);

export default strings;