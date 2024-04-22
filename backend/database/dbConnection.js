import  mongoose  from "mongoose";

export const dbConnection = ()=>{
    mongoose
    .connect(process.env.MONGO_URI,{
        dbName: "HEALTHCARE",
    })
    .then(()=>{
          console.log("Connected to database!");
    })
    .catch(err=>{
        console.log(`Some error occured while connecting to data base: ${err}`);
    });
}