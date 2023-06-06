const mongoose = require("mongoose");

exports.Dbconnection = () => {
  mongoose.set("strictQuery", false);
  mongoose
    .connect("mongodb+srv://taufikislam172:Hvhmjsxu6yOIlKLz@cluster0.onqewzh.mongodb.net/")
    .then(() => {
      console.log(`Database connected`);
    })
    .catch((err) => {
      console.log(`Database Error: ${err}`);
    });
};
