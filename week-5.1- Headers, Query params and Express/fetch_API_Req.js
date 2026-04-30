<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>VS Code</title>
</head>

<body>
    Fetch API (Background request)
    <div id="posts"></div>

    <script>
        async function getRecentPost() {
            console.log("before  sending request ");
            const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
            const data = await response.json();
            console.log(data);
            console.log("request has be processed ");
            document.getElementById("posts").innerHTML = data.body
        }

        getRecentPost(); //  call function
    </script>

</body>
</html>
