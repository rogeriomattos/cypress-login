import { useRef, useState } from "react";
import UserItem from "../../components/UserItem";
import { userListData } from "../../services/users/data";
import "./styles.css";
import UserForm from "../../components/UserForm";
import { Dialog, trigerDialog } from "../../components/Dialog";

const Home = () => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [userList, setUserList] = useState(userListData);
  const onDelete = (id: number) => {
    console.log({ id });
  };

  const handleAdd = (data: any) => {
    setUserList([
      ...userList,
      { ...data, id: userList[userList.length - 1].id + 1 },
    ]);
    trigerDialog();
  };

  return (
    <div>
      <h1>HOME</h1>
      <Dialog buttonText="Novo Usuário">
        <h2>Novo Usuário</h2>
        <UserForm onSave={handleAdd} />
      </Dialog>
      <table>
        <tbody>
          {userList.map((item) => (
            <UserItem key={item.id} onDelete={onDelete} {...item} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
