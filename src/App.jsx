import "./App.css";
import FooterMain from "./components/Footer";
import MainContent from "./components/MainContent";
import Navigation from "./components/Navigation";

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
