import React from 'react';
import Heading from './Heading/';
import Paragraph from './Paragraph/';
import Alert from './Alert/';
import Grid from '@material-ui/core/Grid';
import ListItem from '@material-ui/core/ListItem';
import TabPanelFooter from '../../../../Components/TabPanelFooter/';

function TabPanel3(){

  return (
    <>
      <ListItem>
        <Grid className="ml-12px pb-20px" container>
          <Alert />
          <Heading />
          <Paragraph />
        </Grid>
      </ListItem>
      <TabPanelFooter />
    </>
  )
}

export default TabPanel3;