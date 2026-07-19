"use client";

import { Calendar, momentLocalizer, View, Views } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { useState } from "react";

const localizer = momentLocalizer(moment);

const BigCalendar = ({
  data,
}: {
  data: { title: string; start: Date; end: Date; [key: string]: any }[];
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
      style={{ height: "100%" }}
      onView={handleOnChangeView}
      min={new Date(new Date().setHours(8, 0, 0, 0))}
      max={new Date(new Date().setHours(14, 0, 0, 0))}
      formats={{
        dayFormat: (date: Date, culture: any, localizer: any) =>
          localizer.format(date, "dddd", culture),
        weekdayFormat: (date: Date, culture: any, localizer: any) =>
          localizer.format(date, "dddd", culture),
      }}
      eventPropGetter={(event: any) => {
        if (event.isBreak) {
          return { className: "rbc-event-break" };
        }
        if (event.isMyLesson === false) {
          return {
            style: {
              backgroundColor: "#f1f5f9",
              border: "1px dashed #cbd5e1",
            }
          };
        }
        return {};
      }}
      components={{
        event: ({ event }: any) => {
          if (event.isBreak) {
            return (
              <div className="flex items-center justify-center h-full w-full">
                <span className="font-bold text-xs uppercase tracking-wider text-slate-500">
                  Break
                </span>
              </div>
            );
          }
          const isColleague = event.isMyLesson === false;
          return (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "2px",
                padding: "4px 2px",
                height: "100%",
                overflow: "hidden",
              }}
            >
              <span
                style={{
                  fontSize: "9px",
                  color: isColleague ? "#94a3b8" : "#6b7280",
                  fontWeight: 500,
                  lineHeight: 1.2,
                  whiteSpace: "nowrap",
                }}
              >
                {moment(event.start).format("h:mm")}–{moment(event.end).format("h:mm A")}
              </span>
              <span
                style={{
                  fontSize: "11px",
                  fontWeight: isColleague ? 600 : 700,
                  color: isColleague ? "#64748b" : "#111827",
                  lineHeight: 1.3,
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                }}
              >
                {event.title}
              </span>
              {event.teacherName && (
                <span
                  style={{
                    fontSize: "9px",
                    color: isColleague ? "#64748b" : "#4b5563",
                    lineHeight: 1.2,
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                  }}
                >
                  {event.teacherName}
                </span>
              )}
            </div>
          );
        },
      }}
    />
  );
};

export default BigCalendar;
