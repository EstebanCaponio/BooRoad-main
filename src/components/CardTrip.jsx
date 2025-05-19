

function CardTrip() {

    return (

        <div className="container py-5">
            <div className="card border-primary shadow-lg">
                <div className="card-header bg-primary text-white">
                    🌏
                    <strong>{'<<<'} Qui verrà visualizzato il viaggio {'>>>'}</strong>
                </div>
                <div className="card-body">
                    <h5 className="card-title">🗓️ Data di ritrovo</h5>
                    <p className="card-text"><strong>15 Luglio 2025 - ore 09:00</strong></p>

                    <h5 className="card-title">📌 Punto di ritrovo</h5>
                    <p className="card-text">
                        {'<<<'} Qui verrà scritto il punto di ritrovo della città
                        {'>>>'}
                    </p>

                    <h5 className="card-title">🗺️ Itinerario del giorno</h5>
                    <ul className="list-group mb-3">
                        <li className="list-group-item">🕘 <strong>09:00</strong> – Ritrovo</li>
                        <li className="list-group-item">
                            🕙 <strong>10:00</strong> – Passeggiata
                        </li>
                        <li className="list-group-item">🕦 <strong>12:00</strong> – Pranzo</li>
                        <li className="list-group-item">
                            🕐 <strong>14:00</strong> – Tempo libero
                        </li>
                        <li className="list-group-item">
                            🕒 <strong>16:00</strong> – Comprare Souvenir
                        </li>
                        <li className="list-group-item">
                            🕔 <strong>18:00</strong> – Rientro in hotel
                        </li>
                    </ul>

                    <h5 className="card-title">🔴 NOTE</h5>
                    <ul className="list-group">
                        <li className="list-group-item">
                            ✅ Portare passaporto e biglietto stampato
                        </li>
                        <li className="list-group-item">
                            ✅ Scarpe comode e bottiglietta d'acqua
                        </li>
                        <li className="list-group-item">
                            ☂️ In caso di pioggia, portare un ombrello
                        </li>
                    </ul>
                </div>
            </div>
        </div>

    )
}

export default CardTrip