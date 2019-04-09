const express = require("express");
const app = express();
const exphbs  = require('express-handlebars');
const database = require("./models");

const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(express.static("public"));

require("./routes/api-routes.js")(app);
// require("./routes/html-routes.js")(app);

database.sequelize.sync().then(() => {
app.listen(PORT, () => {
    console.log(`App is running on http://localhost:${PORT}`);
}); 
}); 