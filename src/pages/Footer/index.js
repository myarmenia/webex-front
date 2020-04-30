import React from "react";
import { useTranslation } from "react-i18next";

import OneForthHoc from "./OneForth";
import Initials from "./Initials";
import TagsList from "./TagsList";
import ContactsList from "./ContactsList";
import ContactForm from "./ContactForm";
import { useSelector } from "react-redux";

const Footer = () => {
  const { t } = useTranslation(["footer"]);
  const authenticated = useSelector((state) => state.currentUser.authenticated);
  const courses = useSelector((state) => state.coursesData.courses);

  return (
    <footer className="page_footer ds s-pt-75 s-pb-45 c-gutter-40">
      <div className="container">
        <div className="row">
          <OneForthHoc
            widgetComponent={<Initials slogan={t("slogan")} />}
            widgetClassName="widget_text"
          />

          <OneForthHoc
            widgetComponent={
              <TagsList
                tags={t("tags")}
                authenticated={authenticated}
                courses={courses}
              />
            }
            widgetClassName="widget_tag_cloud"
          />

          <OneForthHoc
            widgetComponent={<ContactsList contacts={t("contacts")} />}
            widgetClassName="widget_icons_list"
          />

          <OneForthHoc
            widgetComponent={<ContactForm formTitle={t("drop_a_line")} />}
            widgetClassName="widget_contact_form"
          />
        </div>
      </div>
    </footer>
  );
};
export default Footer;
