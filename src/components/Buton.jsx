function Button({ button }) {
    return (
      <div className="button">
       <button className="uppercase bg-primary fw-bold  text-center text-white px-3 py-1 rounded-2" type="submit" >{button}</button>
      </div>
    );
  }
  
  export default Button;
  