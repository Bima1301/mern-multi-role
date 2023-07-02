import React from "react";
import Layout from "../../Layout";
import { NavLink } from "react-router-dom";

const ListUser = () => {
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
        <div class="w-full mx-auto dark:bg-gray-800 bg-white shadow-lg rounded-md border border-gray-200">
          <div class="overflow-x-auto rounded-md">
            <table class="table-auto w-full">
              <thead class="text-xs font-semibold uppercase dark:bg-gray-50 bg-gray-500 dark:text-black text-white">
                <tr className="py-10">
                  <th class="p-2 whitespace-nowrap">
                    <p class="font-semibold text-left pl-4">Name</p>
                  </th>
                  <th class="p-2 whitespace-nowrap">
                    <p class="font-semibold text-left">Email</p>
                  </th>
                  <th class="p-2 whitespace-nowrap">
                    <p class="font-semibold text-left">Spent</p>
                  </th>
                  <th class="p-2 whitespace-nowrap">
                    <p class="font-semibold text-center">Country</p>
                  </th>
                </tr>
              </thead>
              <tbody class="text-sm divide-y divide-gray-100">
                <tr>
                  <td class="p-2 whitespace-nowrap">
                    <div class="flex items-center pl-4">
                      <div class="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                        <img
                          class="rounded-full"
                          src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-05.jpg"
                          width="40"
                          height="40"
                          alt="Alex Shatov"
                        />
                      </div>
                      <p class="font-medium dark:text-white text-gray-800">
                        Alex Shatov
                      </p>
                    </div>
                  </td>
                  <td class="p-2 whitespace-nowrap">
                    <p class="text-left dark:text-white">
                      alexshatov@gmail.com
                    </p>
                  </td>
                  <td class="p-2 whitespace-nowrap">
                    <p class="text-left font-medium text-green-500 dark:text-green-200">
                      $2,890.66
                    </p>
                  </td>
                  <td class="p-2 whitespace-nowrap pr-4">
                    <div class="text-lg text-center">??</div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ListUser;
