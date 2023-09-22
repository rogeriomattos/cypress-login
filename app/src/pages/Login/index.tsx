import { Navigate } from "react-router-dom";
import { useAuth } from "../../context/Auth";
import "./styles.css";

const Login = () => {
  const { user, login } = useAuth();

  if (user) {
    // user is not authenticated
    return <Navigate to="/" />;
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTimeout(() => {
      login({
        name: "Loid Ford",
      });
    }, 3000);
  };

  return (
    <form className="login" onSubmit={handleSubmit}>
      <h1>Bem-vindo ao gerenciador de usuários</h1>
      <input type="text" name="username" placeholder="User Name" />
      <input type="password" name="password" placeholder="Password" />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
