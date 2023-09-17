import { Navigate } from "react-router-dom";
import { useAuth } from "../../context/Auth";

const Login = () => {
  const { user, login } = useAuth();
  if (user) {
    // user is not authenticated
    return <Navigate to="/" />;
  }
  return (
    <div>
      LOGIN<button onClick={() => login("xx")}>test</button>
    </div>
  );
};

export default Login;
