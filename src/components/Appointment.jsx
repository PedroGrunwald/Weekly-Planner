/* eslint-disable react/prop-types */
export default function Appointment(props) {
  return (
    <li>
      <div>
        <input type="checkbox"
         id={`appointment - ${props.appointment.id}`}
          />
        <label 
        htmlFor="checkbox"
        >
        {props.appointment.name}
        </label>
      </div>
      <button>Remover</button>
    </li>
  );
}
