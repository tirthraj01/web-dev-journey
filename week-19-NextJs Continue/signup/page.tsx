"use client"
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SignUp() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();

    return <div className="text-3xl font-bold underline" 
    style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
        <div className="border p-2">

            <input type="text" placeholder="Username" onChange={e => {
                setUsername(e.target.value);
            }} className="border m-2" />

            <input type="password" placeholder="Password" onChange={e => {
                setPassword(e.target.value);
            }} className="border m-2" />

            <button onClick={async () => {
                console.log(username, password);
                await axios.post("http://localhost:3000/api/v1/signup", {
                    username,
                    password
                })

                router.push("/signin");

                }}>Sign Up</button>
        </div>

    </div>
}
