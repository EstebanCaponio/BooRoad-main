import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import TripContext from "../context/TripContext";
import CardTrip from "../components/CardTrip";

function TripDetails() {
  const { id } = useParams();
  const { ArrayTrip } = useContext(TripContext);

  const [tripList, setTripList] = useState(ArrayTrip);

  // useEffect(() => {

  // }, [ArrayTrip, id]);

  //   return (
  //     <div className="container my-5">
  //       {tripList.map((trip) =>
  //         trip.id.toString() === id ? (
  //           <div key={trip.id} className="card shadow">
  //             <div className="row g-0">
  //               <div className="col-md-6">
  //                 <img
  //                   src={`/${trip.image}`}
  //                   alt={trip.destination}
  //                   className="img-fluid rounded-start h-100 object-fit-cover"
  //                 />
  //               </div>
  //               <div className="col-md-6">
  //                 <div className="card-body">
  //                   <h2 className="card-title">{trip.destination}</h2>
  //                   <p className="card-text">
  //                     <strong>Operatore:</strong> {trip.operator}
  //                   </p>
  //                   <p className="card-text">
  //                     <strong>Stato:</strong> {trip.status}
  //                   </p>
  //                   <p className="card-text">
  //                     <strong>Partenza:</strong> {trip.start_date}
  //                   </p>
  //                   <p className="card-text">
  //                     <strong>Ritorno:</strong> {trip.end_date}
  //                   </p>
  //                 </div>
  //               </div>
  //             </div>
  //             <CardTrip />
  //           </div>
  //         ) : null
  //       )}
  //     </div>
  //   );
  // }
  // export default TripDetails;


  return (
    <div className="container my-5">
      {tripList.map((trip) =>
        trip.id.toString() === id ? (
          <div key={trip.id} className="card shadow">
            <div className="row g-0">
              <div className="col-md-6">
                <img
                  src={`/${trip.image}`}
                  alt={trip.destination}
                  className="img-fluid rounded-start h-100 object-fit-cover"
                />
              </div>
              <div className="col-md-6">
                <div className="card-body">
                  <h2 className="card-title">{trip.destination}</h2>
                  <p className="card-text">
                    <strong>Operatore:</strong> {trip.operator}
                  </p>
                  <p className="card-text">
                    <strong>Stato:</strong> {trip.status}
                  </p>
                  <p className="card-text">
                    <strong>Partenza:</strong> {trip.start_date}
                  </p>
                  <p className="card-text">
                    <strong>Ritorno:</strong> {trip.end_date}
                  </p>
                </div>
              </div>
            </div>
            <CardTrip />
          </div>
        ) : null
      )}
    </div>
  );
}
export default TripDetails;