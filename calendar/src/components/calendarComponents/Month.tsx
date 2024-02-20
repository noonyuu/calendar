import React from "react";
import { Day } from "./Day";

export const Month = (props: { month: any[] }) => {
  const { month } = props;
  return (
    <div className="grid flex-1 grid-cols-7 grid-rows-5">
      {month.map(
        (
          row: any[],
          i: number,
        ) => (
          <React.Fragment key={i}>
            {row.map((day, idx) => (
              <Day day={day} key={idx} rowIdx={i} />
            ))}
          </React.Fragment>
        ),
      )}
    </div>
  );
};
