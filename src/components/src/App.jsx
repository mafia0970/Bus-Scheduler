import "./App.css";
import FooterMain from "./components/Home-page/Footer";
import MainContent from "./components/Home-page/MainContent";
import Navigation from "./components/Home-page/Navigation";

function App() {
  return (
    <>
      <Navigation></Navigation>
      <MainContent></MainContent>
      <FooterMain></FooterMain>
    </>
  );
}

export default App;
