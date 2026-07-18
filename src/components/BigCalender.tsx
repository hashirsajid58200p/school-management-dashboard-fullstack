"use client";

import { Calendar, momentLocalizer, View, Views } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { useState } from "react";

const localizer = momentLocalizer(moment);

const BigCalendar = ({
  data,
}: {
  data: { title: string; start: Date; end: Date }[];
}) => {
  const [view, setView] = useState<View>(Views.WORK_WEEK);

  const handleOnChangeView = (selectedView: View) => {
    setView(selectedView);
  };

  return (
    <Calendar
      localizer={localizer}
      events={data}
      startAccessor="start"
      endAccessor="end"
      views={["work_week", "day"]}
      view={view}
      style={{ height: "98%" }}
      onView={handleOnChangeView}
      min={new Date(2025, 1, 0, 8, 0, 0)}
      max={new Date(2025, 1, 0, 17, 0, 0)}
      components={{
        event: ({ event }) => (
          <div className="flex flex-col text-left gap-1 leading-tight h-full justify-center">
            <span className="text-[10px] text-gray-500 font-medium">
              {moment(event.start).format("h:mm A")} - {moment(event.end).format("h:mm A")}
            </span>
            <span className="font-bold text-xs text-black block truncate">
              {event.title}
            </span>
          </div>
        )
      }}
    />
  );
};

export default BigCalendar;
