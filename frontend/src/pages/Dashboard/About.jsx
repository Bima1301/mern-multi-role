import React, { useEffect, useState } from "react";
import Layout from "./Layout";
import { Label, TextInput, Textarea } from "flowbite-react";

const About = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(false);
  }, []);
  const [aboutSection, setAboutSection] = useState({
    story: "",
    age: "",
    address: "",
    phone: "",
    email: "",
    recidence: "",
  });
  function handleChange(e) {
    const { name, value } = e.target;
    setAboutSection((prev) => ({
      ...prev,
      [name]: value,
    }));
  }
  function handleAboutSubmit(e) {
    e.preventDefault();
    console.log("aboutSection", aboutSection);
  }
  return (
    <Layout>
      <div className="min-w-full mb-20">
        <p className="text-3xl font-bold dark:text-white md:my-10 my-5 transition-background">
          About Section
        </p>
        <form
          onSubmit={handleAboutSubmit}
          action=""
          className="flex md:flex-row md:justify-between flex-col-reverse md:gap-8 gap-5"
        >
          <div className="flex flex-col justify-between  md:w-1/2 w-full">
            <div className=" w-full">
              <div className="mb-2 block">
                <Label htmlFor="story" value="Story" />
              </div>
              <Textarea
                type="text"
                id="story"
                name="story"
                rows={4}
                value={aboutSection.story}
                onChange={handleChange}
                placeholder="Write your story"
                required
                className="transition-background "
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
          </div>
          <div className="md:py-9 md:px-10 p-5 rounded-lg border dark:border-slate-400 md:w-1/2 w-full">
            <p className="text-2xl font-bold mb-5 dark:text-white">Biodata</p>
            <div className="flex md:flex-row md:justify-between md:gap-5 flex-col ">
              <div className="w-full">
                <div className="mb-3">
                  <div className="mb-2 block">
                    <Label htmlFor="age" value="Age" />
                  </div>
                  <TextInput
                    type="number"
                    id="age"
                    name="age"
                    value={aboutSection.age}
                    onChange={handleChange}
                    placeholder="Your age"
                    required
                    className="transition-background"
                  />
                </div>
                <div className="mb-3">
                  <div className="mb-2 block">
                    <Label htmlFor="gender" value="Gender" />
                  </div>
                  <TextInput
                    type="text"
                    id="gender"
                    name="gender"
                    value={aboutSection.gender}
                    onChange={handleChange}
                    placeholder="Your gender"
                    required
                    className="transition-background"
                  />
                </div>
                <div className="mb-3">
                  <div className="mb-2 block">
                    <Label htmlFor="phone" value="Phone" />
                  </div>
                  <TextInput
                    type="text"
                    id="phone"
                    name="phone"
                    value={aboutSection.phone}
                    onChange={handleChange}
                    placeholder="Your phone"
                    required
                    className="transition-background"
                  />
                </div>
              </div>
              <div className="w-full">
                <div className="mb-3">
                  <div className="mb-2 block">
                    <Label htmlFor="address" value="Address" />
                  </div>
                  <TextInput
                    type="text"
                    id="address"
                    name="address"
                    value={aboutSection.address}
                    onChange={handleChange}
                    placeholder="Your address"
                    required
                    className="transition-background"
                  />
                </div>
                <div className="mb-3">
                  <div className="mb-2 block">
                    <Label htmlFor="recidence" value="Recidence" />
                  </div>
                  <TextInput
                    type="text"
                    id="recidence"
                    name="recidence"
                    value={aboutSection.recidence}
                    onChange={handleChange}
                    placeholder="Your recidence"
                    required
                    className="transition-background"
                  />
                </div>
                <div className="mb-3">
                  <div className="mb-2 block">
                    <Label htmlFor="email" value="Email" />
                  </div>
                  <TextInput
                    type="email"
                    id="email"
                    name="email"
                    value={aboutSection.email}
                    onChange={handleChange}
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
