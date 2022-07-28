import dynamic from "next/dynamic";
import React from "react";

export const DynamicComponentWithNoSSR = dynamic(() => import("../Slider"), {
  ssr: false,
});
function Space() {
  return (
    <>
      <section className="bg-[#FBFBFB] p-8  pt-20 relative z-10 mt-20 w-full ">
        <img
          src="space.svg"
          alt=""
          className="absolute h-[40rem]  -z-10 left-0 opacity-7"
        />
        <div className="container m-auto grid grid-cols-1 sm:grid-cols-3 justify-center content-center place-items-center gap-8 ">
          <div>
            <h4 className="text-3xl mb-4 font-camaro text-[#575756] flex items-center gap-2 font-bold">
              Nosso espaço
              <span className="w-20 h-0.5 block bg-[#575756]"></span>
            </h4>
            <h2 className="text-5xl font-camaro font-bold text-[#575756]">
              Lorem ipsum dolor sit amet.
            </h2>

            <p className="font-segoe text-[#575756] mt-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              luctus bibendum scelerisque. Duis ornare et risus id faucibus.
              Fusce tincidunt leo elit. Suspendisse potenti. Nunc vestibulum
              dolor et risus viverra mattis. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Donec a ex quis sapien laoreet
              eleifend.
            </p>
          </div>
          <DynamicComponentWithNoSSR />
        </div>
      </section>
    </>
  );
}

export default Space;
