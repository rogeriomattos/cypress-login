import { useState } from "react";
import UserItem from "../../components/UserItem";
import { userListData } from "../../services/users/data";
import "./styles.css";

const Home = () => {
  const [userList, setUserList] = useState(userListData);
  const onDelete = (id: number) => {
    console.log({ id });
  };

  return (
    <div>
      <h1>HOME</h1>
      <table>
        {userList.map((item) => (
          <UserItem key={item.id} onDelete={onDelete} {...item} />
        ))}
      </table>
    </div>
  );
};

export default Home;
