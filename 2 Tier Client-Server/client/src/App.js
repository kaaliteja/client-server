import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {

let [cast,SetCast] = useState([]);


let getIplTeams =async()=>{
  let reqOptions={
    method:"GET",
  };


let JSONData= await fetch("http://localhost:2024/iplTeams",reqOptions);


let JSOData= await JSONData.json();


SetCast(JSOData);


console.log(JSOData);
};

let getChiruMovies =async()=>{
  let reqOptions={
    method:"GET",
  };


let JSONData= await fetch("http://localhost:2024/chiruMovies",reqOptions);


let JSOData= await JSONData.json();


SetCast(JSOData);


console.log(JSOData);
};





  return (
    <div className="App">
      <button onClick={()=>{
        getIplTeams();
      }}>Get IPL Teams
      </button>



      <button onClick={()=>{
        getChiruMovies();
      }}>Chiru Movies
      </button>


      {/* <button onClick={()=>{
        getChiruImages();
      }}> chiruImages
      </button> */}


      {cast.map((ele,i)=>{
        return <h2 key={i}>{ele}</h2>;
      })}
    </div>
  );
}

export default App;
