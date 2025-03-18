const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className="flex h-28 w-full items-center justify-center bg-white font-semibold shadow-lg text-blue-500">
      <p>Copyright &copy; SwiftDo {year}. All rights reserved</p>
    </footer>
  );
};

export default Footer;
