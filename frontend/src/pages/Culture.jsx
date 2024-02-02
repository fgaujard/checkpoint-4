import { usePagesContext } from "../contexts/PagesContext";
import SVG from "../assets/image.svg";

function Culture() {
  const { setActiveButton } = usePagesContext();
  setActiveButton("/culture-dev");
  return (
    <div className="body-content-center">
      <div
        style={{
          padding: "2rem",
          margin: "0 auto 3.5rem auto",
          borderRadius: "1rem",
          background: "white",
          boxShadow: "41px 41px 82px #c4c4c4, -41px -41px 82px #ffffff",
        }}
      >
        <img src={SVG} alt="svg" width={500} />
      </div>
    </div>
  );
}

export default Culture;
