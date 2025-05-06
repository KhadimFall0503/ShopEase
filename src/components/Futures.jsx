import Title from "./Title";
import MesProducts from "../data/MesProducts";
import "../styles/products.css";

function Futures() {
  return (
    <div className="futures pt-5">
      <div className="container">
        <Title title="Produits en Vedette" />
        <div className="row">
          {MesProducts.map((product) => (
            <div key={product.id} className="col-sm-6 col-md-4 col-lg-3 mb-4 d-flex">
            <div className="card product-card shadow-sm h-100 w-100">
          
                <img
                  src={product.image}
                  alt={product.title}
                  className="card-img-top product-image"
                />
                <div className="card-body d-flex flex-column text-center">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text">{product.description}</p>
                  <p className="fw-bold text-primary">{product.price} €</p>
                  <button className="btn btn-primary mt-auto">Ajouter au panier</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Futures;
