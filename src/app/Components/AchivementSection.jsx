import React from "react";

const achivementList = [
  {
    metric: "Projects",
    value: "10+",
  },
  {
    metric: "Referals",
    value: "2+",
  },
  {
    metric: "Cups of coffee",
    value: "999+",
  },
];

export const AchivementSection = () => {
  return (
    <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      <div className="border-[#33353F] bg-[#121212] border rounded-md py-8 px-17 flex flex-col md:flex-row text-sm items-center justify-around">
        {achivementList.map((achivement, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center justify-between mx-4"
            >
              <h2 className="text-white text-4xl font-bold">
                {achivement.value}
              </h2>
              <p className="text-[#ADB7BE] text-base">{achivement.metric}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
