import LoginPage from "./LoginPage";
import HomePage from "./HomePage";
import { useAuthentication } from "../contexts/LoginAuthenticationProvider";

const MainContent = () => {
  const { authenticated } = useAuthentication();
  return (
    <main className="min-h-screen w-full bg-slate-200 px-5 py-10 dark:bg-slate-800">
      {authenticated ? <HomePage /> : <LoginPage />}
    </main>
  );
};

export default MainContent;
