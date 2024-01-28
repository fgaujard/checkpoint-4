import { usePagesContext } from "../contexts/PagesContext";

function Profil() {
  const { setActiveButton } = usePagesContext();
  setActiveButton("/desabled");
  return (
    <div className="body-content">
      <h1>Profil</h1>
    </div>
  );
}

export default Profil;
