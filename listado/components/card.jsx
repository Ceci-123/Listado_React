import '../src/App.css'

function Card() {
  return <div className="card">
    <img src="./src/assets/images/perro.jpg" alt="un perro bonito" />
    <div className="card-body">
      <div className="card-title">
    Tarjeta titulo
      </div>
      <div className="card-text">
      y algo mas de texto

      </div>
      </div>
    </div>;
}

export default Card;
