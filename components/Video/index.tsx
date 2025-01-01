"use client";

import SectionTitle from "../Common/SectionTitleline";
import FireButton from "@/components/Buttons/FireAnimeBtn";
import Image from "next/image";
import { useState } from "react";
import ModalVideo from "react-modal-video";



const Video = () => {
  const [isOpen, setOpen] = useState(false);

  <p className="mb-16 flex items-center text-lg font-medium text-body-color">
    <span className="mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">

    </span>

  </p>

  return (
    <section className="relative z-10 py-16 md:py-20 lg:py-28  ">
      <div className="container">
        <SectionTitle
          title="Our Services"
          center
        />




        {/* tik 1 */}
        <div className="flex flex-col-3 sm:flex-wrap md:flex-wrap max-sm:flex-wrap justify-center content-center text-center mb-8 sm:flex-wrap">
          <div className="flex items-center justify-center sm:flex-row  sm:space-y-2 sm:w-auto">
            <span className="mr-2 flex h-[30px] w-[30px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="fill-current" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </span>
            <p className="ml-2 mr-4 text-body-color text-lg font-medium sm:text-lg">Expertise Across Multiple Technologies</p>
          </div>


          <div className="flex items-center justify-center sm:flex-row  sm:space-y-2 sm:w-auto">
            <span className="mr-2 flex h-[30px] w-[30px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 " fill="fill-current" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </span>
            <p className="ml-2 mr-4 text-body-color text-lg font-medium sm:text-lg">Client-Centric Approach</p>
          </div>


          <div className="flex items-center justify-center sm:flex-row  sm:space-y-2 sm:w-auto">
            <span className="mr-2 flex h-[30px] w-[30px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="fill-current" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </span>
            <p className="ml-2 mr-4 text-body-color text-lg font-medium sm:text-lg">Ongoing Support & Maintenance</p>
          </div>
        </div>

        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div
              className="wow fadeInUp mx-auto max-w-[770px] overflow-hidden rounded-md"
              data-wow-delay=".15s"
            >
              <div className="relative aspect-[77/40] items-center justify-center">
                <Image src="/images/video/video.jpg" alt="video image" fill />
                <div className="absolute right-0 top-0 flex h-full w-full items-center justify-center">
                  <button
                    aria-label="video play button"
                    onClick={() => setOpen(true)}
                    className="flex h-[70px] w-[70px] items-center justify-center rounded-full bg-white bg-opacity-75 text-primary transition hover:bg-opacity-100"
                  >
                    <svg
                      width="16"
                      height="18"
                      viewBox="0 0 16 18"
                      className="fill-current"
                    >
                      <path d="M15.5 8.13397C16.1667 8.51888 16.1667 9.48112 15.5 9.86602L2 17.6603C1.33333 18.0452 0.499999 17.564 0.499999 16.7942L0.5 1.20577C0.5 0.43597 1.33333 -0.0451549 2 0.339745L15.5 8.13397Z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ModalVideo
        channel="youtube"
        
        isOpen={isOpen}
        videoId="L61p2uyiMSo"
        onClose={() => setOpen(false)}
      />

      <div className="absolute bottom-0 left-0 right-0 z-[-1] h-full w-full bg-[url(/images/video/shape.svg)] bg-cover bg-center bg-no-repeat"></div>
      <div className="flex w-full justify-center mt-8">
      <FireButton/>

      </div>
     
    </section>
  );
};

export default Video;
