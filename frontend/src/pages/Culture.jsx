import { usePagesContext } from "../contexts/PagesContext";

function Culture() {
  const { setActiveButton } = usePagesContext();
  setActiveButton("/culture-dev");
  return (
    <div className="body-content">
      <p>Culture</p>
      <h2>Hello World !</h2>
      <h3>Welcome</h3>
    </div>
  );
}

export default Culture;
