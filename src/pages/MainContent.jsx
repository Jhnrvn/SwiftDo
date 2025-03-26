import LoginPage from "./LoginPage";
import HomePage from "./HomePage";
import { useAuthentication } from "../contexts/LoginAuthenticationProvider";

const MainContent = () => {
  const { authenticated } = useAuthentication();
  return (
    <main
      className={`min-h-full mt-10 sm:mt-0 ${authenticated ? null : "px-5 py-10"} bg-slate-200 dark:bg-slate-800`}
    >
      {authenticated ? <HomePage /> : <LoginPage />}
    </main>
  );
};

export default MainContent;
