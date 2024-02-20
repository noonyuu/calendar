import { Dayjs } from "dayjs";
import React from "react";

export const GlobalContext = React.createContext({
  monthIndex: 0,
  setMonthIndex: (index: number) => {},
  daySelected: null as Dayjs | null,
  setDaySelected: (day: Dayjs | null) => {},
  showEventModal: false,
  setShowEventModal: (show: boolean) => {},
  dispatchCalEvent: ({ type, payload }: { type: string; payload: any }) => {},
  savedEvents: [] as any[],
  selectedEvent: null as any,
  setSelectedEvent: (event: any) => {},
});
