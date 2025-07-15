import { Form, useNavigate } from "react-router";
import type { Contact } from "../interfaces/Contact";

type Props = {
  contact?: Contact;
};

export const FormContact = ({ contact }: Props) => {
  const navigate = useNavigate();


  return (
    <>
      <h1 className="text-center mt-10 text-2xl font-bold">
        {!contact ? "Add Contact" : "Edit Contact"}
      </h1>
      <Form method="post">
        <div className="w-80 mx-auto mt-10 bg-cyan-100 p-5 ">
          <label htmlFor="name">Name:</label>
          <input
            name="name"
            defaultValue={contact?.name ?? ""}
            className="input"
            placeholder="name"
            required
          />

          <label htmlFor="address">Address:</label>
          <input
            name="address"
            className="input"
            placeholder="al lado de tomar por culo"
            defaultValue={contact?.address ?? ""}
            required
          />

          <label htmlFor="phone">Phone:</label>
          <input
            name="phone"
            className="input"
            placeholder="775885996"
            defaultValue={contact?.phone ?? ""}
            required
          />

          <label htmlFor="email">Email:</label>
          <input
            name="email"
            className="input"
            placeholder="example@example.com"
            defaultValue={contact?.email ?? ""}
            required
          />

          <div className="flex gap-10 justify-center">
            <button className="bg-yellow-300 p-2 px-4 rounded-md mt-8 " onClick={()=> navigate("/")}>Cancel</button>
            <button
              type="submit"
              className="bg-green-400 p-2 px-4 rounded-md mt-8"
            >
              {!contact ? "Save" : "Update"}
            </button>
          </div>
        </div>
      </Form>
    </>
  );
};
