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
      <section className="overflow-x-hidden">
        <div className="text-white  min-h-max flex w-[100%]  justify-center items-center  ">
          <main className="">
            <div className="card card-side bg-[rgba(0,0,0,0.09)] m-1  shadow-lg sm:p-5 p-3">
              <div className="card-body">
                <div className="my-4">
                  <h2 className="md:text-4xl font-bold tracking-wider  center">
                    How may We assist you?
                  </h2>
                  <p className="md:text-xl text-sm p-1 text-opacity-50 text-white center whitespace-break-spaces">
                    Have a chat with us today!{" "}
                    <span className="res">
                      About whatever project you'd like!
                    </span>
                  </p>
                </div>
                <form onSubmit={handleSubmit}>
                  <div className="flex md:space-x-[7rem] flex-col md:flex-row mb-5">
                    <div className="flex flex-col md:w-[45%] w-[100%]">
                      <label htmlFor="name">
                        Full Name <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder=""
                        id="name"
                        value={name}
                        onChange={handleName}
                        className="border border-[#292929] bg-[#292929] rounded-md text-lg focus:outline-none text-white text-opacity-70 p-1"
                      />
                    </div>
                    <div className="flex flex-col md:w-[45%]   w-[100%]">
                      <label htmlFor="mail">
                        Mail Addr <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="email"
                        placeholder=""
                        id="mail"
                        value={mail}
                        onChange={handleMail}
                        className="border border-[#292929] bg-[#292929] rounded-md text-lg focus:outline-none text-white text-opacity-70 p-1"
                      />
                    </div>
                  </div>
                  <div className="flex md:space-x-[7rem]  md:flex-row flex-col  mb-5">
                    <div className="flex flex-col md:w-[45%] w-[100%]">
                      <label htmlFor="mobile">Phone Number</label>
                      <input
                        type="tel"
                        placeholder=""
                        id="mobile"
                        value={mobile}
                        onChange={handleMobile}
                        className="border border-[#292929] bg-[#292929] rounded-md text-lg focus:outline-none text-white text-opacity-70 p-1"
                      />
                    </div>
                    <div className="flex flex-col md:w-[45%] w-[100%]">
                      <label htmlFor="sbj">Subject</label>
                      <input
                        type="text"
                        placeholder=""
                        id="sbj"
                        value={sbj}
                        onChange={handleSubject}
                        className=" border border-[#292929] bg-[#292929] rounded-md text-lg focus:outline-none text-white text-opacity-70 p-1"
                      />
                    </div>
                  </div>
                  <div className=" my-9 flex flex-col">
                    <label htmlFor="msg">
                      Message <span className="text-red-400">*</span>
                    </label>
                    <textarea
                      id="msg"
                      value={msg}
                      onChange={handleMsg}
                      className="textarea border-2 border-[#292929] bg-[#292929] focus:outline-none mb-3"
                      placeholder=""
                      rows={4}
                    ></textarea>{" "}
                  </div>
                  <button
                    onClick={handleSubmit}
                    className="rounded-lg border border-[#5865f2] bg-[#5865f2] text-lg flex items-center justify-center w-full "
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
