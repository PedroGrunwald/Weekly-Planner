/* eslint-disable react/prop-types */
export default function Appointment(props) {
  return (
    <li className={props.appointment.done ? 'done' : ''}>
      <div>
        <input 
        type="checkbox"
        id={`appointment - ${props.appointment.id}`}
        onChange={() => props.toggleDone(props.appointment.id)}
        checked={props.appointment.done}
        />
        <label 
        htmlFor="checkbox"
        >
        {props.appointment.name}
        </label>
      </div>
      <button onClick={() => props.removeAppointment(props.appointment.id)}>Remover</button>
    </li>
  );
}
