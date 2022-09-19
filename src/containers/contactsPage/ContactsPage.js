import React, { useState, useEffect } from "react";
import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList"

export const ContactsPage = ({ contacts, addContact }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [isDup, setIsDup] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    
    if (!isDup) {
      addContact(name, phone, email);
      setName('');
      setPhone('');
      setEmail('');
    } else {
      alert("The name is duplicated!");
    }
  }

  useEffect(() => {
    let result = contacts.find((item) =>
      item.name === name
    );
    if (result === undefined) {
      setIsDup(false);
    } else {
      setIsDup(true);
    }
  }, [name, contacts, isDup])

  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        <ContactForm
          name={name} setName={setName}
          phone={phone} setPhone={setPhone}
          email={email} setEmail={setEmail}
          handleSubmit={handleSubmit}
        />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList tiles={contacts} />
      </section>
    </div>
  );
};
