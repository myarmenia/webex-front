import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
// import { CONST_USER_DATA } from "../../../../../../redux/Variables/Const";
import { switchingNameTabPanels} from '../../../../../../redux/actions/switchingNameTabPanels/';
import {buttonSwitch} from '../../../../../../redux/reducers/switchingTabPanels';
import { useSelector, useDispatch } from 'react-redux';
import {useTranslation} from 'react-i18next';

function Block3() {
  const {t} = useTranslation(['profile']);

  // const TEXTS_IN_ARRAY = CONST_USER_DATA.buttonSwitch;
  // const TEXTS_IN_ARRAY = buttonSwitch;
  const switchingTabPanels = useSelector(state => state.switchingTabPanels);
  const letDispatch = useDispatch();
  
  const buttons = buttonSwitch.map((buttonText, index) => 
    <Button
      key={ index }
      className={ (switchingTabPanels === index ? "colorProfilePage2 " : "") + "ButtonProfilePage width-100Percentage" }
      color="primary"
      onClick={ () => letDispatch( switchingNameTabPanels(index) ) }
    >
      { t(`tabPanels.${buttonText}.title`) }
    </Button>
  );

  return (
    <Grid>
      {buttons}
    </Grid>
  );
}
export default Block3;