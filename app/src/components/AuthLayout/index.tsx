import { useLoaderData, useOutlet } from "react-router-dom";
import { AuthProvider } from "../../context/Auth";

export const AuthLayout = () => {
  const outlet = useOutlet();

  return <AuthProvider>{outlet}</AuthProvider>;
};
