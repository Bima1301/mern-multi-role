import React from "react";
import Layout from "./Layout";
import { Label, TextInput, Textarea } from "flowbite-react";

const About = () => {
  return (
    <Layout>
      <div className="min-w-full mb-20">
        <p className="text-3xl font-bold dark:text-white md:my-10 my-5 transition-background">
          About Section
        </p>
        <form
          action=""
          className="flex md:flex-row md:justify-between flex-col-reverse md:gap-8 gap-5"
        >
          <div className="flex flex-col justify-between  md:w-1/2 w-full">
            <div className=" w-full">
              <div className="mb-2 block">
                <Label htmlFor="comment" value="Story" />
              </div>
              <Textarea
                type="text"
                id="story"
                rows={4}
                placeholder="Write your story"
                required
                className="transition-background "
              />
            </div>
            <div className="w-full flex justify-between gap-5 mt-20">
              <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded transition-background w-full">
                Reset
              </button>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-background w-full">
                Save
              </button>
            </div>
          </div>
          <div className="md:py-6 md:px-10 p-5 rounded-lg border dark:border-slate-400 md:w-1/2 w-full">
            <p className="text-2xl font-bold mb-5 dark:text-white">Biodata</p>
            <div className="flex md:flex-row md:justify-between md:gap-5 flex-col ">
              <div className="w-full">
                <div className="mb-3">
                  <div className="mb-2 block">
                    <Label htmlFor="contact" value="Age" />
                  </div>
                  <TextInput
                    type="text"
                    id="age"
                    placeholder="Your age"
                    required
                    className="transition-background"
                  />
                </div>
                <div className="mb-3">
                  <div className="mb-2 block">
                    <Label htmlFor="contact" value="Gender" />
                  </div>
                  <TextInput
                    type="text"
                    id="gender"
                    placeholder="Your gender"
                    required
                    className="transition-background"
                  />
                </div>
                <div className="mb-3">
                  <div className="mb-2 block">
                    <Label htmlFor="contact" value="Phone" />
                  </div>
                  <TextInput
                    type="text"
                    id="phone"
                    placeholder="Your phone"
                    required
                    className="transition-background"
                  />
                </div>
              </div>
              <div className="w-full">
                <div className="mb-3">
                  <div className="mb-2 block">
                    <Label htmlFor="contact" value="Address" />
                  </div>
                  <TextInput
                    type="text"
                    id="address"
                    placeholder="Your address"
                    required
                    className="transition-background"
                  />
                </div>
                <div className="mb-3">
                  <div className="mb-2 block">
                    <Label htmlFor="contact" value="Recidence" />
                  </div>
                  <TextInput
                    type="text"
                    id="recidence"
                    placeholder="Your recidence"
                    required
                    className="transition-background"
                  />
                </div>
                <div className="mb-3">
                  <div className="mb-2 block">
                    <Label htmlFor="contact" value="Email" />
                  </div>
                  <TextInput
                    type="email"
                    id="email"
                    placeholder="Your email"
                    required
                    className="transition-background"
                  />
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default About;
