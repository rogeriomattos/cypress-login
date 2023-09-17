import { User } from "../../services/users/type";
import "./styles.css";

type Props = {
  onDelete: (id: number) => void;
} & User;

const UserItem = ({ name, email, phone, id, onDelete }: Props) => {
  return (
    <tr>
      <td>#{id}</td>
      <td>{name}</td>
      <td>{email}</td>
      <td>{phone}</td>
      <td>
        <button onClick={() => onDelete(id)}>Deletar</button>
      </td>
    </tr>
  );
};

export default UserItem;
