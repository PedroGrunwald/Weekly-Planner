export default function Appointment(props){
    return (
        <li>
            <div>
                <input type= "checkbox" id="checkbox" />
                <label htmlFor="checkbox">{props.appointment.name}</label>
            </div>
            <button>Remover</button>
        </li>
    )
}