import { useRef, useState } from "react";
import UserItem from "../../components/UserItem";
import { userListData } from "../../services/users/data";
import "./styles.css";
import UserForm from "../../components/UserForm";
import { Dialog, trigerDialog } from "../../components/Dialog";
import { User } from "../../services/users/type";

const Home = () => {
  const [userList, setUserList] = useState(userListData);
  const [userToDelete, setUserToDelete] = useState<User | null>(null);

  const handleDelete = (user: User) => {
    setUserToDelete(user);
    trigerDialog();
  };
  const deleteUser = () => {
    setUserList((oldState) =>
      oldState.filter((item) => item.id !== userToDelete?.id)
    );
    trigerDialog();
    setUserToDelete(null);
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
      <Dialog>
        <div className="delete-message">
          <p>Tem certeza que deseja deletar o usuário {userToDelete?.name}?</p>
          <div>
            <button onClick={trigerDialog}>Não</button>
            <button onClick={deleteUser}>Sim</button>
          </div>
        </div>
      </Dialog>

      <table>
        <thead>
          <tr>
            <td>#Id</td>
            <td>Nome</td>
            <td>E-mail</td>
            <td>Phone</td>
            <td></td>
          </tr>
        </thead>
        <tbody>
          {userList.map((item) => (
            <UserItem key={item.id} onDelete={handleDelete} {...item} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
