import { usePagesContext } from "../contexts/PagesContext";

function Basics() {
  const { setActiveButton } = usePagesContext();
  setActiveButton("/basics");

  return (
    <div className="body-content">
      <p>Basics</p>
      <h2>Hello World !</h2>
      <h3>Welcome</h3>
    </div>
  );
}

export default Basics;
