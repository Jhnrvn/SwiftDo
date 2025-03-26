const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className="z-10 flex h-28 w-full items-center justify-center font-normal text-blue-500 shadow-lg dark:bg-slate-900 dark:font-normal">
      <p className="text-sm dark:text-white">
        Copyright &copy; SwiftDo {year}. All rights reserved
      </p>
    </footer>
  );
};

export default Footer;
