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
  const [search, setSearch] = useState<string>("");

  const handleDelete = (user: User) => {
    setUserToDelete(user);
    trigerDialog("delete-user");
  };
  const deleteUser = () => {
    setUserList((oldState) =>
      oldState.filter((item) => item.id !== userToDelete?.id)
    );
    trigerDialog("delete-user");
    setUserToDelete(null);
  };

  const handleAdd = (data: any) => {
    setUserList([
      ...userList,
      { ...data, id: userList[userList.length - 1].id + 1 },
    ]);
    trigerDialog("new-user");
  };

  const searchFilter = (user: User) => {
    return user.name.toLowerCase().includes(search.toLowerCase());
  };

  return (
    <div>
      <h1>HOME</h1>
      <div className="actions">
        <Dialog id="new-user" buttonText="Novo Cliente">
          <h2>Novo Cliente</h2>
          <UserForm onSave={handleAdd} />
        </Dialog>
        <Dialog id="delete-user">
          <div className="delete-message">
            <p>
              Tem certeza que deseja deletar o cliente {userToDelete?.name}?
            </p>
            <div>
              <button onClick={() => trigerDialog("delete-user")}>Não</button>
              <button onClick={deleteUser}>Sim</button>
            </div>
          </div>
        </Dialog>
        <input
          type="text"
          placeholder="Buscar Cliente"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
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
          {userList.filter(searchFilter).map((item) => (
            <UserItem key={item.id} onDelete={handleDelete} {...item} />
          ))}
          {userList.filter(searchFilter).length === 0 && (
            <tr>
              <td colSpan={5} align="center">
                Nenhum resultado encontrado
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
