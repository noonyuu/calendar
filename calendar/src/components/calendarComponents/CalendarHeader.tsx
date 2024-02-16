import dayjs from "dayjs";
import ja from "dayjs/locale/ja";
import { useContext } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { GlobalContext } from "../../context/GlobalContext";

// 日本語に設定
dayjs.locale(ja);

export const CalendarHeader = () => {
  // グローバルコンテキストから月のインデックスを取得
  const { monthIndex, setMonthIndex } = useContext(GlobalContext);

  // 月を戻す
  const handlePrevMonth = () => {
    setMonthIndex(monthIndex - 1);
  };
  // 月を進める
  const handelNextMonth = () => {
    setMonthIndex(monthIndex + 1);
  };
  // 今月に戻す
  const handleReset = () => {
    setMonthIndex(dayjs().month());
  };

  return (
    <header className="flex items-center px-4 py-2">
      <h1 className="fond-bold mr-10 text-xl text-gray-500">Calendar</h1>
      <button onClick={handleReset} className="mr-5 rounded border px-4 py-2">
        Today
      </button>
      <button onClick={handlePrevMonth}>
        <span className="mx-2 cursor-pointer text-gray-600">
          <MdChevronLeft />
        </span>
      </button>
      <button onClick={handelNextMonth}>
        <span className="mx-2 cursor-pointer text-gray-600">
          <MdChevronRight />
        </span>
      </button>
      <h2 className="ml-4 text-xl font-bold text-gray-500">
        {dayjs(new Date(dayjs().year(), monthIndex)).format("MMMM YYYY")}
      </h2>
    </header>
  );
};
