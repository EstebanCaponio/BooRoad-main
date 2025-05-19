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
        <FormUser
          setPartecipantsList={setPartecipantsList}
          partecipantsList={partecipantsList}
        />

        <form
          onSubmit={searchName}
          className="row justify-content-center align-items-center g-2 my-4 mx-auto max-w-500"
        >
          <div className="col-sm-8">
            <input
              value={filterName}
              onChange={(e) => setFilterName(e.target.value)}
              type="text"
              className="form-control form-control-sm"
              placeholder="Cerca partecipante"
            />
          </div>
          <div className="col-sm-4">
            <button type="submit" className="btn btn-secondary btn-sm w-100">
              <i className="bi bi-search me-1"></i>Cerca
            </button>
          </div>
        </form>

        {partecipantsList.length > 0 ? (
          partecipantsList.map((e) => (
            <div
              key={e.user_id}
              className="card shadow-sm rounded mb-4 mx-auto max-w-600"
            >
              <div className="card-header bg-info text-white fw-bold text-center">
                <i className="bi bi-person-fill me-2"></i>
                {`${e.surname} ${e.name}`}
              </div>
              <div className="card-body">
                <p className="card-text mb-2">
                  <i className="bi bi-envelope-fill me-2 text-primary"></i>
                  <strong>Email:</strong>{" "}
                  <a
                    href={`mailto:${e.email}`}
                    className="text-decoration-none"
                  >
                    {e.email}
                  </a>
                </p>
                <p className="card-text mb-2">
                  <i className="bi bi-telephone-fill me-2 text-success"></i>
                  <strong>Telefono:</strong>{" "}
                  <a
                    href={`tel:${e.phone_number}`}
                    className="text-decoration-none"
                  >
                    {e.phone_number}
                  </a>
                </p>
                <p className="card-text mb-0">
                  <i className="bi bi-card-heading me-2 text-secondary"></i>
                  <strong>Codice Fiscale:</strong> {e.CF}
                </p>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center mt-5">
            <h5 className="text-muted">
              <i className="bi bi-exclamation-circle me-2"></i>Nessun
              partecipante trovato
            </h5>
          </div>
        )}
      </div>
    </>
  );
}

export default DetailUser;