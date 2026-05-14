const express = require("express");

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send(`
    <html>
      <head>
        <title>CI/CD Mini Project</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            background-color: #f4f6f8;
            text-align: center;
            padding-top: 100px;
          }
          .box {
            background: white;
            padding: 40px;
            margin: auto;
            width: 60%;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0,0,0,0.1);
          }
          h1 {
            color: #2c3e50;
          }
          p {
            font-size: 18px;
            color: #34495e;
          }
        </style>
      </head>
      <body>
        <div class="box">
          <h1>Welcome to CI/CD Mini Project</h1>
          <p>Application deployed successfully using Jenkins, Docker, and Kubernetes.</p>
          <p>End-to-End CI/CD Pipeline Implementation</p>
        </div>
      </body>
    </html>
  `);
});

app.listen(PORT, () => {
  console.log(`Application running on http://localhost:${PORT}`);
});