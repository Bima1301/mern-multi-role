import React, { useState, useEffect } from "react";
import Layout from "./Layout";
import { Label, TextInput, Textarea } from "flowbite-react";
import HeadlineTitle from "../../components/Dashboard/Home/HeadlineTitle";
import axios from "axios";
import useSWR, { mutate } from "swr";
import Swal from "sweetalert2";
import LoadingPage from "../LoadingPage";
import toast, { Toaster } from "react-hot-toast";

const DashboardHome = () => {
  const fetcher = async () => {
    const res = await axios.get(
      import.meta.env.VITE_APP_BACKEND_URL + "/dashboard/home"
    );
    return res.data;
  };

  const { data, error, isLoading } = useSWR("homeSection", fetcher);

  const [homeSection, setHomeSection] = useState({
    displayName: "",
    description: "",
    contact: "",
    headline: [],
  });
  useEffect(() => {
    if (data) {
      const headLineArray = data.headline.map((item) => ({
        headline: item.headline,
      }));
      setHomeSection({
        displayName: data.displayName,
        description: data.description,
        contact: data.contact,
        headline: headLineArray,
      });
    }
  }, [data]);
  const validatedForm = () => {
    let newError = {};
    if (!homeSection.displayName) {
      newError.displayName = "Display Name is required!";
    }
    if (!homeSection.description) {
      newError.description = "Description is required!";
    }
    return newError;
  };

  const handleHomeSubmit = (e) => {
    e.preventDefault();
    const errors = validatedForm();
    if (Object.keys(errors).length > 0) {
      return;
    }
    if (data) {
      toast.loading("Updating Home Section...");
      axios
        .patch(
          import.meta.env.VITE_APP_BACKEND_URL + "/dashboard/home/" + data.id,
          homeSection
        )
        .then((response) => {
          mutate("homeSection", homeSection);
          toast.dismiss();
          toast.success("Home Section Updated!");
        })
        .catch((error) => {
          toast.dismiss();
          toast.error("Something went wrong!");
        });
    } else {
      toast.loading("Creating Home Section...");
      axios
        .post(
          import.meta.env.VITE_APP_BACKEND_URL + "/dashboard/home",
          homeSection
        )
        .then((response) => {
          mutate("homeSection", homeSection);
          toast.dismiss();
          toast.success("Home Section Created!");
        })
        .catch((error) => {
          toast.dismiss();
          toast.error("Something went wrong!");
        });
    }
  };
  if (isLoading) return <LoadingPage />;
  return (
    <>
      <Toaster />
      <Layout>
        <div className="min-w-full mb-20">
          <p className="text-3xl font-bold dark:text-white md:my-10 my-5 transition-background">
            Home Section
          </p>
          <form onSubmit={handleHomeSubmit} action="" className="w-full">
            <div className="flex md:flex-row md:justify-between flex-col-reverse md:gap-3 gap-0">
              <div className="md:w-[60%] w-full" id="textarea">
                <div className="mb-3">
                  <div className="mb-2 block">
                    <Label htmlFor="displayName" value="Display Name" />
                  </div>
                  <TextInput
                    type="text"
                    id="displayName"
                    name="displayName"
                    value={homeSection.displayName}
                    onChange={(e) =>
                      setHomeSection({
                        ...homeSection,
                        displayName: e.target.value,
                      })
                    }
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
                    name="description"
                    value={homeSection.description}
                    onChange={(e) =>
                      setHomeSection({
                        ...homeSection,
                        description: e.target.value,
                      })
                    }
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
                    name="contact"
                    value={homeSection.contact}
                    onChange={(e) =>
                      setHomeSection({
                        ...homeSection,
                        contact: e.target.value,
                      })
                    }
                    placeholder="ex. https://wa.me/628123456789"
                    required
                    className="transition-background"
                  />
                </div>
              </div>
              <HeadlineTitle
                headlineData={homeSection.headline}
                setHomeSection={setHomeSection}
                homeSection={homeSection}
              />
            </div>
            <div className="w-full flex justify-between gap-5 mt-20">
              <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded transition-background w-full">
                Reset
              </button>
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-background w-full"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </Layout>
    </>
  );
};

export default DashboardHome;
