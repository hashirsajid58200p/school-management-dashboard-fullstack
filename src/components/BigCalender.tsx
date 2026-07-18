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
          <div className="flex flex-col text-left gap-0.5 leading-tight p-0.5">
            <span className="font-bold text-[11px] truncate">{event.title}</span>
            <span className="text-[9px] opacity-80">
              {moment(event.start).format("h:mm")} - {moment(event.end).format("h:mm A")}
            </span>
          </div>
        )
      }}
    />
  );
};

export default BigCalendar;
