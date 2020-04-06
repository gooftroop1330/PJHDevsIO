const express = require('express');
const app = express();

/*
CORS - Cross Origin Request Security
localhost:3000 -> backend
localhost:4200 ->frontend
 */

app.use(cors())

/*
??might need this??
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, HEAD, OPTIONS, PUT, PATCH, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
*/
//app.use(express.json());
app.listen(3000, () => console.log("Server Connected on port 3000"));