import "./banniere.css";

const Banniere = () => {
  return (
    <div className="banniere">
      <div className="banniere_logo">
        <img src="" alt="" />
      </div>
      <div></div>
      <div className="banniere_navbar">
        <div>Accueil</div>
        <div>Boucherie</div>
        <div>Traiteur</div>
      </div>
      <div className="div-commande-btn">
        <button>Passer votre commande</button>
      </div>
    </div>
  );
};

export default Banniere;
