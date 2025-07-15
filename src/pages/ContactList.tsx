import { useLoaderData } from "react-router";
import { Card } from "../components/Card";
import type { Contact } from "../interfaces/Contact";
import { useState } from "react";

export const ContactList = () => {
  const contacts = useLoaderData() as Contact[];
  const [showOpacity, setShowOpacity] = useState(false);

  const receiveShowModal = (activeModal: boolean) =>
    setShowOpacity(activeModal);
    console.log(showOpacity);

  return (
    <section className={`${showOpacity && "opacity-0"}`} >
      <div className="mx-50 mt-4">
        {contacts.map((contact) => (
          <Card
            key={contact.id}
            contact={contact}
            receiveShowModal={receiveShowModal}
          />
        ))}
      </div>
    </section>
  );
};
