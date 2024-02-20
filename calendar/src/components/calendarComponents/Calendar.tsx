import { useContext, useEffect, useState } from "react";
import { getMonth } from "../../logic/util";
import { CalendarHeader } from "./CalendarHeader";
import { Sidebar } from "./Sidebar";
import { Month } from "./Month";
import { GlobalContext } from "../../context/GlobalContext";
import { EventModal } from "./EventModal";

export const Calendar = () => {
  const [currentMonth, setCurrentMonth] = useState(getMonth());
  const { monthIndex, showEventModal } = useContext(GlobalContext);

  // 月が変わったらカレンダーを更新
  useEffect(() => {
    setCurrentMonth(getMonth(monthIndex));
  }, [monthIndex]);

  return (
    <>
      {showEventModal && <EventModal />}
      <div className="flex h-full flex-col">
        <CalendarHeader />
        <div className="flex flex-1">
          {/* <Sidebar /> */}
          <Month month={currentMonth} />
        </div>
      </div>
    </>
  );
};
