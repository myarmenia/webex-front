import React from 'react';
import Heading from './Heading';
import Paragraph from './Paragraph';
import Grid from '@material-ui/core/Grid';
import ListItem from '@material-ui/core/ListItem';
import TabPanelFooter from '../../../../Components/TabPanelFooter';

function TabPanel2(){

  return (
    <>
      <ListItem>
        <Grid className="ml-12px pb-20px" container>
          <Heading tiv={ 0 } />
          <Paragraph tiv={ 0 } />
          <Heading tiv={ 1 } />
          <Paragraph tiv={ 1 } />
        </Grid>
      </ListItem>
      <TabPanelFooter />
    </>
  )
}

export default TabPanel2;