import { useEffect, useState } from "react"

export default function FormUser({ setPartecipantsList, partecipantsList }) {

    const initialDate = {
        name: '',
        surname: '',
        email: '',
        phone_number: '',
        CF: ''
    }

    const [addUser, setAddUser] = useState(initialDate);


    function handleFormData(event) {
        setAddUser((formData) => ({
            ...formData,
            [event.target.name]: event.target.value,
        }))
    };

    function handleSubmit(event) {
        event.preventDefault();

        let newUser = {};
        if (partecipantsList.length <= 0) {
            newUser = {
                ...addUser, user_id: 1
            }
        } else {
            newUser = {
                ...addUser, user_id: partecipantsList.at(-1).user_id + 1
            }
        }
        setPartecipantsList((prevList) => [...prevList, newUser]);
        setAddUser(initialDate);
    };

    return (
        <>
            <div className="container mt-4">
                <div className="d-flex justify-content-center mb-3">
                    <button
                        className="btn btn-secondary"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#userForm"
                        aria-expanded="false"
                        aria-controls="userForm"
                    >
                        Clicca qui per aggiungere un nuovo partecipante
                    </button>
                </div>

                <div className="collapse" id="userForm">
                    <form onSubmit={handleSubmit} className="mx-auto max-w-500">
                        <div className="form-group mb-2">
                            <label className="mb-2" htmlFor="name">
                                Nome:
                            </label>
                            <input
                                type="text"
                                value={addUser.name}
                                onChange={handleFormData}
                                name="name"
                                className="form-control form-control-sm"
                                id="name"
                                placeholder="Inserisci il nome"
                                required
                            />
                        </div>
                        <div className="form-group mb-2">
                            <label className="mb-2" htmlFor="surname">
                                Cognome:
                            </label>
                            <input
                                type="text"
                                value={addUser.surname}
                                onChange={handleFormData}
                                name="surname"
                                className="form-control form-control-sm"
                                id="surname"
                                placeholder="Inserisci il cognome"
                                required
                            />
                        </div>
                        <div className="form-group mb-2">
                            <label className="mb-2" htmlFor="phone">
                                Numero di telefono:
                            </label>
                            <input
                                type="text"
                                value={addUser.phone_number}
                                onChange={handleFormData}
                                name="phone_number"
                                className="form-control form-control-sm"
                                id="phone"
                                placeholder="Inserisci il numero di telefono"
                                required
                            />
                        </div>
                        <div className="form-group mb-2">
                            <label className="mb-2" htmlFor="email">
                                Email:
                            </label>
                            <input
                                type="email"
                                value={addUser.email}
                                onChange={handleFormData}
                                name="email"
                                className="form-control form-control-sm"
                                id="email"
                                placeholder="Inserisci l'email"
                                required
                            />
                        </div>
                        <div className="form-group mb-3">
                            <label className="mb-2" htmlFor="cf">
                                Codice fiscale:
                            </label>
                            <input
                                type="text"
                                value={addUser.CF}
                                onChange={handleFormData}
                                name="CF"
                                className="form-control form-control-sm"
                                id="cf"
                                placeholder="Inserisci il codice fiscale"
                                required
                            />
                        </div>
                        <div className="d-flex justify-content-center">
                            <button type="submit" className="btn btn-secondary btn-sm">
                                Invia i dati
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}