"use client";
import axios from "axios";
import { useEffect } from "react"

export function Refresh() {

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts/1");
    }, [])

    return <div>
        <button onClick={() => {
            console.log("onclick pressed")
        }}>click me</button>
        hello refresh component
    </div>
}
