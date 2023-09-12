import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
const Home = () => {
  return (
    <div>
      <Header />
      <Outlet />
      {/* 
      <h1
        style={{
          width: "100vw",
          backgroundColor: "teal",
        }}
      >
        Footer
      </h1>
     */}
    </div>
  );
};

export default Home;
