import React from "react";

function Content() {
  return (
    <div className="w-full h-screen px-5 py-4 flex flex-col justify-center items-center gap-16 mt-2">
      <img src="/avtar.png" className="h-[75vh]" alt="" />
      <div className="relative w-[40%]">
        <input
          type="text"
          placeholder="Write Sing Word"
          className="h-12 rounded-xl px-3 w-full bg-[#2F2F2F] capitalize"
        />
        <span className="text-3xl absolute right-3 top-2">
          <i class="ri-mic-fill"></i>
        </span>
      </div>
      <div className="absolute right-2 w-36 top-20 rounded-2xl opacity-50 flex flex-col gap-2">
        <img
          src="https://i.pinimg.com/564x/4e/d5/68/4ed568c1a7593283b28e2fe4321b4137.jpg"
          className="w-full h-full rounded-2xl"
          alt=""
        />
        <img
          src="https://i.pinimg.com/564x/6f/cc/1c/6fcc1ca610d96f8861802cfc785b97ef.jpg"
          className="w-full h-full rounded-2xl"
          alt=""
        />
        <img
          src="https://i.pinimg.com/564x/7d/b1/dd/7db1dd10ed2203bfbb04d63c9bfe05bc.jpg"
          className="w-full h-full rounded-2xl"
          alt=""
        />
        <img
          src="https://i.pinimg.com/564x/fb/23/c6/fb23c6cd10491bea51ff0c624938fd97.jpg"
          className="w-full h-full rounded-2xl"
          alt=""
        />
      </div>
    </div>
  );
}

export default Content;
