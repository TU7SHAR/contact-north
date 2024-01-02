import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <>
      <footer className="max-w-[100vw] min-w-[100vw] cursor-pointer pl-5 ">
        <div className="border-t border-opacity-10 border-white w-[100vw] flex flex-col  justify-center items-center">
          <div className="lg:py-10 p-3 w-max">
            <div className="flex-col justify-centeritems-start lg:gap-[34px] flex sm:ml-0 ml-[1rem]">
              <div className="items-center lg:mr-[15rem] justify-between md:gap-[0px] mb-5 md:inline-flex">
                <div className="flex-col   justify-center items-start  inline-flex md:mx-[5rem] mb-10">
                  <div className="w-[100%]">
                    <Image
                      src="/logo.png"
                      alt="logo.png"
                      width={40}
                      height={40}
                      className="mb-6"
                    />
                    <div className="w-[300px] h-[39px] text-neutral-400 text-[15px] font-medium   leading-normal">
                      Making the world a better place through constructing
                      elegant hierarchies.
                    </div>
                  </div>
                </div>

                <div className=" md:gap-[75px]  flex lg:flex-row flex-col lg:mr-[10rem] mr-[5rem]">
                  <div className="inline-flex space-x-[3rem]">
                    <div className="w-[71px] flex-col  justify-center items-center gap-3 inline-flex">
                      <div className="w-[71px] h-[30px] text-white text-[15px] font-semibold   leading-normal">
                        Solutions
                      </div>
                      <div className="w-[75px] text-neutral-400 text-[15px] font-semibold   leading-normal">
                        Reciple
                      </div>
                      <div className="w-[75px] text-neutral-400 text-[15px] font-semibold   leading-normal">
                        Websites
                      </div>
                      <div className="w-[75px] text-neutral-400 text-[15px] font-semibold   leading-normal">
                        Software
                      </div>
                      <div className="w-[75px] text-neutral-400 text-[15px] font-semibold   leading-normal">
                        Hosting
                      </div>
                    </div>
                    <div className="w-[79px] flex-col  justify-center items-center gap-3 inline-flex">
                      <div className="w-[79px] h-[30px] text-white text-[15px] font-semibold   leading-normal">
                        Company
                      </div>
                      <div className="w-[75px] text-neutral-400 text-[15px] font-semibold   leading-normal">
                        About
                      </div>
                      <div className="w-[84px] text-neutral-400 text-[15px] font-semibold   leading-normal">
                        Membership
                      </div>
                      <div className="w-[75px] text-neutral-400 text-[15px] font-semibold   leading-normal">
                        Jobs
                      </div>
                    </div>
                  </div>
                  <div className="inline-flex space-x-[3rem]">
                    <div className="w-[79px] flex-col  justify-center items-center gap-3 inline-flex">
                      <div className="w-[79px] h-[30px] text-white text-[15px] font-semibold   leading-normal">
                        Community
                      </div>
                      <div className="w-[75px] text-neutral-400 text-[15px] font-semibold   leading-normal">
                        YouTube
                      </div>
                      <div className="w-[75px] text-neutral-400 text-[15px] font-semibold   leading-normal">
                        Discord
                      </div>
                      <div className="w-[75px] text-neutral-400 text-[15px] font-semibold   leading-normal">
                        Github
                      </div>
                    </div>
                    <div className="w-[72px] flex-col  justify-center items-center gap-3 inline-flex">
                      <div className="w-[72px] h-[30px] text-white text-[15px] font-semibold   leading-normal">
                        Legal
                      </div>
                      <div className="w-[75px] text-neutral-400 text-[15px] font-semibold   leading-normal">
                        Claim
                      </div>
                      <div className="w-[75px] text-neutral-400 text-[15px] font-semibold   leading-normal">
                        Privacy
                      </div>
                      <div className="w-[75px] text-neutral-400 text-[15px] font-semibold   leading-normal">
                        Terms
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="xl:w-[1280px] lg:w-[950px] w-[97vw] h-[0px] md:ml-[5rem]  border border-white border-opacity-10 "></div>
              <div className=" w-[95vw] text-neutral-400 text-[15px] font-medium center leading-normal text-wrap">
                © 2023 The North Solution. All rights reserved.
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
