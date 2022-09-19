import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} 
        placeholder="Name" required/>
      <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} 
        pattern="[1-9][0-9]{2}-[1-9][0-9]{2}-[0-9]{4}"
        placeholder="Contact Phone (###-###-####)" 
      />
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} 
        placeholder="name@company.com" required/>
      <input type="submit" />
    </form>
  );
};
