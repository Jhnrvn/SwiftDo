// i: components
import Header from "./components/Header";
import MainContent from "./pages/MainContent";
import Footer from "./components/Footer";

// i: theme context
import { ThemeContextProvider } from "./contexts/ThemeContextProvider";
const App = () => {

  return (
    <ThemeContextProvider>
      <Header />
      <MainContent />
      <Footer />
    </ThemeContextProvider>
  );
};

export default App;
