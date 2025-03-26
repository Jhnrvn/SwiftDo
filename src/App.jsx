// i: components
import Header from "./components/Header";
import MainContent from "./pages/MainContent";
import Footer from "./components/Footer";

// i: theme context
import { ThemeContextProvider } from "./contexts/ThemeContextProvider";
import { LoginAuthenticationProvider } from "./contexts/LoginAuthenticationProvider";
const App = () => {
  return (
    <ThemeContextProvider>
      <LoginAuthenticationProvider>
        <Header />
        <MainContent />
        <Footer />
      </LoginAuthenticationProvider>
    </ThemeContextProvider>
  );
};

export default App;
