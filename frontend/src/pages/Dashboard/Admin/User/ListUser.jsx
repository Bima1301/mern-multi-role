import React, { useEffect } from "react";
import Layout from "../../Layout";
import { NavLink, useNavigate } from "react-router-dom";
import useSWR, { useSWRConfig, mutate } from "swr";
import axios from "axios";
import LoadingPage from "../../../LoadingPage";
import { BsTrash } from "react-icons/bs";
import Swal from "sweetalert2";
import { Pagination } from "flowbite-react";
const ListUser = () => {
  const fetcher = async () => {
    const res = await axios.get(
      import.meta.env.VITE_APP_BACKEND_URL + "/users"
    );
    return res.data;
  };
  const { data, error } = useSWR("users", fetcher);
  console.log("data", data);
  if (!data) return <LoadingPage />;
  const handlePageChange = (page) => {
    mutate(
      "users",
      async (users) => {
        const res = await axios.get(
          import.meta.env.VITE_APP_BACKEND_URL + "/users?page=" + page
        );
        return res.data;
      },
      false
    );
  };
  return (
    <Layout>
      <div className="min-w-full mb-20">
        <div className=" flex w-full justify-between items-center">
          <p className="text-3xl font-bold dark:text-white md:my-10 my-5 transition-background">
            List User
          </p>
          <NavLink
            to={"/dashboard/users/create"}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-background"
          >
            Add User
          </NavLink>
        </div>
        <div className="w-full mx-auto dark:bg-gray-800 bg-white shadow-lg rounded-md border border-gray-200 dark:border-transparent">
          <div className="relative">
            <table className="table-auto w-full ">
              <thead className="text-xs font-semibold uppercase dark:bg-gray-50 bg-gray-500 dark:text-black text-white ">
                <tr className="py-10 ">
                  <th className="p-2 whitespace-nowrap rounded-tl-md">
                    <p className="font-semibold text-left pl-4">Name</p>
                  </th>
                  <th className="p-2 whitespace-nowrap">
                    <p className="font-semibold text-left">Email</p>
                  </th>
                  <th className="p-2 whitespace-nowrap">
                    <p className="font-semibold text-left">Role</p>
                  </th>
                  <th className="p-2 whitespace-nowrap rounded-tr-md">
                    <p className="font-semibold text-center">Action</p>
                  </th>
                </tr>
              </thead>
              <tbody className="text-sm divide-y divide-gray-100">
                {data.user.map((user, key) => {
                  return (
                    <tr key={key} className="dark:border-transparent">
                      <td className="p-2 whitespace-nowrap">
                        <div className="flex items-center pl-4">
                          <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                            <img
                              className="rounded-full"
                              src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-05.jpg"
                              width="40"
                              height="40"
                              alt="Alex Shatov"
                            />
                          </div>
                          <p className="font-medium dark:text-white text-gray-800">
                            {user.name}
                          </p>
                        </div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <p className="text-left dark:text-white">
                          {user.email}
                        </p>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <p className="text-left font-medium text-green-500 dark:text-green-200">
                          {user.role.name}
                        </p>
                      </td>
                      <td className="p-2 whitespace-nowrap pr-4">
                        <div className="text-lg text-center">
                          <button
                            onClick={() => {
                              Swal.fire({
                                title: "Are you sure?",
                                text: "You won't be able to revert this!",
                                icon: "warning",
                                showCancelButton: true,
                                confirmButtonColor: "#3085d6",
                                cancelButtonColor: "#d33",
                                confirmButtonText: "Yes, delete it!",
                              }).then((result) => {
                                if (result.isConfirmed) {
                                  Swal.fire({
                                    title: "Deleting...",
                                    allowOutsideClick: false,
                                    showConfirmButton: false,
                                    willOpen: () => {
                                      Swal.showLoading();
                                    },
                                  });

                                  axios
                                    .delete(
                                      `${
                                        import.meta.env.VITE_APP_BACKEND_URL
                                      }/user/${user.uuid}`
                                    )
                                    .then((res) => {
                                      Swal.hideLoading();
                                      mutate("users");
                                      Swal.fire({
                                        icon: "success",
                                        title: "Deleted!",
                                        text: res.data.message,
                                      });
                                    })
                                    .catch((err) => {
                                      Swal.hideLoading();
                                      Swal.fire({
                                        icon: "error",
                                        title: "Oops...",
                                        text: err.response.data.message,
                                      });
                                    });
                                }
                              });
                            }}
                            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition-background"
                          >
                            <BsTrash />
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <div className="absolute right-0">
              <div>
                <Pagination
                  className="pb-5"
                  currentPage={data.meta.currentPage}
                  onPageChange={handlePageChange}
                  showIcons
                  totalPages={data.meta.totalPages}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ListUser;
