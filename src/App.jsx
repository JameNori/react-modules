import "./App.css";
import { Header, MainContent, ProductSection, FAQ, Footer } from "./components/elements";
import Button from "./components/common/button";


function App() {
  return (
    <div>
      <Header />
      <MainContent />
      <ProductSection />
      <FAQ />
      <Footer />
      <Button />
    </div>
  );
}

export default App;
