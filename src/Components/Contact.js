import { useParams, useNavigate } from "react-router-dom";

function Contact() {
  const { id } = useParams();
  const navigate = useNavigate();
  return (
    <>
      <h1>This is Contact page {id}</h1>
      <button onClick={() => navigate("/home")}>Go Home</button>
    </>
  );
}

export default Contact;