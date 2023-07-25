import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../src/pages/Login.jsx";
import Home from "./pages/User/Home";
import About from "./pages/Dashboard/About";
import AddUser from "./pages/Dashboard/Admin/User/AddUser";
import ListUser from "./pages/Dashboard/Admin/User/ListUser";
import PageNotFound from "./pages/ErrorHandler/PageNotFound.jsx";
import EditUser from "./pages/Dashboard/Admin/User/EditUser";
import DashboardHome from "./pages/Dashboard/DashboardHome.jsx";
import { PrivateRoute } from "./middleware/PrivateRoute.jsx";
import Register from "./pages/Register.jsx";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard/login" element={<Login />} />
          <Route path="/dashboard/register" element={<Register />} />
          <Route path="/dashboard" element={<PrivateRoute />}>
            <Route index element={<DashboardHome />} />
            <Route path="about" key={"asasda"} element={<About />} />
            <Route path="users" element={<ListUser />} />
            <Route path="users/create" element={<AddUser />} />
            <Route path="users/edit/:id" element={<EditUser />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
