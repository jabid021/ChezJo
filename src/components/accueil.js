import Banniere from "./banniere";
import Presentation from "./presentation";
import Atouts from "./atouts";
import Offres from "./offres";
import NousTrouver from "./trouver";
import GoCommande from "./go-commande";
import ContactForm from "./formulaire-contact";
import Footer from "./footer";

const Accueil = () => {
  return (
    <div>
      <Banniere />
      <Presentation />
      <Atouts />
      <Offres />
      <NousTrouver />
      <GoCommande />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Accueil;
