import React, { useState } from "react";

import SingleQuestion from "./SingleQuestion";

const data = [
  {
    id: 1,
    title: "Can I use FlowBite in open-source projects?",
    info: (
      <>
        <p>
          Generally, it is accepted to use FlowBite in open-source projects, as
          long as it is not a UI library, a theme, a template, a page-builder
          that would be considered as an alternative to FlowBite itself.
        </p>
        <p className="pt-2">
          With that being said, feel free to use this design kit for your
          open-source projects.
        </p>
      </>
    ),
  },
  {
    id: 2,
    title: "Where can I access my download files?",
    info: (
      <>
        {" "}
        <p>
          Generally, it is accepted to use FlowBite in open-source projects, as
          long as it is not a UI library, a theme, a template, a page-builder
          that would be considered as an alternative to FlowBite itself.
        </p>
        <p className="pt-2">
          With that being said, feel free to use this design kit for your
          open-source projects.
        </p>
      </>
    ),
  },
  {
    id: 3,
    title: "Can I use FlowBite for commercial purposes?",
    info: (
      <>
        {" "}
        <p>
          Generally, it is accepted to use FlowBite in open-source projects, as
          long as it is not a UI library, a theme, a template, a page-builder
          that would be considered as an alternative to FlowBite itself.
        </p>
        <p className="pt-2">
          With that being said, feel free to use this design kit for your
          open-source projects.
        </p>
      </>
    ),
  },
  {
    id: 4,
    title: "Where can I access my download files?",
    info: (
      <>
        {" "}
        <p>
          Generally, it is accepted to use FlowBite in open-source projects, as
          long as it is not a UI library, a theme, a template, a page-builder
          that would be considered as an alternative to FlowBite itself.
        </p>
        <p className="pt-2">
          With that being said, feel free to use this design kit for your
          open-source projects.
        </p>
      </>
    ),
  },
  {
    id: 5,
    title: "Can I use FlowBite for commercial purposes?",
    info: (
      <>
        {" "}
        <p>
          Generally, it is accepted to use FlowBite in open-source projects, as
          long as it is not a UI library, a theme, a template, a page-builder
          that would be considered as an alternative to FlowBite itself.
        </p>
        <p className="pt-2">
          With that being said, feel free to use this design kit for your
          open-source projects.
        </p>
      </>
    ),
  },
  {
    id: 6,
    title: "Where can I access my download files?",
    info: (
      <>
        {" "}
        <p>
          Generally, it is accepted to use FlowBite in open-source projects, as
          long as it is not a UI library, a theme, a template, a page-builder
          that would be considered as an alternative to FlowBite itself.
        </p>
        <p className="pt-2">
          With that being said, feel free to use this design kit for your
          open-source projects.
        </p>
      </>
    ),
  },
  {
    id: 7,
    title: "Can I use FlowBite for commercial purposes?",
    info: (
      <>
        {" "}
        <p>
          Generally, it is accepted to use FlowBite in open-source projects, as
          long as it is not a UI library, a theme, a template, a page-builder
          that would be considered as an alternative to FlowBite itself.
        </p>
        <p className="pt-2">
          With that being said, feel free to use this design kit for your
          open-source projects.
        </p>
      </>
    ),
  },
  {
    id: 8,
    title: "What about browser support?",
    info: (
      <>
        {" "}
        <p>
          Generally, it is accepted to use FlowBite in open-source projects, as
          long as it is not a UI library, a theme, a template, a page-builder
          that would be considered as an alternative to FlowBite itself.
        </p>
        <p className="pt-2">
          With that being said, feel free to use this design kit for your
          open-source projects.
        </p>
      </>
    ),
  },
];

function Faq() {
  const [questions] = useState(data);
  return (
    <div className="max-w-screen-xl mx-auto mt-[102px]">
    <div className="-translate-y-20  lg:-translate-y-5 px-4 lg:px-0">
      <p className="text-[#6666FF] text-2xl lg:text-[36px] font-Cabinet_Grotesk text-center mb-7 lg:mb-10">
        Frequently asked question
      </p>
      <div class="flex items-center bg-white-100 square-full border border-gray px-4 py-2 max-w-md mx-auto mb-7 lg:mb-20">
  <button class="text-white hover:text-black flex items-center justify-center order-first">
    <svg class="h-4 w-4 fill-current text-black mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
      <path d="M18.92 17.08l-4.6-4.6a7.92 7.92 0 1 0-.84.84l4.6 4.6a.6.6 0 0 0 .85 0 .6.6 0 0 0 0-.85zM2 8a6 6 0 1 1 12 0A6 6 0 0 1 2 8z"/>
    </svg>
  </button>
  <input type="text" placeholder="Search anything OffPro" class="flex-1 bg-transparent outline-none text-gray-800"/>
</div>

    </div>
      <div className="flex flex-wrap gap-2 lg:gap-8 translate-y-[36px] text-[#6B7280] px-7">
        <span className="hover:bg-[#6666FF] rounded-3xl px-4 hover:text-white py-1 text-sm ">
          All
        </span>
        <span className="hover:bg-[#6666FF] rounded-3xl px-4 hover:text-white py-1 text-sm ">
          Dump
        </span>
        <span className="bg-[#6666FF] rounded-3xl px-4 text-white py-1 text-sm">
          Load
        </span>
        <span className="hover:bg-[#6666FF] rounded-3xl px-4 hover:text-white py-1 text-sm ">
          Connect
        </span>
        <span className="hover:bg-[#6666FF] rounded-3xl px-4 hover:text-white py-1 text-sm ">
          Security
        </span>
        <span className="hover:bg-[#6666FF] rounded-3xl px-4 hover:text-white py-1 text-sm ">
          Policy
        </span>
        <span className="hover:bg-[#6666FF] rounded-3xl px-4 hover:text-white py-1 text-sm ">
          Terms & Condition
        </span>
      {/* </div> */}
      </div>
      <main>
        <div className="px-10 mx-auto pb-20 md:py-20 mt-16 lg:mt-2">
          <section className="">
            {questions.map((question) => {
              return (
                <SingleQuestion
                  key={question.id}
                  {...question}
                ></SingleQuestion>
              );
            })}
          </section>
        </div>
      </main>
    </div>
  );
}

export default Faq;
