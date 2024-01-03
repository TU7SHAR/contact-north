"use client";
import React, { useState } from "react";

export default function Form() {
  const [mail, setMail] = useState("");
  const [name, setName] = useState("");
  const [sbj, setSbj] = useState("");
  const [mobile, setMobile] = useState("");
  const [msg, setMsg] = useState("");

  const handleName = (event) => {
    let value = event.target.value;
    setName(value);
  };

  const handleSubject = (event) => {
    let value = event.target.value;
    setSbj(value);
  };

  const handleMail = (event) => {
    let value = event.target.value;
    setMail(value);
  };

  const handleMobile = (event) => {
    let value = event.target.value;
    setMobile(value);
  };

  const handleMsg = (event) => {
    let value = event.target.value;
    setMsg(value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (
      mail === "" ||
      mobile === "" ||
      email === "" ||
      msg === "" ||
      sbj === ""
    ) {
      alert("Fill the blanks");
    }

    let regex = /^[a-zA-Z]+$/;
    if (regex.test(mobile)) alert("Fill Blanks Properly");
  };

  return (
    <>
      <section className="overflow-x-hidden z-10">
        <div className="text-white  min-h-max flex w-[100%]  justify-center items-center  ">
          <main className="">
            <div className="card card-side bg-transparent m-1 border border-transparent shadow-lg sm:p-5 p-3">
              <div className="card-body">
                <div className="my-6">
                  <h2 className="md:text-3xl font-bold tracking-wider  center">
                    How may We assist you?
                  </h2>
                  <p className="md:text-sm text-xs p-1 text-opacity-50 text-white  whitespace-break-spaces flex flex-col ">
                    <span className="flex justify-center">
                      Have a chat with us today about whatever project &nbsp;
                    </span>
                    <span className="res flex justify-center">
                      you&apos;d like.
                    </span>
                  </p>
                </div>
                <form onSubmit={handleSubmit} className=" font-semibold">
                  <div className="flex md:space-x-[1.7rem] lg:mb-7  flex-col md:flex-row ">
                    <div className="flex flex-col md:w-[50%] w-[100%] ">
                      <label htmlFor="name">
                        Full Name <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder=""
                        id="name"
                        value={name}
                        onChange={handleName}
                        className="border border-[#292929] bg-[#292929] mb-2 rounded-md text-lg focus:outline-none text-white text-opacity-70 p-1"
                      />
                    </div>
                    <div className="flex flex-col md:w-[50%]   w-[100%]">
                      <label htmlFor="mail">
                        Email <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="email"
                        placeholder=""
                        id="mail"
                        value={mail}
                        onChange={handleMail}
                        className="border border-[#292929] mb-2 bg-[#292929]  rounded-md text-lg focus:outline-none text-white text-opacity-70 p-1"
                      />
                    </div>
                  </div>
                  <div className="flex md:space-x-[1.7rem]   md:flex-row flex-col  lg:mb-7  ">
                    <div className="flex flex-col md:w-[50%] w-[100%]">
                      <label htmlFor="mobile">Phone Number</label>
                      <input
                        type="tel"
                        placeholder=""
                        id="mobile"
                        value={mobile}
                        onChange={handleMobile}
                        className="border border-[#292929] bg-[#292929] mb-2 rounded-md text-lg focus:outline-none text-white text-opacity-70 p-1"
                      />
                    </div>
                    <div className="flex flex-col md:w-[50%] w-[100%]">
                      <label htmlFor="sbj">Subject</label>
                      <input
                        type="text"
                        placeholder=""
                        id="sbj"
                        value={sbj}
                        onChange={handleSubject}
                        className=" border border-[#292929] bg-[#292929] mb-2 rounded-md text-lg focus:outline-none text-white text-opacity-70 p-1"
                      />
                    </div>
                  </div>
                  <div className=" mb-9 flex flex-col">
                    <label htmlFor="msg">
                      Message <span className="text-red-400">*</span>
                    </label>
                    <textarea
                      id="msg"
                      value={msg}
                      onChange={handleMsg}
                      className="textarea border-2 border-[#292929] bg-[#292929]  focus:outline-none focus:border-[#292929] mb-3"
                      placeholder=""
                      rows={4}
                    ></textarea>
                  </div>
                  <button
                    onClick={handleSubmit}
                    className="rounded-lg border md:mb-10 font-semibold tracking-wider border-[#5865f2] bg-[#5865f2] py-2 text-xs flex items-center justify-center w-full "
                  >
                    Send
                  </button>
                </form>
              </div>
            </div>
          </main>
        </div>
      </section>
    </>
  );
}
