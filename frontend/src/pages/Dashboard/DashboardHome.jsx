import React, { useEffect, useState } from "react";
import Layout from "./Layout";
import { Button, Label, TextInput, Textarea } from "flowbite-react";
import HeadlineTitle from "../../components/Dashboard/Home/HeadlineTitle";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMe } from "../../features/authSlice.js";

const DashboardHome = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isError } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getMe());
  }, [dispatch]);

  useEffect(() => {
    if (isError) {
      navigate("/");
    }
  }, [isError, navigate]);
  return (
    <Layout>
      <div className="min-w-full mb-20">
        <p className="text-3xl font-bold dark:text-white md:my-10 my-5 transition-background">
          Home Section
        </p>
        <form action="" className="w-full">
          <div className="flex md:flex-row md:justify-between flex-col-reverse md:gap-3 gap-0">
            <div className="md:w-[60%] w-full" id="textarea">
              <div className="mb-3">
                <div className="mb-2 block">
                  <Label htmlFor="comment" value="Display Name" />
                </div>
                <TextInput
                  type="text"
                  id="name"
                  placeholder="Your name"
                  required
                  className="transition-background "
                />
              </div>
              <div className="mb-3">
                <div className="mb-2 block">
                  <Label htmlFor="description" value=" Description" />
                </div>
                <Textarea
                  id="description"
                  placeholder="Write a short description"
                  required
                  rows={4}
                  className="transition-background"
                />
              </div>
              <div className="mb-3">
                <div className="mb-2 block">
                  <Label htmlFor="contact" value="Contact (Button)" />
                </div>
                <TextInput
                  type="text"
                  id="contact"
                  placeholder="ex. https://wa.me/628123456789"
                  required
                  className="transition-background"
                />
              </div>
            </div>
            <HeadlineTitle />
          </div>
          <div className="w-full flex justify-between gap-5 mt-20">
            <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded transition-background w-full">
              Reset
            </button>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-background w-full">
              Save
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default DashboardHome;
