import React from "react";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section4 from "./Section4";
import Advantages from "../Courses/Advantages";
import { useTranslation } from "react-i18next";

function AboutUs() {
  const { t } = useTranslation(["main", "translation"]);
  return (
    <div id="aboutUs">
      <Section1 t={t} />
      <Section2 t={t} />
      <Section4 t={t} />
      <Advantages t={t} />
    </div>
  );
}

export default AboutUs;
