import { useState, useContext } from "react";
import { MdDeleteForever, MdClose } from "react-icons/md";
import { GlobalContext } from "../../context/GlobalContext";

export const EventModal = () => {
  const { daySelected, setShowEventModal, dispatchCalEvent, selectedEvent } =
    useContext(GlobalContext);
  const [title, setTitle] = useState(selectedEvent ? selectedEvent.title : "");

  const handleSubmit = (e: { preventDefault: () => void }) => {
    // クリック時に送信するというdefaultの動作をキャンセルする
    e.preventDefault();
    if (daySelected) {
      const calendarEvent = {
        title: title,
        day: daySelected.valueOf(),
        id: selectedEvent ? selectedEvent.id : Date.now(),
      };
      if (selectedEvent) {
        dispatchCalEvent({ type: "update", payload: calendarEvent });
      } else {
        dispatchCalEvent({ type: "push", payload: calendarEvent });
      }
      setShowEventModal(false);
    }
  };

  return (
    <div className="fixed left-0 top-0 flex h-screen w-full items-center justify-center">
      <form className="w-1/4 rounded-lg bg-white shadow-2xl">
        <header className="flex justify-end bg-gray-100 px-4 py-2">
          <div className="text-gray-400">
            {selectedEvent && (
              <button
                onClick={() => {
                  dispatchCalEvent({ type: "delete", payload: selectedEvent });
                  setShowEventModal(false);
                }}
              >
                <MdDeleteForever />
              </button>
            )}
            <button onClick={() => setShowEventModal(false)}>
              <MdClose />
            </button>
          </div>
        </header>
        <div className="p-3">
          <div className="grid-cols-1/5 grid items-end gap-y-7">
            <div> </div>
            <input
              type="text"
              name="title"
              placeholder="Add title"
              value={title}
              required
              className="w-full border-0 border-b-2 border-gray-200 pb-2 pt-3 text-xl font-semibold text-gray-600 focus:border-blue-500 focus:outline-none focus:ring-0"
              onChange={(e) => setTitle(e.target.value)}
            />
            {daySelected && <p>{daySelected.format("dddd, MMMM DD")}</p>}
          </div>
        </div>
        <footer className="mt-5 flex justify-end border-t p-3">
          <button
            type="submit"
            onClick={handleSubmit}
            className="rounded bg-blue-500 px-6 py-2 text-white hover:bg-blue-600"
          >
            Save
          </button>
        </footer>
      </form>
    </div>
  );
};
