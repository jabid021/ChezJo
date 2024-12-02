import "./App.css";
import Banniere from "./components/banniere";
import Traiteur from "./components/traiteur";
import Commande from "./components/commande";
import Footer from "./components/footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Accueil from "./components/accueil";
import Boucherie from "./components/boucherie";
function App() {
  return (
    <div>
      <Router>
        <Banniere />
        <Routes>
          <Route path="/boucherie" Component={Boucherie} />
          <Route path="/traiteur" element={<Traiteur />} />
          <Route path="/commande" element={<Commande />} />
          <Route path="*" element={<Accueil />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
