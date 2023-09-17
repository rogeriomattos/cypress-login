import { useAuth } from "../../context/Auth";
import "./styles.css";

const NavBar = () => {
  const { logout } = useAuth();

  return (
    <nav>
      <ul>
        <li>LOGO</li>
        <li>
          <a onClick={logout}>Sair</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
