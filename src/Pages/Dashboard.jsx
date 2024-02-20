import { useContext } from "react";
import { UserContext } from "../Context/UserContext";

function Dashboard() {
  const { user } = useContext(UserContext);
  return <div>{user}</div>;
}
export default Dashboard;
