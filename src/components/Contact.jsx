import Title from "./Title";

function Contact() {
  return (
    <section className="contact bg-light py-5">
      <div className="container">
        <Title title="Contactez-nous" />

        <div className="row justify-content-center align-items-center mt-4">
          <div className="col-md-6">
            <form className="shadow p-4 rounded bg-white mx-auto">
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Nom</label>
                <input type="text" className="form-control" id="name" placeholder="Entrez votre nom" />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" className="form-control" id="email" placeholder="Entrez votre email" />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea className="form-control" id="message" rows="4" placeholder="Écrivez votre message"></textarea>
              </div>
              <button type="submit" className="btn btn-primary w-100">Envoyer</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
