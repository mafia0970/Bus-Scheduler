import "./App.css";
import FooterMain from "./components/Footer";
import MainContent from "./components/MainContent";
import Navigation from "./components/Navigation";
import "leaflet/dist/leaflet.css";
import MultiRouteMap from "./components/MapComponent";
import Admin from "./Admin";
function App() {
  return (
    <>
      <Navigation></Navigation>
      <MainContent></MainContent>
      <MultiRouteMap />
      <FooterMain></FooterMain>
    </>
  );
}

export default App;
