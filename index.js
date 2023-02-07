const express = require ('express');
const app = express();
const port = process.env.port || 4444;
const things = require('./routes/things');


app.use(express.json());
app.use('/things', things)

app.get('/', (req,res) => {
    res.send('Hello App 4444 + Welcome')
});


app.listen(port, err => {
    if (err) {
        return console.log ("ERROR", err);

    }
    console.log(`Listening on ${port}`)
});