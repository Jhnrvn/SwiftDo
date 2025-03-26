import SideBar from "../components/SideBar";
import TaskContainer from "../components/TaskContainer";
const HomePage = () => {
  return (
    <div className="h-screen w-full">
      <SideBar className=""></SideBar>
      <TaskContainer />
    </div>
  );
};

export default HomePage;
