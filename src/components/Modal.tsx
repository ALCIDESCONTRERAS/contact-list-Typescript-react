import { useRevalidator } from "react-router";
import { deleteContact } from "../api/contactList";

type Props = {
  idDelete: number;
  hideModal: () => void;
};

export const Modal = ({ idDelete, hideModal }: Props) => {
  const { revalidate } = useRevalidator();

  const handleDelete = () => {
    deleteContact(idDelete);
    revalidate();
	hideModal();
  };

  return (
    <aside className="w-90 h-30 bg-blue-300 p-2 rounded-md flex flex-col justify-between absolute top-2 right-40">
      <h3 className="text-center">
        Are you sure you want to delete the contact?
      </h3>
      <div className="flex items-end justify-end">
        <button
          onClick={hideModal}
          className="bg-yellow-400 p-2 rounded-md mx-2 font-bold"
        >
          Cancel
        </button>
        <button
          onClick={handleDelete}
          className="bg-red-500 p-2 rounded-md mx-2 font-bold"
        >
          Confirm
        </button>
      </div>
    </aside>
  );
};
