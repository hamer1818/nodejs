const qs = require("querystring");
const fs = require("fs");

const routeHandler = (req, res) => {
  const url = req.url;
  const method = req.method;

  res.setHeader("content-type", "text/html");

  if (url == "/") {
    res.write(`
            <html>
                <head>
                    <title>Enter Message</title>    
                </head>
                <body>
                    <form action="/log" method="POST">
                        <input type="text" name="message">
                        <button type="submit">Save</button>
                    </form>
                </body>
            </html>
        `);
    return res.end();
  }

  if (url == "/log" && method === "POST") {
    //body-parseing (bodyParser)
    const body = [];

    req.on("data", (chunk) => {
      body.push(chunk);
      console.log(chunk);
    });
    req.on("end", () => {
      const bodyParsed = Buffer.concat(body).toString();
      const message = bodyParsed.split("=")[1];

      console.log(qs.parse(bodyParsed));

      fs.appendFileSync("message.txt", "\n" + message);
    });

    res.statusCode = 302;
    res.setHeader("Location", "/");
    return res.end();
  }
};

module.exports = routeHandler;
