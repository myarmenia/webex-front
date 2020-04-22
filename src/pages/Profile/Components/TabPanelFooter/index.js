import React from 'react';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import { useSelector, useDispatch } from 'react-redux';
import { saveData } from '../../../../redux/actions/saveData';

function TabPanelFooter(){
  let letState = useSelector(state => state);
  let dispatch = useDispatch();
  const save = () => {
    dispatch( saveData( true ) );
  }
  return (
    <>
      <Divider />
      <Grid justify="center" className="pb-5px pt-10px" container>
        <Button onClick={save} className="greenButton ButtonProfilePage mr-10px ml-10px">
          Submit
        </Button>
        <Button className="border-1px pheight-6px pwidth-16px ButtonProfilePage mr-10px ml-10px">
          Cansel
        </Button>
      </Grid>
    </>
  )
}

export default TabPanelFooter;