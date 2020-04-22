import React from 'react';
import Grid from '@material-ui/core/Grid';
import Input from '../../../../../Components/Input/';
import { CONST_USER_DATA } from '../../../../../../../redux/Variables/Const/';
// import { userData } from '../../../../../Variables/Let';
import { useSelector } from 'react-redux';

function Paragraph(){

  const nameInput = CONST_USER_DATA.constMixedText3;
  const namePromptInput = CONST_USER_DATA.namePromptInput3;

  console.log( useSelector( state => state ) )
  let content = nameInput.map((value, index) => 
    <Grid key={index} className="pt-20px" container>
      <Grid className="pt-10px" item lg={2} md={2} sm={2} xl={2} xs={2}>
        <label className="tarorinakGuyn floatRight">{value}</label>
      </Grid>
      <Grid className="ml-10px" item lg={6} md={6} sm={6} xl={6} xs={6}>
        <Input key={index} textPlaceholder={value} />
        {
          value == "Current Password" ? <a  className="colorProfilePage" href="https://www.google.com">{ namePromptInput }</a> : ''
        }
      </Grid>
    </Grid>
  );

  return (
    <>
      {content}
    </>
  )
}

export default Paragraph;