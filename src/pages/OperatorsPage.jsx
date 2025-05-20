import { useContext } from "react";
import TripContext from "../context/TripContext";

function OperatorsPage() {

    const { ArrayOperators } = useContext(TripContext);
    console.log(ArrayOperators)

    return (

        <>
            <div className="container my-4">

                {ArrayOperators.length > 0 ? (
                    ArrayOperators.map((e) => (
                        <div
                            key={e.id}
                            className="card shadow-sm rounded mb-4 mx-auto max-w-600"
                        >
                            <div className="card-header bg-success text-white fw-bold text-center">
                                <i className="bi bi-person-fill me-2"></i>
                                {e.operator}
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
                                        href={`tel:${e.number}`}
                                        className="text-decoration-none"
                                    >
                                        {e.number}
                                    </a>
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
    )
};

export default OperatorsPage;