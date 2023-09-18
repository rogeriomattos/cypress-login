import { User } from "../../services/users/type";
import "./styles.css";

type Props = {
  onDelete: (user: User) => void;
} & User;

const UserItem = ({ onDelete, ...user }: Props) => {
  return (
    <tr>
      <td>#{user.id}</td>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>{user.phone}</td>
      <td align="center">
        <button onClick={() => onDelete(user)}>Deletar</button>
      </td>
    </tr>
  );
};

export default UserItem;
