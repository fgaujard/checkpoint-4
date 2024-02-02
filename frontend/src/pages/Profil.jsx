import { useLoaderData } from "react-router-dom";
import { usePagesContext } from "../contexts/PagesContext";

function Profil() {
  const user = useLoaderData();

  if (!user.login) window.location.href = "/login";
  else {
    const { setActiveButton } = usePagesContext();
    setActiveButton("/desabled");

    if (!user.login) window.location.href = "/login";
    else {
      return (
        <div className="body-content">
          <h1>Profil</h1>
          <h3>{user.username}</h3>
          <h3>{user.team}</h3>
        </div>
      );
    }
  }
}

export default Profil;
