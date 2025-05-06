import image1 from '../assets/Shop.jpg';
import Buton from './Buton';
import "../styles/produit1.css";

function Products() {
  return (
    <div className="container mt-5 pt-5">
    <div className="products bg-white shadow-lg  p-4">
    <div className="row align-items-center justify-content-center">
      <div className="col-md-6">
        <h1>Découvrez les meilleures offres sur des produits <br /> de qualité supérieure</h1>
        <p>Découvrez une large sélection de produits de qualité à des prix imbattables. Que vous recherchiez des vêtements tendance, de l’électronique, des accessoires ou des articles pour la maison, nous avons tout ce qu’il vous faut</p>
      <Buton button="Voir le Panier"/>
      </div>
      <div className="col-md-6">
        <img src={image1} alt="Image du Panier" />
      </div>
    </div>
    </div>
    </div>
  );
}
export default Products;