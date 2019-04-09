
var database = require("../models");


module.exports = function(app) {

  


app.get("/", (req, res) => {
  database.burger
  .findAll({})
  .then (data => {
    res.render("BurgerLog", {burgers: data})
  });
});

app.post("/api/burger", (req, res) => {
console.log(req.body)
  database.burger.create({
    Burger_Name: req.body.Burger_Name,
    Devoured: req.body.Devoured
  }).then(function() {
    res.redirect("/");
    
  });
});

app.put('/api/burger/', function(request, response) {
  database.burger.update(

      {
          devoured: true
      },

      {
          where: {
              id: request.body.burgerId
          }
      }
  ).then(function() {
      response.redirect('/');
  })
});



// app.delete("/api/burger/:id", (req, res) => {
//   burger.deleteOne("id", req.params.id, (data) => {
//       res.json(data);
//   }); 
// })


  
};
