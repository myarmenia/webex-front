import React from "react";
import ContactItem from "./ContactItem";
import { contacts as mocks } from "./mocks";

const ContactsList = ({ contacts }) => {

  return (
    <>
      <h3>{contacts}</h3>
      {mocks.map((item, index) => (
        <ContactItem {...item} key={index} />
      ))}
    </>
  );
};

export default ContactsList;
