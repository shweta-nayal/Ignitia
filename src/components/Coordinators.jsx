import React from "react";
import "../styles/Coordinators.css";

const coordinatorsData = [
  { id: 1, event: "THINK-A-TON", coordinators: ["Shweta Nayal", "Ginni", "Shudhanshu"], phone: ["9876543210", "8765432109", "7654321098"] },
  { id: 2, event: "BGMI", coordinators: ["Chandan", "Deepak", "Pranchi Gautam"], phone: ["9876501234", "8765409876", "7654312345"] },
  { id: 3, event: "ECHOES IN PIXELS", coordinators: ["Satyam", "Asma", "Mohit"], phone: ["9988776655", "8877665544", "7766554433"] },
  { id: 4, event: "QUIZORA", coordinators: ["Pranchi Gautam", "Swastika", "Ashish"], phone: ["9865321470", "8754312098", "7643210987"] },
  { id: 5, event: "BUISNESS QUIZ", coordinators: ["Farman", "Namrita", "Bhumika"], phone: ["9856741230", "8743219876", "7632109874"] },
  { id: 6, event: "LOGOVATION", coordinators: ["Mohit Rawat", "Manya", "Archita"], phone: ["9856423178", "8745230981", "7632154890"] },
  { id: 7, event: "WEB CRAZE", coordinators: ["Deepak", "Vinay", "Mahima"], phone: ["9845123789", "8732541987", "7623410986"] },
  { id: 8, event: "SPELLBOUND", coordinators: ["Uday", "Devanshi", "Asma"], phone: ["9832419876", "8723541098", "7614320985"] }
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
