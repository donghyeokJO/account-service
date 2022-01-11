import React from "react";
import PropTypes from "prop-types";

export default function CardStats({
  statSubtitle,
  totalNum, 
  doneNum,
  doneNumColor,
  yetNum,
  yetNumColor,
  statIconName,
  statIconColor,
}) {
  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg">
        <div className="flex-auto p-4">
          <div className="flex flex-wrap">
            <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
              <h5 className="text-blueGray-400 uppercase font-bold text-xs">
                {statSubtitle}
              </h5>
              <span className="font-semibold text-xl text-blueGray-700">
                {totalNum}
              </span>
            </div>
            {/* <div className="relative w-auto pl-4 flex-initial">
              <div
                className={
                  "text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full " +
                  statIconColor
                }
              >
                <i className={statIconName}></i>
              </div>
            </div> */}
          </div>
          <p className="text-sm text-blueGray-400 mt-4">
            <span className={doneNumColor + " mr-2"}>
              {/* <i
                className={
                  statArrow === "up"
                    ? "fas fa-arrow-up"
                    : statArrow === "down"
                    ? "fas fa-arrow-down"
                    : ""
                }
              ></i>{" "} */}
              결재 완료: {doneNum}
            </span>
            <span className={yetNumColor + " mr-2"}>결재 대기: {yetNum}</span>
          </p>
        </div>
      </div>
    </>
  );
}

CardStats.defaultProps = {
  statSubtitle:"",
  totalNum:"0", 
  doneNum:"0",
  doneNumColor:"text-emerald-500",
  yetNum:"0",
  yetNumColor:"text-red-500",
  statIconName: "far fa-chart-bar",
  statIconColor: "bg-red-500",
};

CardStats.propTypes = {
  statSubtitle: PropTypes.string,
  totalNum: PropTypes.number,
  statArrow: PropTypes.oneOf(["up", "down"]),
  doneNum: PropTypes.number,
  // can be any of the text color utilities
  // from tailwindcss
  doneNumColor: PropTypes.string,
  yetNum: PropTypes.number,
  statIconName: PropTypes.string,
  // can be any of the background color utilities
  // from tailwindcss
  statIconColor: PropTypes.string,
};
