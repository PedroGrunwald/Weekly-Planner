import { useState } from "react";
function App() {
  const [appointments, setAppointments] = useState([]);
  const addAppointment = () => {
    const name = prompt("informe o nome do compromisso:");
    const newAppointment = {
      id: Math.floor(1000000 * (Math.random() + 1)),
      name,
      done: false,
    };
    setAppointments([...appointments, newAppointment])
  };

  return (
    <main>
      <h1>Planner Semanal</h1>
      <div className="day">
        <h2>Segunda-Feira</h2>
        <ul>
          {appointments.map((appointment) => (
            <li key={appointment.id}>{appointment.name}</li>
          ))}
        </ul>
        <button onClick={addAppointment}>Adicionar</button>
      </div>
    </main>
  );
}

export default App;
