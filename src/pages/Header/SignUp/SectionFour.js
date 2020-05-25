import React, { useState } from "react";

import Button from "@material-ui/core/Button";

import DayPickerInput from "react-day-picker/DayPickerInput";

import TimePicker from "react-time-picker";
import "react-day-picker/lib/style.css";

import { useTranslation } from "react-i18next";

import "./index.css";

function SectionFour({ prevProps, nextProps, set }) {
  const { t } = useTranslation(["forms", "translation"]);

  const [selectedDay, setSelectedDay] = useState(null);
  const [selectedTime, setSelectedTime] = useState("10:15");

  const prevStep = () => {
    prevProps("three");
  };

  const nextStep = () => {
    if (!selectedDay) return false;

    set({ selectedDay });
    nextProps("five");
  };

  const handleDayChange = (date) => setSelectedDay(date);
  const handleTimeChange = (time) => setSelectedTime(time);

  return (
    <div>
      <div className="form-title mb-20">
        <h4>{t("signup.title")}</h4>
      </div>
      <div>
        <p>{t("signup.first_webinar_date")}</p>
        <p>Note: Choose time based on GMT+4 timezone</p>
        <DayPickerInput
          onDayChange={handleDayChange}
          selectedDays={selectedDay}
        />
        <TimePicker
          className="mt-4"
          clearIcon={null}
          value={selectedTime}
          onChange={handleTimeChange}
        />
      </div>
      <div className="mt-5">
        <Button
          variant="contained"
          size="large"
          onClick={prevStep}
          id="buttonColor"
          className="mr-4"
        >
          {t("translation:buttons.prev")}
        </Button>
        <Button
          variant="contained"
          size="large"
          onClick={nextStep}
          id="buttonColor"
        >
          {t("translation:buttons.next")}
        </Button>
      </div>
    </div>
  );
}

export default SectionFour;
