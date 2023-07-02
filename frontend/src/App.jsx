import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Home";
import Login from "./components/Login";
import Home from "./pages/User/Home";
import About from "./pages/Dashboard/About";
import AddUser from "./pages/Dashboard/Admin/User/AddUser";
import ListUser from "./pages/Dashboard/Admin/User/ListUser";
import PageNotFound from "./pages/PageNotFound";
import EditUser from "./pages/Dashboard/Admin/User/EditUser";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
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
