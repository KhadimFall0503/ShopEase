import Title from "./Title";
import dg from "../assets/dg.jpg";

function About() {
  return (
    <section className="about bg-light py-5">
      <div className="container">
        <Title title="À Propos de ShopEase" />

        <div className="row align-items-center mt-4">
          <div className="col-md-6 mb-4 mb-md-0">
            <img
              src={dg}
              alt="À propos ShopEase"
              className="img-fluid rounded shadow w-100"
              style={{ maxHeight: "400px", objectFit: "cover", borderRadius: "12px" }}
            />
          </div>

          <div className="col-md-6">
            <p className="fs-5 text-muted text-justify">
              Chez <strong>ShopEase</strong>, nous croyons qu’un bon shopping commence par une expérience fluide et agréable.
              C’est pourquoi nous mettons à votre disposition une large gamme de produits soigneusement sélectionnés,
              à des prix compétitifs, avec une livraison rapide et un service client fiable.
              <br /><br />
              Que vous soyez à la recherche d’électronique, d’accessoires ou d’articles pour la maison,
              ShopEase est là pour vous simplifier la vie.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
