import { useNavigate } from "react-router";
import type { Contact } from "../interfaces/Contact";
import { useState } from "react";
import { Modal } from "./Modal";

interface Props {
  contact: Contact;
  receiveShowModal: (activeModal: boolean) => void;
}

export const Card = ({ contact, receiveShowModal }: Props) => {
  const [activeModal, setActiveModal] = useState(false);
  const navigate = useNavigate();

  const hideModal = () => setActiveModal(false);
  

  return (
    <article className="border bg-amber-50 px-14 py-2 flex justify-between mb-1 relative">
      <div className="flex">
        <img
          className="rounded-full w-36 h-36 mask-auto"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRTU0trkfCoaEMPwwAIdmPeBDRWtlLtADozw&s"
          alt=""
        />
        <div className="flex flex-col justify-center ml-4">
          <h3 className="text-2xl mb-4">{contact.name}</h3>
          <div className="flex gap-2 align-middle">
            <i className="fa-solid fa-location-dot"></i>
            <span>{contact.address}</span>
          </div>
          <div className="flex gap-2">
            <i className="fa-solid fa-phone"></i>
            <p>{contact.phone}</p>
          </div>
          <div className="flex gap-2">
            <i className="fa-solid fa-envelope"></i>
            <span>{contact.email}</span>
          </div>
        </div>
      </div>
      <div className="flex gap-14 m-3">
        <i
          onClick={() => navigate(`/edit-contact/${contact.id}`)}
          className="fa-solid fa-pencil hover:text-yellow-600 cursor-pointer"
        ></i>
        <i
          onClick={() => {setActiveModal(true), receiveShowModal(true)}}
          className="fa-solid fa-trash hover:text-red-500 cursor-pointer"
        ></i>
      </div>
      {activeModal && <Modal hideModal={hideModal} idDelete={contact.id} />}
    </article>
  );
};
