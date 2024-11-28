import Banniere from "./banniere";
import Presentation from "./presentation";
import Atouts from "./atouts";
import NewsSlider from "./offres";
import NousTrouver from "./trouver";
import GoCommande from "./go-commande";
import ContactForm from "./formulaire-contact";
import Footer from "./footer";

const Accueil = () => {
  return (
    <div>
      <Banniere />
      <hr />
      <Presentation />
      <hr />
      <Atouts />
      <NewsSlider />
      <NousTrouver />
      <hr />
      <GoCommande />
      <hr />
      <ContactForm />

      <Footer />
    </div>
  );
};

export default Accueil;
