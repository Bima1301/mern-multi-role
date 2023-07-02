import React, { useState } from "react";
import Layout from "./Layout";
import { Button, Label, TextInput, Textarea } from "flowbite-react";
import HeadlineTitle from "../../components/Dashboard/Home/HeadlineTitle";

const Home = () => {
  return (
    <Layout>
      <div className="min-w-full">
        <p className="text-3xl font-bold dark:text-white md:my-10 my-5 transition-background">
          Home Section
        </p>
        <form action="" className="w-full">
          <div className="flex md:flex-row md:justify-between flex-col-reverse ">
            <div className="md:w-[60%] w-full" id="textarea">
              <div className="mb-2 block">
                <Label htmlFor="comment" value="About You" />
              </div>
              <Textarea
                id="comment"
                placeholder="Write a short description"
                required
                rows={4}
                className="transition-background"
              />
            </div>
            <HeadlineTitle />
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default Home;
