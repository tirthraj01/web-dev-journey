const axios = require("axios");

// USING FETCH
async function fetchMain() {
    const response = await fetch("https://httpdump.app/dumps/db59c699-ed25-43b2-94c1-c2a9dff07420", {
        method: "GET",
        headers: {
            "authorization": "123"
        }
    });

    const textData = await response.text();
    console.log(textData);
}

// USING AXIOS
async function axiosMain() {
    const response = await axios.post(
        "https://httpdump.app/dumps/db59c699-ed25-43b2-94c1-c2a9dff07420",
        {
            username: "Tirthraj"
        },
        {
            headers: {
                "authorization": "1234"
            }
        }
    );

    console.log(response.data);
}

fetchMain();
axiosMain();
