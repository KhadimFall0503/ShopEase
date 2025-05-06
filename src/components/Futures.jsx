import Title from "./Title";
import MesProducts from "../data/MesProducts"; // Assuming you have a data file with your products
import "../styles/products.css"


function Futures() {
  return (
    <div className="futures pt-5">
      <div className="container">
        <Title title="Produits en Vedette" />
        <div className="row align-items-center justify-content-center">
          {MesProducts.map((product) => (
            <div key={product.id} className="col-md-3 mb-4 gap-2 d-flex justify-content-center pt-5">
            <div className="card product-card shadow-lg" style={{ width: "18rem" }}>
              <img
                src={product.image}
                alt={product.title}
                className="card-img-top product-image"
              />
              <div className="card-body text-center">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">{product.description}</p>
                <p className="fw-bold text-primary">{product.price} €</p>
                <button className="btn btn-primary">Ajouter au panier</button>
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

