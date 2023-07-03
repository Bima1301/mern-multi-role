import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../src/pages/Login.jsx";
import Home from "./pages/User/Home";
import About from "./pages/Dashboard/About";
import AddUser from "./pages/Dashboard/Admin/User/AddUser";
import ListUser from "./pages/Dashboard/Admin/User/ListUser";
import PageNotFound from "./pages/PageNotFound";
import EditUser from "./pages/Dashboard/Admin/User/EditUser";
import DashboardHome from "./pages/Dashboard/DashboardHome.jsx";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/dashboard" element={<DashboardHome />} />
          <Route path="/dashboard/about" element={<About />} />
          <Route path="/dashboard/users" element={<ListUser />} />
          <Route path="/dashboard/users/create" element={<AddUser />} />
          <Route path="/dashboard/users/edit/:id" element={<EditUser />} />
          //handle not found page
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
