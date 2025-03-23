const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className="flex h-28 w-full items-center justify-center bg-white font-semibold text-blue-500 shadow-lg dark:bg-slate-900">
      <p className="dark:text-white">
        Copyright &copy; SwiftDo {year}. All rights reserved
      </p>
    </footer>
  );
};

export default Footer;
