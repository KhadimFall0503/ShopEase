import Title from "./Title";
import dg from "../assets/dg.jpg"; // Assuming you have a logo image in the assets folder
function About() {
  return (
    <div className="about pt-5">
      <Title title="À Propos de ShopEase" />
     <div className="container">
        <p className="text-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto modi quisquam nesciunt? Inventore voluptas est maiores. <br /> Impedit dolores cupiditate magni rerum similique nostrum dicta, quis at ducimus! Nobis nesciunt iure, <br /> numquam facilis harum nostrum nisi velit sed repellendus assumenda inventore.</p>
        <img src={dg} alt="" className="w-75 img-fluid d-block mx-auto h-25" />
     </div>
    </div>
  );
}
export default About;