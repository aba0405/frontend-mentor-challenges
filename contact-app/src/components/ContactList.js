import React from "react";
import Contactcard from "./ContactCard"

const ContactList = (props) =>{
 console.log(props);

 const renderContactList = props.contacts.map((contact) => {
  return(
   <Contactcard contact={contact}></Contactcard>
  );
 });
 return <div className = "ui celled list">{renderContactList} </div>;
};
export default ContactList;