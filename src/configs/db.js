const mongoose = require("mongoose");

module.exports = () => {
  return mongoose
    .connect(
      "mongodb+srv://daniyal:daniyal@foodapp.hm74x.mongodb.net/?retryWrites=true&w=majority",
      { useNewUrlParser: true, useUnifiedTopology: true }
    )
    .then(() => {
      console.log("mongodb is connected");
    })
    .catch((error) => {
      console.log("mondb not connected");
      console.log(error);
    });
};
