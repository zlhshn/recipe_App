import { Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import Home from "../pages/Home";
import Register from "../pages/Register";
import PrivateRouter from "./PrivateRouter";
import Main from  "../pages/Main"
import Details from "../pages/Details";
import About from "../pages/About";
import Contact from "../pages/Contact";
const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Main/>} />

        <Route path="" element={<PrivateRouter />}>
          <Route path="home" element={<Home />} />
          <Route path=":id" element={<Details />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </>
  );
};
export default AppRouter;
