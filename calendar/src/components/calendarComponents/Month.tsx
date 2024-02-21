import React from "react";
import { Day } from "./Day";

export const Month = (props: { month: any[] }) => {
  const { month } = props;

  // 曜日の配列
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return (
    <div
      className="grid flex-1 grid-cols-7 grid-rows-5"
    >
      {/* 曜日のヘッダー */}
      {daysOfWeek.map((dayOfWeek, index) => (
        <p key={index} className="flex items-center justify-center text-sm">
          {dayOfWeek}
        </p>
      ))}
      {/* カレンダーの日付 */}
      {month.map((row: any[], i: number) => (
        <React.Fragment key={i}>
          {row.map((day, idx) => (
            <Day day={day} key={idx} rowIdx={i} />
          ))}
        </React.Fragment>
      ))}
    </div>
  );
};
