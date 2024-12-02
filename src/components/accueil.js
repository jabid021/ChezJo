import Presentation from "./presentation";
import Atouts from "./atouts";
import NewsSlider from "./offres";
import NousTrouver from "./trouver";
import GoCommande from "./go-commande";
import ContactForm from "./formulaire-contact";

const Accueil = () => {
  return (
    <div>
      <Presentation />
      <hr />
      <Atouts />
      <NewsSlider />
      <NousTrouver />
      <hr />
      <GoCommande />
      <hr />
      <ContactForm />
    </div>
  );
};

export default Accueil;
