let eventGuid = 0;
let todayStr = new Date().toISOString().replace(/T.*$/, ""); // YYYY-MM-DD of today

export const INITIAL_EVENTS = [
  {
    id: createEventId(),
    title: "HTML",
    start: todayStr,
  },
  {
    id: createEventId(),
    title: "Timed event",
    start: todayStr + "T12:00:00",
  },
  {
    id: createEventId(),
    title: "Timed event",
    start: todayStr + "T12:00:00",
  },
  {
    id: createEventId(),
    title: "Repeating Event",
    start: todayStr,
    end: todayStr + "T12:00:00",
  },
];

export function createEventId() {
  return String(eventGuid++);
}

// ============================events setting ============================

// const events = [
//   { title: "All Day Event", start: getDate("YEAR-MONTH-01") },
//   {
//     title: "Long Event",
//     start: getDate("YEAR-MONTH-07"),
//     end: getDate("YEAR-MONTH-10"),
//   },
//   {
//     groupId: "999",
//     title: "Repeating Event",
//     start: getDate("YEAR-MONTH-09T16:00:00+00:00"),
//   },
//   {
//     groupId: "999",
//     title: "Repeating Event",
//     start: getDate("YEAR-MONTH-16T16:00:00+00:00"),
//   },
//   {
//     title: "Conference",
//     start: "YEAR-MONTH-17",
//     end: getDate("YEAR-MONTH-19"),
//   },
//   {
//     title: "Meeting",
//     start: getDate("YEAR-MONTH-18T10:30:00+00:00"),
//     end: getDate("YEAR-MONTH-18T12:30:00+00:00"),
//   },
//   { title: "Lunch", start: getDate("YEAR-MONTH-18T12:00:00+00:00") },
//   { title: "Birthday Party", start: getDate("YEAR-MONTH-19T07:00:00+00:00") },
//   { title: "Meeting", start: getDate("YEAR-MONTH-18T14:30:00+00:00") },
//   { title: "Happy Hour", start: getDate("YEAR-MONTH-18T17:30:00+00:00") },
//   { title: "Dinner", start: getDate("YEAR-MONTH-18T20:00:00+00:00") },
// ];

// function getDate(dayString) {
//   const today = new Date();
//   const year = today.getFullYear().toString();
//   let month = (today.getMonth() + 1).toString();

//   if (month.length === 1) {
//     month = "0" + month;
//   }

//   return dayString.replace("YEAR", year).replace("MONTH", month);
// }

// export default events;
