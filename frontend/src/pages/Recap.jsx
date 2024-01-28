import { usePagesContext } from "../contexts/PagesContext";

function Recap() {
  const { setActiveButton } = usePagesContext();
  setActiveButton("/recap");

  return (
    <div className="body-content">
      <p>Recap</p>
      <h2>Hello World !</h2>
      <h3>Welcome</h3>
    </div>
  );
}

export default Recap;
