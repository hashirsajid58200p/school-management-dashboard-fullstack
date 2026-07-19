"use client";

import { Calendar, momentLocalizer, Views } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

const BigCalendar = ({
  data,
  title,
}: {
  data: { title: string; start: Date; end: Date; [key: string]: any }[];
  title?: string;
}) => {
  // Dynamic CustomToolbar to capture title prop in local scope
  const CustomToolbar = (toolbar: any) => {
    return (
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        {title && (
          <h1 className="text-xl font-bold text-slate-800 select-none">
            {title}
          </h1>
        )}
        <div className="flex items-center gap-4 ml-auto md:ml-0">
          <span className="text-sm font-semibold text-slate-500">
            {toolbar.label}
          </span>
          <span className="bg-[#dbdafe] text-slate-700 px-4 py-1.5 rounded-md text-sm font-medium select-none">
            Work Week
          </span>
        </div>
      </div>
    );
  };

  // Center events vertically in their 60-minute timeslot by shifting start/end by 5 minutes.
  // We keep displayStart and displayEnd to show the correct time labels inside the card.
  const centeredEvents = data.map((event) => {
    const displayStart = new Date(event.start);
    const displayEnd = new Date(event.end);
    
    const isBreak = event.isBreak;
    const isSchoolEvent = event.isSchoolEvent;
    
    if (isSchoolEvent) {
      return {
        ...event,
        displayStart,
        displayEnd,
        start: event.start,
        end: event.end,
      };
    }
    
    const startOffset = 5 * 60 * 1000;
    
    const centeredStart = new Date(event.start.getTime() + startOffset);
    // For breaks, set end to 12:55 to align perfectly with the height of standard lessons (50m)
    const centeredEnd = isBreak
      ? new Date(event.start.getTime() + 55 * 60 * 1000)
      : new Date(event.end.getTime() + startOffset);

    return {
      ...event,
      displayStart,
      displayEnd,
      start: centeredStart,
      end: centeredEnd,
    };
  });

  return (
    <Calendar
      localizer={localizer}
      events={centeredEvents}
      startAccessor="start"
      endAccessor="end"
      views={["work_week"]}
      defaultView={Views.WORK_WEEK}
      style={{ height: "100%" }}
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
        if (event.isPtm) {
          return {
            style: {
              backgroundColor: "#ffdce0",
              border: "1.5px dashed #fca5a5",
              color: "#991b1b",
              borderRadius: "6px",
            }
          };
        }
        if (event.isSchoolEvent) {
          return {
            style: {
              backgroundColor: "#fef9c3",
              border: "1.5px solid #fde047",
              color: "#854d0e",
              borderRadius: "6px",
            }
          };
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
        toolbar: CustomToolbar,
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
          if (event.isSchoolEvent || event.isPtm) {
            return (
              <div className="flex flex-col p-2 h-full overflow-hidden justify-center items-center text-center">
                <span className="text-[10px] font-bold opacity-75">
                  {moment(event.displayStart || event.start).format("h:mm")}–{moment(event.displayEnd || event.end).format("h:mm A")}
                </span>
                <span className="text-xs font-extrabold line-clamp-2 mt-0.5">
                  {event.title}
                </span>
                {event.description && (
                  <span className="text-[9px] opacity-75 truncate w-full mt-0.5">
                    {event.description}
                  </span>
                )}
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
                {moment(event.displayStart || event.start).format("h:mm")}–{moment(event.displayEnd || event.end).format("h:mm A")}
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
