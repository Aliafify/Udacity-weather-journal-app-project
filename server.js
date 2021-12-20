// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express=require("express");
const bodyParser=require("body-parser");
const cors=require("cors");
// Start up an instance of app
const app =express();

/* Middleware*/

//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
app.use(cors());
// Initialize the main project folder
app.use(express.static('website'));
const port=3030;


// app.post("/postrout",postData);
// function postData(req,res){
//     let Data=req.body;
//     console.log(Data);
//     projectData[temp]=Data.temp;
//     projectData[date]=Data.newDate;
//     projectData[feel]=Data.feelings;
 
app.post('/add', (request,response)=>{
    // console.log(request.body)
    let data = request.body;
    projectData=data;
 response.send( projectData);
})
//  }
// app.get("/getRout",sendData)
// function sendData(req,res){
//     res.send(projectData);
// };
app.get('/getRout', sendData)

// Callback function to complete GET '/all'
function sendData (req, res) {
 // res.send('Green')
 res.send((projectData))
}

// Setup Server 
app.listen(port,()=>{
    console.log('server runing on port'+port);
}) ;

