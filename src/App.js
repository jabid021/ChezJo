import "./App.css";
import Banniere from "./components/banniere";
import Traiteur from "./components/traiteur";
import Commande from "./components/commande";
import Footer from "./components/footer";
import { BrowserRouter as Router , Routes , Route , Link } from "react-router-dom";
import Accueil from "./components/accueil";
import Boucherie from "./components/boucherie";
function App() {
  return (
   

      <Router>
        <nav>
          <Banniere />
        </nav>
        <Accueil />
        <Routes>
          <Route path="/" component={Accueil}/>
          <Route path="/boucherie" component={Boucherie}/>
          <Route path="/traiteur" component={Traiteur}/>
          <Route path="/commande" component={Commande}/>
        </Routes>
        <Footer />
      </Router>


  );
}

export default App;
