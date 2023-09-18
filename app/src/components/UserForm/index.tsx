import { useState } from "react";
import "./styles.css";
import { User } from "../../services/users/type";
type Props = {
  onSave: (user: Omit<User, "id">) => void;
};
const UserForm = ({ onSave }: Props) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const data: Omit<User, "id"> = {
      name: form.get("name") as string,
      email: form.get("email") as string,
      phone: form.get("phone") as string,
    };
    onSave(data);
    e.currentTarget.reset();
  };

  return (
    <form className="user" onSubmit={handleSubmit}>
      <input name="name" placeholder="Nome" />
      <input name="email" placeholder="E-mail" />
      <input name="phone" placeholder="Phone" />
      <button type="submit">Salvar</button>
    </form>
  );
};

export default UserForm;
