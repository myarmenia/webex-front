import React from 'react';
import Grid from '@material-ui/core/Grid';
import Input from '../../../../../Components/Input/';
import { CONST_USER_DATA } from '../../../../../../../redux/Variables/Const/';
import { userData } from '../../../../../../../redux/Variables/Let';
import { useSelector, useDispatch } from 'react-redux';

import { switchingState } from '../../../../../../../redux/actions/switchingState';
import { saveData } from '../../../../../../../redux/actions/saveData';



function Paragraph(props){
  let hamar = props.tiv;

  const nameHeadingParagraph = CONST_USER_DATA.keyObjectName[hamar];
  console.log(nameHeadingParagraph);

  let userInfo = [
    CONST_USER_DATA.userAvatar, CONST_USER_DATA.userName, CONST_USER_DATA.userSurName 
  ];

  let contactInfo = [
    CONST_USER_DATA.userContactPhone, CONST_USER_DATA.userMail, CONST_USER_DATA.contactSlack, CONST_USER_DATA.contactLinkedin, CONST_USER_DATA.contactGithub
  ];

  const INFO = [
    userInfo,
    contactInfo
  ];

  let blocks = INFO[hamar];
  const namePromptInput = CONST_USER_DATA.constMixedText2[hamar];

  let userImageSrc = userData.userImageSrc;
  let userImageAlt = userData.userImageAlt;
  let valuePlaceholder = useSelector(state => state.textsInInput);
  let letState = useSelector(state => state);
  console.log(letState);
  let letDispatch = useDispatch();


  if(letState.saveData == true){

    let classInput = document.getElementsByClassName('tabPanels2');
    /* compare hamematel*/
    let objSend = {};
    let arr = [];
    let i = 0;

    for(let key in letState.switchingState){
      if(i == 10){
        break;
      }
      arr[i] = key;
      i++;
    }
    i = 0;
    for(let key in letState.switchingState){
      if( key == arr[i] ){
        if( key == 'userAvatar' ){
          objSend[key] = '';
        }
        else if( key == 'userImageSrc' ){
          objSend[key] = document.getElementsByClassName('userImg')[0].src;
        }
        else if(key == 'userImageAlt'){
          objSend[key] = document.getElementsByClassName('userImg')[0].alt;
        }
        else{
          objSend[key] = classInput[i - 3].getElementsByTagName('input')[0].value 
        }
        i++;
      }
      else{
        objSend[key] = letState.switchingState[key];
      }

    }
    letDispatch( switchingState( objSend ) );
    letDispatch( saveData( false ) );
  }

  let content = blocks.map((value, index) => 

    <Grid key={index} className="pt-20px" container>
      <Grid className="pt-10px" item lg={2} md={2} sm={2} xl={2} xs={2}>
        <label className="tarorinakGuyn floatRight">{value}</label>
      </Grid>
      <Grid className="ml-10px" item lg={6} md={6} sm={6} xl={6} xs={6}>
        {
          value === "Avatar" ? <img className='userImg' src={userImageSrc} alt={ userImageAlt } /> : <Input key={index} defaultValue={valuePlaceholder[index][nameHeadingParagraph]} classNameProps={'tabPanels2'} />
        }
        <small>{ namePromptInput[index] }</small>
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