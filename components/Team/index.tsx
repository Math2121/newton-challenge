import React from "react";

function Team() {
  return (
    <div className="container m-auto mt-8">
      <div className="flex items-center gap-8 flex-col sm:flex-row">
        <div>
          <h4 className="text-3xl mb-4 font-camaro text-[#575756] flex items-center gap-2 font-bold">
            Nossa Equipe <span className="w-20 h-0.5 block bg-[#575756]"></span>
          </h4>
          <h2 className="text-5xl font-camaro font-bold text-[#575756]">
            Lorem ipsum dolor sit amet.
          </h2>

          <p className="font-segoe text-[#575756] mt-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis luctus
            bibendum scelerisque. Duis ornare et risus id faucibus. Fusce
            tincidunt leo elit. Suspendisse potenti. Nunc vestibulum dolor et
            risus viverra mattis. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Donec a ex quis sapien laoreet eleifend.
          </p>
        
        </div>
        <img src="picture2.png" alt="" className="w-full h-full object-cover" />
      </div>
    </div>
  );
}

export default Team;
