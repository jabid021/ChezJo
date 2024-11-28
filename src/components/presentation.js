import Meat from "./meat3d";
import "./presentation.css";
const Presentation = () => {
  return (
    <div style={styles.container}>
      <div style={styles.containerMeat}>
        <Meat />
      </div>
      <div style={styles.containerText}>
        <div style={styles.slogan}>
          "ChezJo : Le goût de l'excellence, la passion de la viande !"
        </div>
        <div className="presentation">
          <p>
            Bienvenue chez <strong>ChezJo</strong>, votre boucherie artisanale
            située au cœur de Paris ! Depuis <strong>[insérer l'année]</strong>,
            nous avons à cœur de vous offrir le meilleur de la viande, avec des
            produits d'exception soigneusement sélectionnés auprès d'éleveurs
            locaux et respectueux du bien-être animal.
          </p>
          <p>
            Chez <strong>ChezJo</strong>, la qualité et la fraîcheur sont nos
            priorités. Découvrez une large sélection de viandes savoureuses :
          </p>
          <ul>
            <li>
              <strong>Bœuf tendre et persillé</strong>, issu des meilleures
              races,
            </li>
            <li>
              <strong>Agneau délicat et parfumé</strong>, idéal pour vos plats
              mijotés,
            </li>
            <li>
              <strong>Volaille fermière</strong>, élevée en plein air,
            </li>
            <li>
              Et bien plus encore, toujours préparé avec passion et
              savoir-faire.
            </li>
          </ul>
          <p>
            Notre équipe de bouchers expérimentés se tient à votre disposition
            pour vous conseiller, vous proposer des découpes sur mesure, et
            partager des idées de recettes pour sublimer vos plats.
          </p>
          <p>
            <strong>"ChezJo"</strong>, c'est plus qu'une boucherie : c'est un
            lieu où tradition et modernité se rencontrent pour satisfaire les
            gourmets les plus exigeants.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Presentation;

const styles = {
  container: {
    display: "flex",
  },
  containerMeat: {
    width: "20%",
  },
  containerText: {
    width: "80%",
  },
  slogan: {
    fontFamily: "Playfair Display",
    fontSize: "2rem",
    fontWeight: "bold",
    textAlign: "center",
    color: "#b22222",
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
    margin: "20px 0",
    padding: "10px",
    border: "3px solid #b22222",
    borderRadius: "10px",
    background: "linear-gradient(90deg, #fff5f5, #ffe4e4)",
  },
  presentation: {},
};
