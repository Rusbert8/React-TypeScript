import { useState } from "react";

interface User {
    id: string;
    name: string;
}

export const User = () => {

    const [user, setUser] = useState<User>();

    const login = () => {
        setUser({
            id: "ABC123",
            name: "Rusbert Sánchez"
        });
    }

    return (
        <div className="mt-5">
            <h3>User:</h3>

            <button className="btn btn-outline-primary"
                    onClick={login}> 
                Login
            </button>

            {
                (!user)
                    ? <pre>No hay usuario</pre>
                    : <pre> {JSON.stringify(user)} </pre>

            }
        </div>
    )
}