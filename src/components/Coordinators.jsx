import React from "react";
import "../styles/Coordinators.css";

const coordinatorsData = [
  { id: 1, event: "THINK-A-TON", coordinators: ["Shweta Nayal", "Ginni", "Shudhanshu"], phone: ["9013290305", "9667063972", "8368454457"] },
  { id: 2, event: "BGMI", coordinators: ["Chandan", "Deepak", "Pranchi Gautam"], phone: ["9810307402", "8081214710", "9560286541"] },
  { id: 3, event: "ECHOES IN PIXELS", coordinators: ["Satyam", "Asma", "Mohit Rawat"], phone: ["9771111876", "9899638477", "7291007673"] },
  { id: 4, event: "QUIZORA", coordinators: ["Pranchi Gautam", "Swastika", "Ashish"], phone: ["9560286541", "8383061974", "8851045870"] },
  { id: 5, event: "BUISNESS QUIZ", coordinators: ["Shivansh", "Namrita", "Bhumika"], phone: ["7703860323", "9650934330", "9990108066"] },
  { id: 6, event: "LOGOVATION", coordinators: ["Mohit Rawat", "Manya", "Archita"], phone: ["7291007673", "9990009880", "9910222184"] },
  { id: 7, event: "WEB CRAZE", coordinators: ["Deepak", "Vinay", "Mahima"], phone: ["8081214710", "8700447828", "9266713969"] },
  { id: 8, event: "SPELLBOUND", coordinators: ["Uday", "Devanshi", "Asma"], phone: ["9971072434", "8789772787", "9899638477"] }
];

function Coordinators() {
  return (
    <div className="coordinators-container">
      <h1 className="coordinators-heading">Event Coordinators</h1>
      <table className="coordinators-table">
        <thead>
          <tr>
            <th>S.No</th>
            <th>Event Name</th>
            <th>Coordinator Name</th>
            <th>Phone Number</th>
          </tr>
        </thead>
        <tbody>
          {coordinatorsData.map((event, index) => 
            event.coordinators.map((coordinator, i) => (
              <tr key={`${event.id}-${i}`} className="event-group">
                {i === 0 && (
                  <>
                    <td rowSpan="3">{event.id}</td>
                    <td rowSpan="3">{event.event}</td>
                  </>
                )}
                <td>{coordinator}</td>
                <td>{event.phone[i]}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Coordinators;
