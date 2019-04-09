const orm = require("../config/orm");

const burger = {
    selectAll: function(callback){
        orm.selectAll("burgers", (response) => {
            callback(response)
        })
    },
    insertOne: function(objectCreate, callback) {
        orm.insertOne("burgers", objectCreate, (response) => {
            callback(response);
        });
    },
    updateOne: function(objectCreate, id, callback) {
        orm.updateOne("burgers", objectCreate, id, (response) => {
            callback(response);
        });
    },
    deleteOne: function(col, id, callback) {
        orm.deleteOne("burgers", col, id, (response) => {
            callback(response);
        })
    }
}

// orm.deleteOne("burgers","id", 2, (response) => {
//     console.log(response)
// })


// cat.delete("burgers", 6, (data) => {
    //   console.log(data);
    // });


// const burgerCreate ={
//     burger_name: "cheeseburger",
//     devoured: false 
// }

// const burgerReplace ={
//     burger_name: "Big Mac",
//     devoured: false
// }

// orm.selectAll("burgers", (response) => {
//     console.log(response)
// })

// orm.insertOne("burgers", burgerCreate, (response) => {
//         console.log(response)
// })

// orm.updateOne("burgers", burgerReplace, 4, (response) => {
//     console.log(response)
// })

module.exports = burger;