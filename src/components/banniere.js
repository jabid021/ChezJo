import "./banniere.css";
import { BrowserRouter as Router , Routes , Route , Link } from "react-router-dom";

const Banniere = () => {
  return (
    <div className="banniere">
      <div className="banniere_logo">
        <img src="" alt="" />
      </div>
      <div></div>
      <div className="banniere_navbar">
        <div><Link exact to="/">Accueil</Link></div>
        <div><Link to="/boucherie">Boucherie</Link></div>
        <div><Link to="/traiteur">Traiteur</Link></div>
      </div>
      <div className="div-commande-btn">
      <Link to="/commande"><button>Passer votre commande</button></Link>
      </div>
    </div>
  );
};

export default Banniere;
