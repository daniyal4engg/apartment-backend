const mongoose = require("mongoose");

module.exports = () => {
  return mongoose.connect(
    "mongodb+srv://daniyal:daniyal@foodapp.hm74x.mongodb.net/?retryWrites=true&w=majority"
  );
};
