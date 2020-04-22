import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { CONST_USER_DATA } from "../../../../../../redux/Variables/Const";
import { switchingNameTabPanels } from '../../../../../../redux/actions/switchingNameTabPanels/';
import { useSelector, useDispatch } from 'react-redux';

function Block3() {

  const TEXTS_IN_ARRAY = CONST_USER_DATA.buttonSwitch;
  const switchingTabPanels = useSelector(state => state.switchingTabPanels);
  const letDispatch = useDispatch();
  
  const buttons = TEXTS_IN_ARRAY.map((arjeq, index) => 
    <Button
      key={ index }
      className={ (switchingTabPanels === index ? "colorProfilePage2 " : "") + "ButtonProfilePage width-100Percentage" }
      color="primary"
      onClick={ () => letDispatch( switchingNameTabPanels(index) ) }
    >
      { arjeq }
    </Button>
  );

  return (
    <Grid>
      {buttons}
    </Grid>
  );
}
export default Block3;