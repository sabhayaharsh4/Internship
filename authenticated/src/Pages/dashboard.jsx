import { useEffect } from "react";
import { useAuth } from "../useAuth";
export default function Dashboard() {
  const authed = useAuth();
  useEffect(() => {
    console.log(authed);
  }, []);
  return <h1>Dashboard</h1>;
}
