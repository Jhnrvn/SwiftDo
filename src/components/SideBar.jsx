import { useAuthentication } from "../contexts/LoginAuthenticationProvider";
import { IoIosAddCircle } from "react-icons/io";

const SideBar = () => {
  const { showSidebar } = useAuthentication();

  return (
    <nav
      className={`fixed ${showSidebar ? "left-0" : "-left-60"} h-screen w-60 bg-gradient-to-b from-blue-500 to-violet-500 p-5`}
    >
      <button className="mt-15 flex h-12 w-full items-center justify-between rounded-3xl bg-white px-2">
        <p className="pl-3">Add Task</p>
        <IoIosAddCircle className="size-9"/>
      </button>
    </nav>
  );
};

export default SideBar;
