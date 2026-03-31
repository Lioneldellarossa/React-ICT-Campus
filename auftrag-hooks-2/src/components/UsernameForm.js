"use client"
import { useActionState } from "react";
import { usernameAction } from "@/actions/usernameAction";

export default function UsernameForm(props) {

    const [state, action, pending] = useActionState(usernameAction, {
        username: ""
    })

    return (

        <div >
            <main >
                <form action={action} noValidate>
                    <p>Username</p>
                    <input name="username" id="text" defaultValue={state.username} placeholder="Du sollst hier etwas eingeben!!!!!!!!!"></input>
                    <button disabled={pending} type="submit">Senden</button>
                    {state?.error && <p style={{ color: "red" }}>{state.error}</p>}
                </form>
            </main>
        </div>
  );
}