import React from "react";
import ContactUsSvg from "../Component/ContactUsSvg";
import Header from "../Component/Header";

export default function ContactUs() {
  return (
  <>
  <Header/>
    <div className="min-h-screen flex justify-center items-center">
      <div className="bg-white shadow-2xl grid md:grid-cols-2 lg:p-10   ">
     

        <div className=" h-full flex items-center justify-center">
          <ContactUsSvg/>
        </div> <div >
          <div className="font-bold text-lg text-center">
            Contact Us
          </div>
          <div className="p-4 flex items-center justify-center">
      <form action="" onSubmit={(e) => console.log(e)}>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <div className="mt-4">
                <label htmlFor="first-name">First Name</label>
                <input
                  type="text"
                  id="first-name"
                  className="border-2 border-gray-200 outline-none h-11 w-full rounded-md mt-2 p-2"
                ></input>
              </div>
            </div>
            <div>
              <div className="mt-4">
                <label htmlFor="last-name">Last Name</label>
                <input
                  type="text"
                  id="last-name"
                  className="border-2 border-gray-200 outline-none h-11 w-full rounded-md mt-2 p-2"
                ></input>
              </div>
            </div>
          </div>

          <div className="mt-4">
            {" "}
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              className="border-2 border-gray-200 outline-none h-11 w-full rounded-md mt-2 p-2"
            ></input>
          </div>

          <div className="pt-4">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="phone"
              id="phone"
              className="border-2 border-gray-200 outline-none h-11 w-full rounded-md mt-2 p-2"
            ></input>
          </div>

          <div className="flex justify-center mt-4">
            <button className="h-12 w-1/2 bg-blue-500 border-2 border-gray-100 rounded-md text-white" type="button">
              {" "}
              Submit
            </button>
          </div>
        </form>
</div>
      </div>
      </div>
    </div>
  </>
  );
}
