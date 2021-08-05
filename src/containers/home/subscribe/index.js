import React from "react";
import Input from "../../../components/forms/input";
// import Button from "@components/button";

const Subscribe = () => {
  return (
    <div className="relative lg:pt-8 md:pt-4">
      <div
        className="absolute bottom-0 w-full bg-whitesmoke"
        style={{ height: "50%" }}
      />
      <div className="px-10 xl:x-40 lg:px-30 md:px-20">
        <div
          className="relative flex flex-col items-center w-full p-6 overflow-hidden bg-center bg-cover shadow-lg md:flex-row lg:p-16 md:p-6 rounded-2xl"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1549605775-b5b37eefbb1b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80')`,
          }}
        >
          <div className="absolute inset-0 w-full h-full opacity-75 bg-seagreen" />
          <div className="z-10 flex flex-col items-center w-full px-2 md:items-start lg:w-1/2">
            <p className="text-2xl text-white font-fredoka">Subscribe</p>
            <p className="text-center text-white md:text-left">
              Be the first to receive the latest updates and quickly secure
              properties that match your needs. Subscribe now!
            </p>
          </div>
          <form
            // onSubmit={handleSubmit(onSubmit)}
            className="z-10 flex flex-col items-center w-full sm:w-3/4 lg:items-end lg:w-1/2"
          >
            <div className="w-full my-5 lg:w-3/4">
              <Input
                type="email"
                name="email"
                placeholder="Enter your email address"
                className="p-0"
              />
            </div>
            {/* <Button
              style="festival"
              caption="Subscribe"
              className="flex justify-end w-full px-2"
              btStyle="w-full md:w-auto"
              buttonType="submit"
            /> */}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
