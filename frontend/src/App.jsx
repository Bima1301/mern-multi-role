import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Login from "../src/pages/Login.jsx";
import Home from "./pages/User/Home";
import About from "./pages/Dashboard/About";
import AddUser from "./pages/Dashboard/Admin/User/AddUser";
import ListUser from "./pages/Dashboard/Admin/User/ListUser";
import PageNotFound from "./pages/ErrorHandler/PageNotFound.jsx";
import EditUser from "./pages/Dashboard/Admin/User/EditUser";
import DashboardHome from "./pages/Dashboard/DashboardHome.jsx";
import { useDispatch, useSelector } from "react-redux";
import { PrivateRoute, AdminRoute } from "./middleware/PrivateRoute.jsx";
import LoadingPage from "./pages/LoadingPage.jsx";
import Register from "./pages/Register.jsx";

function App() {
  // const dispatch = useDispatch();
  // const navigate = useNavigate();
  const { isError } = useSelector((state) => state.auth);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard/login" element={<Login />} />
          <Route path="/dashboard/register" element={<Register />} />
          <Route path="/dashboard" element={<PrivateRoute />}>
            <Route path="/dashboard" element={<DashboardHome />} />
          </Route>
          <Route path="/dashboard/about" element={<PrivateRoute />}>
            <Route path="/dashboard/about" element={<About />} />
          </Route>
          {/* <PrivateRoute
            path="/dashboard/about"
            component={About}
            isAuthenticated={isError}
          /> */}
          <Route path="/dashboard/users" element={<AdminRoute />}>
            <Route path="/dashboard/users" element={<ListUser />} />
          </Route>
          <Route path="/dashboard/users/create" element={<AdminRoute />}>
            <Route path="/dashboard/users/create" element={<AddUser />} />
          </Route>
          <Route path="/dashboard/users/edit/:id" element={<EditUser />} />
          //handle not found page
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
