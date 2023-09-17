import "./styles.css";
import { useOutlet } from "react-router-dom";
import { ProtectedRoute } from "../ProtectedRoute";
import NavBar from "../NavBar";

const DefaultLayout = () => {
  const outlet = useOutlet();
  return (
    <ProtectedRoute>
      <NavBar />
      <main>{outlet}</main>
    </ProtectedRoute>
  );
};

export default DefaultLayout;
