import { useTheme } from "../contexts/ThemeContextProvider";
import { MdLightMode, MdDarkMode } from "react-icons/md";
const Header = () => {
  const { theme, setTheme } = useTheme();

  const handleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <header className="fixed top-0 left-0 z-50 flex h-16 w-full items-center justify-center bg-white shadow-sm dark:bg-slate-900">
      <div className="flex w-full items-center justify-center">
        <h1 className="text-4xl font-bold text-blue-500">
          Swift<span className="text-violet-500">Do</span>
        </h1>
      </div>

      {/* toggle dark mode and light mode  */}
      <div className="absolute right-5 md:right-10 flex w-9 items-center justify-center rounded-4xl bg-slate-300 dark:bg-white">
        {theme === "light" ? (
          <MdDarkMode
            className="cursor-pointer text-4xl text-slate-950"
            onClick={() => handleTheme()}
          />
        ) : (
          <MdLightMode
            className="cursor-pointer text-4xl text-violet-600"
            onClick={() => handleTheme()}
          />
        )}
      </div>
    </header>
  );
};

export default Header;
