import { useLoaderData } from "react-router-dom";

function Admin() {
  const user = useLoaderData();
  if (!user.login) window.location.href = "/login";
  else {
    return (
      <div className="body-content">
        <p>Culture</p>
        <h2>Hello World !</h2>
        <h3>Welcome</h3>
      </div>
    );
  }
}

export default Admin;
