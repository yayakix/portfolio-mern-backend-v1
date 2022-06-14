const express = require('express');
const cors = require('cors');

const projects = require('./projects.json');
const about = require('./about.json');

const app = express();
app.use(cors());

app.get('/', (req,res) => {
    res.send('herro')
})

app.get("/projects", (req, res) => {
  res.json(about);
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {console.log('server is running on port ' + PORT)})
