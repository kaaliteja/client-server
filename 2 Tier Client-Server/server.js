const express = require("express");
const cors = require("cors");


let app=express();
app.use(cors());


app.get("/iplTeams",(req,res)=>{


let iplTeams = ["SRH","RCB","MI","CSK","KKR","LSG","DC","RR"];

res.json(iplTeams);

});


app.get("/chiruMovies",(req,res)=>{
    
    let chiruMovies =["Indra","Stalin","Daddy","Anji","Khaidhi","Gharana Mogudu"];


    res.json(chiruMovies);
});



// app.get("/chiruImages",(req,res)=>{

//     let chiruImages = {"https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/The_Senior_Vice-Minister_of_Tourism%2C_Japan%2C_Mr._Hiroshi_Kajiyama_calls_on_the_Minister_of_State_%28Independent_Charge%29_for_Tourism%2C_Dr._K._Chiranjeevi%2C_in_New_Delhi_on_February_12%2C_2013_%28cropped%29.jpg/330px-thumbnail.jpg"};

//     res.json(chiruImages);
// });


app.listen(2024,()=>{
    console.log("Listening to port 2024");
});
