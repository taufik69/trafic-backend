const express = require('express') ;
const cors = require('cors');
const app = express();
const {Dbconnection} = require('./Configaration/Dbconnection');
const routes = require('./Route');


/* -------------------------------------------------------------------------- */
/*                       // todo all middleware                               */
/* -------------------------------------------------------------------------- */

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
Dbconnection();
app.use(routes);
/* -------------------------------------------------------------------------- */
/*                       // todo all middleware                               */
/* -------------------------------------------------------------------------- */


app.listen(3000, ()=> {
    console.log('Server running on Port 3000')
})