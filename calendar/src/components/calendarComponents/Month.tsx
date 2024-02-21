import React from "react";
import { Day } from "./Day";

export const Month = (props: { month: any[] }) => {
  const { month } = props;

  // 曜日の配列
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  // カレンダーの日付の縦幅の割合
  const rowHeight = "rowHeight";
  // 曜日のヘッダーの縦幅の割合
  const headerHeight = "10%";

  return (
    <div
      className="grid flex-1 grid-cols-7 grid-rows-5"
      style={{
        gridTemplateRows:
          "headerHeight rowHeight rowHeight rowHeight rowHeight rowHeight",
      }}
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
