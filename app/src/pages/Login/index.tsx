import { Navigate } from "react-router-dom";
import { useAuth } from "../../context/Auth";
import "./styles.css";
import { useState } from "react";

const Login = () => {
  const { user, login } = useAuth();
  const [isLoading, setIsLoading] = useState(false);

  if (user) {
    // user is not authenticated
    return <Navigate to="/" />;
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      login({
        name: "Loid Ford",
      });
      setIsLoading(false);
    }, 3000);
  };

  return (
    <form className="login" onSubmit={handleSubmit}>
      <h1>Bem-vindo ao gerenciador de clientes</h1>
      <input
        type="text"
        name="username"
        placeholder="User Name"
        disabled={isLoading}
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        disabled={isLoading}
      />
      <button
        className={isLoading ? "loading" : ""}
        type="submit"
        disabled={isLoading}
      >
        {isLoading ? "Carregando..." : "Login"}
      </button>
    </form>
  );
};

export default Login;
