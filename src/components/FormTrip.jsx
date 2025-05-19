import { useEffect, useState } from "react"

export default function FormTrip({ setTripList, tripList }) {

    const initialDate = {
        destination: "",
        operator: '',
        status: 'In corso',
        start_date: '19/05/2025',
        end_date: '25/05/2025',
        partecipants: [{
            user_id: '',
            name: '',
            surname: '',
            email: '',
            phone_number: '',
            CF: ''
        }]
    }

    const [addTrip, setaddTrip] = useState(initialDate);


    function handleFormData(event) {
        setaddTrip((formData) => ({
            ...formData,
            [event.target.name]: event.target.value,
        }))
    };

    function handleSubmit(event) {
        event.preventDefault();
        const newTrip = {
            ...addTrip, id: tripList.at(-1).id + 1
        }
        setTripList((prevList) => [...prevList, newTrip]);
        setaddTrip(initialDate);
    };

    // console.log(partecipantsList)

    return (
        <>
            <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                Aggiungi viaggio
            </button>
            <div className="collapse" id="collapseExample">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Destinazione:</label>
                        <input type="text" value={addTrip.destination} onChange={handleFormData} name="destination" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="inserisci la destinazione" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Operatore:</label>
                        <input type="text" value={addTrip.operator} onChange={handleFormData} name="operator" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="inserisci l'accompagnatore" required />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </>
    )
}