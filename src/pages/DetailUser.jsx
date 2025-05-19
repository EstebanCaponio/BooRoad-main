import { useContext, useEffect, useState } from "react";
import TripContext from "../context/TripContext";
import { useParams } from "react-router-dom";

function DetailUser() {
  const { id } = useParams();
  const { ArrayTrip } = useContext(TripContext);


  const { name, surname } = ArrayTrip[id - 1].partecipants[id - 1];
  console.log(name, surname)

  const [partecipantsList, usePartecipantsList] = useState(ArrayTrip[id - 1].partecipants);
  const [filterName, setFilterName] = useState('');

  function searchName(e) {
    e.preventDefault();

    if (filterName !== '') {
      results = results.filter(arr => arr.partecipants.toLowerCase().trim().includes(filterName.toLowerCase().trim()))
    }
  }


  // const currentTrip = ArrayTrip[id - 1];
  // console.log(currentTrip)
  // const partecipants = currentTrip.partecipants;


  return (
    <>
      <div className="container my-4">
        <form onSubmit={searchName} className="row g-3 mb-3">
          <div className="col-md-8">
            <input
              value={filterName}
              onChange={e => { setFilterName(e.target.value) }}
              type="text"
              className="form-control"
              placeholder="Cerca partecipante"
            />
          </div>
          <div className="col-md-4">
            <button type="submit" className="btn btn-primary w-100">
              Cerca
            </button>
          </div>
        </form>
        {partecipantsList.length > 0 ? (
          partecipantsList.map((e) => (
            <div key={e.user_id} className="card text-center mb-4">
              <div className="card-header">{`${e.surname} ${e.name}`}</div>
              <div className="card-body">
                <p className="card-text">Email: {e.email}</p>
                <p className="card-text">Numero di telefono: {e.phone_number}</p>
                <p className="card-text">Codice Fiscale: {e.CF}</p>
              </div>
            </div>
          ))
        ) : (
          <div>
            <h1>Nessun Viaggio disponibile</h1>
          </div>
        )}
      </div >
    </>
  );
}

export default DetailUser;