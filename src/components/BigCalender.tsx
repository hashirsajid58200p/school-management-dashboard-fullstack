"use client";

import { Calendar, momentLocalizer, Views } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

const BigCalendar = ({
  data,
  title,
  headerContent,
}: {
  data: { title: string; start: Date; end: Date; [key: string]: any }[];
  title?: string;
  headerContent?: React.ReactNode;
}) => {
  // Dynamic CustomToolbar to capture title prop in local scope
  const CustomToolbar = (toolbar: any) => {
    return (
      <div className="w-full mb-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
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
        {headerContent}
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
    const isPtm = event.isPtm;
    const startOffset = 5 * 60 * 1000;
    
    const centeredStart = new Date(event.start.getTime() + startOffset);
    let centeredEnd = new Date(event.end.getTime() + startOffset);

    if (isBreak) {
      centeredEnd = new Date(event.start.getTime() + 55 * 60 * 1000);
    } else if (isSchoolEvent || isPtm) {
      // Shrink by 5 minutes at the end to create a bottom gap
      centeredEnd = new Date(event.end.getTime() - startOffset);
    }

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
              backgroundColor: "#ffe4e6",
              border: "1.5px dashed #f43f5e",
              color: "#9f1239",
              borderRadius: "6px",
            }
          };
        }
        if (event.isSchoolEvent) {
          return {
            style: {
              backgroundColor: "#d1fae5",
              border: "1.5px solid #10b981",
              color: "#065f46",
              borderRadius: "6px",
            }
          };
        }
        if (event.isMyLesson === true) {
          return { className: "rbc-event-mine" };
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
          const isMine = event.isMyLesson === true;
          const isColleague = event.isMyLesson === false;

          let timeColor = "#6b7280";
          let titleColor = "#111827";
          let teacherColor = "#4b5563";

          if (isMine) {
            timeColor = "#0284c7";
            titleColor = "#0284c7";
            teacherColor = "#0284c7";
          } else if (isColleague) {
            timeColor = "#94a3b8";
            titleColor = "#64748b";
            teacherColor = "#64748b";
          }

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
                  color: timeColor,
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
                  color: titleColor,
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
                    color: teacherColor,
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
