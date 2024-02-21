import { useContext, useEffect, useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import { GlobalContext } from "../../context/GlobalContext";

interface Event {
  title: string;
  day: Dayjs;
}

export const Day = (props: { day: Dayjs; rowIdx: number }) => {
  const { day, rowIdx } = props;
  const [dayEvents, setDayEvents] = useState<Event[]>([]);
  const { setDaySelected, setShowEventModal, savedEvents, setSelectedEvent } =
    useContext(GlobalContext);

  // 今日の日付を色付けする
  const getCurrentDayClass = () => {
    return day.format("DD-MM-YY") === dayjs().format("DD-MM-YY")
      ? "bg-blue-600 text-white rounded-full w-7"
      : "";
  };

  // 登録データを日付が一致する日に表示
  useEffect(() => {
    const events = savedEvents.filter(
      (evt: Event) =>
        dayjs(evt.day).format("DD-MM-YY") === day.format("DD-MM-YY"),
    );
    setDayEvents(events);
  }, [savedEvents, day]);

  return (
    <div className="flex flex-col border border-gray-200">
      {/* <header className="flex flex-col items-center"></header> */}
      <div
        className="flex flex-1 cursor-pointer flex-col items-center"
        onClick={() => {
          setDaySelected(day);
          setShowEventModal(true);
        }}
      >
        {/* 曜日の短縮名 */}
        <p
          className={`my-1 p-1 text-center text-sm ${getCurrentDayClass()}`}
        >
          {day.format("DD")} {/* 日付 */}
        </p>
        {dayEvents.map(
          (evt, idx) => (
            console.log(evt),
            (
              <div
                key={idx}
                onClick={() => setSelectedEvent(evt)}
                className={`mb-1 mr-3 truncate rounded bg-neutral-200 p-1 text-sm text-gray-600`}
              >
                {evt.title}
              </div>
            )
          ),
        )}
      </div>
    </div>
  );
};
