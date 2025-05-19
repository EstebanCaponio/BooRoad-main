import { useContext, useEffect, useState } from "react";
import TripContext from "../context/TripContext";
import { useParams } from "react-router-dom";
import FormUser from "../components/FromUser";


function DetailUser() {
  const { id } = useParams();
  const { ArrayTrip } = useContext(TripContext);

  const [filterName, setFilterName] = useState('');
  const [partecipantsList, setPartecipantsList] = useState([]);

  useEffect(() => {
    if (ArrayTrip && ArrayTrip[id - 1] && ArrayTrip[id - 1].partecipants) {
      setPartecipantsList(ArrayTrip[id - 1].partecipants);
    }
  }, [ArrayTrip, id]);

  function searchName(e) {
    e.preventDefault();

    if (ArrayTrip && ArrayTrip[id - 1] && ArrayTrip[id - 1].partecipants) {
      const filteredResults = ArrayTrip[id - 1].partecipants.filter(arr =>
        `${arr.name}${arr.surname}`.toLowerCase().trim().includes(filterName.toLowerCase().trim())
      );
      setPartecipantsList(filteredResults);
    } else {
      setPartecipantsList([]);
    }
  }

  return (
    <>

      <div className="container my-4">

        <FormUser setPartecipantsList={setPartecipantsList} partecipantsList={partecipantsList} />

        <form onSubmit={searchName} className="row g-3 mb-3 mt-3">
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
              <div className="card-header"><strong>{`${e.surname} ${e.name}`}</strong></div>
              <div className="card-body">
                <p className="card-text">Email: <a href="">{e.email}</a></p>
                <p className="card-text">Numero di telefono: <a href="">{e.phone_number}</a></p>
                <p className="card-text">Codice Fiscale: {e.CF}</p>
              </div>
            </div>
          ))
        ) : (
          <div>
            <h1>Nessun partecipante trovato</h1>
          </div>
        )}
      </div >
    </>
  );
}

export default DetailUser;