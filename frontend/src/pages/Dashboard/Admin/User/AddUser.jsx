import React, { useEffect, useState } from "react";
import Layout from "../../Layout";
import { Label, Select, TextInput } from "flowbite-react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMe } from "../../../../features/authSlice";
import Swal from "sweetalert2";
import LoadingPage from "../../../LoadingPage";
import useSWR from "swr";
import axios from "axios";

const AddUser = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    roleId: "",
  });
  const navigate = useNavigate();
  const handleGeneratePassword = () => {
    const password = Math.random().toString(36).slice(-8);
    setData({ ...data, password: password });
  };
  const [error, setError] = useState({});
  const validateForm = () => {
    let newError = {};
    if (!data.name) {
      newError.name = "Name is required!";
    }
    if (data.email === "") {
      newError.email = "Email is required!";
    }
    if (!/\S+@\S+\.\S+/.test(data.email)) {
      newError.email = "Email is invalid!";
    }
    if (!data.password) {
      newError.password = "Password is required!";
    }
    return newError;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setError(errors);
      return;
    }
    Swal.fire({
      position: "top-right",
      title: "Creating User...",
      showConfirmButton: false,
      willOpen: () => {
        Swal.showLoading();
      },
    });
    axios
      .post(import.meta.env.VITE_APP_BACKEND_URL + "/user", data)
      .then((response) => {
        //show sweet alert 2 seconds
        Swal.fire({
          position: "top-right",
          icon: "success",
          title: "Success",
          text: response.data.message,
          showConfirmButton: false,
          timer: 1500,
        }).then(() => {
          navigate("/dashboard/users");
        });
      })
      .catch((error) => {
        if (error.response) {
          const message = error.response.data.message;
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: message,
          });
        }
      });
  };
  const fetcher = async () => {
    const res = await axios.get(
      import.meta.env.VITE_APP_BACKEND_URL + "/roles"
    );
    return res.data;
  };
  const { data: role, error: roleError } = useSWR("role", fetcher);
  if (!role) return <LoadingPage />;
  return (
    <Layout>
      <div className="min-w-full mb-20">
        <p className="text-3xl font-bold dark:text-white md:my-10 my-5 transition-background">
          Add New User
        </p>
        <form action="" onSubmit={handleSubmit}>
          <div className="mb-3">
            <div className="mb-2 block">
              <Label htmlFor="comment" value="Name" />
            </div>
            <TextInput
              type="text"
              id="name"
              placeholder="Name"
              onChange={(e) => setData({ ...data, name: e.target.value })}
              required
              className="transition-background "
            />
            {error.name && <p className="text-red-500 text-sm">{error.name}</p>}
          </div>
          <div className="mb-3">
            <div className="mb-2 block">
              <Label htmlFor="comment" value="Email" />
            </div>
            <TextInput
              type="email"
              id="email"
              placeholder="Email Address"
              onChange={(e) => setData({ ...data, email: e.target.value })}
              required
              className="transition-background "
            />
            {error.email && (
              <p className="text-red-500 text-sm">{error.email}</p>
            )}
          </div>
          <div className="mb-3">
            <div className="mb-2 block">
              <Label htmlFor="comment" value="Password" />
            </div>
            <div className=" flex flex-row items-start gap-5">
              <div className="w-full flex flex-col">
                <TextInput
                  type="text"
                  id="Password"
                  placeholder="Password"
                  onChange={(e) =>
                    setData({ ...data, password: e.target.value })
                  }
                  required
                  value={data.password}
                  className="transition-background w-full"
                />
                {error.password && (
                  <p className="text-red-500 text-sm">{error.password}</p>
                )}
              </div>
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-background"
                type="button"
                onClick={handleGeneratePassword}
              >
                Generate
              </button>
            </div>
          </div>
          <div className="mb-3">
            <div className="mb-2 block">
              <Label htmlFor="role" value="Role" />
            </div>
            <Select
              label="Role"
              id="role"
              name="role"
              required
              onChange={(e) => setData({ ...data, roleId: e.target.value })}
            >
              <option value="">Select Role</option>
              {role.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
                </option>
              ))}
            </Select>
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-background w-1/3 mt-11"
          >
            Save User
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default AddUser;
