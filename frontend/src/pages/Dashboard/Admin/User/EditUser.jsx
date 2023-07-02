import React from "react";
import Layout from "../../Layout";
import { Label, TextInput } from "flowbite-react";

const EditUser = () => {
  const [data, setData] = React.useState({
    name: "",
    email: "",
    password: "",
  });
  const handleGeneratePassword = () => {
    const password = Math.random().toString(36).slice(-8);
    setData({ ...data, password: password });
  };
  return (
    <Layout>
      <div className="min-w-full mb-20">
        <p className="text-3xl font-bold dark:text-white md:my-10 my-5 transition-background">
          Edit User
        </p>
        <form action="">
          <div className="mb-3">
            <div className="mb-2 block">
              <Label htmlFor="comment" value="Name" />
            </div>
            <TextInput
              type="text"
              id="name"
              placeholder="Name"
              required
              className="transition-background "
            />
          </div>
          <div className="mb-3">
            <div className="mb-2 block">
              <Label htmlFor="comment" value="Email" />
            </div>
            <TextInput
              type="email"
              id="email"
              placeholder="Email Address"
              required
              className="transition-background "
            />
          </div>
          <div className="mb-3">
            <div className="mb-2 block">
              <Label htmlFor="comment" value="Password" />
            </div>
            <div className=" flex flex-row gap-5">
              <TextInput
                type="text"
                id="Password"
                placeholder="Password"
                required
                value={data.password}
                className="transition-background w-full"
              />
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-background"
                type="button"
                onClick={handleGeneratePassword}
              >
                Generate
              </button>
            </div>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default EditUser;
