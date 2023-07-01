import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import React from "react";

const Login = () => {
  return (
    <div className="bg-slate-200 min-w-full min-h-screen flex justify-center items-center">
      <form className="flex flex-col gap-4 w-[50%] bg-white rounded-md px-10">
        <p className="text-4xl text-center font-bold pt-8 pb-10">Login</p>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email1" value="Your email" />
          </div>
          <TextInput
            id="email1"
            placeholder="name@flowbite.com"
            required
            type="email"
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password1" value="Your password" />
          </div>
          <TextInput id="password1" required type="password" />
        </div>
        <div className="flex items-center gap-2">
          <Checkbox id="remember" />
          <Label htmlFor="remember">Remember me</Label>
        </div>
        <Button type="submit" className="mb-14">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default Login;
