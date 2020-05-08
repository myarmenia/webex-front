import React from "react";
import {Link} from "react-router-dom";
import {useTranslation, Trans} from "react-i18next";

const HintMessages = ({isDemo, isClosed})=> {
  const {t} = useTranslation(["courses", "forms"]);

  const pleaseSignIn = (
    <div className="mx-20">
      {t('homeworks.available_to_registered_users')}
      <Link to="/signup" className="please-sign-in" >
      {t('forms:signup.title')}
      </Link>
    </div>
  );

  const askToOpen = (
    <div className="mx-20">
      <Trans i18nKey={'homeworks.hworks_are_closed_to_you'}>
      {t('homeworks.hworks_are_closed_to_you')}
      </Trans>
    </div>
  );
  if (isDemo) {
    return pleaseSignIn;
  } else if (isClosed) {
    return askToOpen;
  }
  return null;
}

export default HintMessages;