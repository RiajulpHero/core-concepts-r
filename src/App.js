import React from 'react';
import logo from './logo.svg';
import './App.css';
const player ={
  player1:{
    name: "Shakib Al Hasan",
    age: "27",
    country: "Bangladesh",
    status: "Alrounder"
  },
  player2 :{
    name: "Mashrafee Bin Mortaza",
    age: "29",
    country: "Bangladesh",
    status: "Fast medium Pacer"
  },
  player3 :{
    name: "Virat Kohli",
    age: "26",
    country: "India",
    status: "Right Hand Batsman"
  },
  player4 :{
    name: "Mahendra Sing Dhoni",
    age: "31",
    country: "India",
    status: "Batsman and Wicket Keeper"
  },
  player5 :{
    name: "Mohammad Amir",
    age: "27",
    country: "Pakistan",
    status: "Fast Bowler"
  },
  player6 :{
    name: "Babar Azam",
    age: "24",
    country: "Pakistan",
    status: "Batsman"
  },
  player7 :{
    name: "Cris Gayle",
    age: "33",
    country: "West Indies",
    status: "Batsman"
  },
  player8 :{
    name: "Hasim Amla",
    age: "31",
    country: "South Africa",
    status: "Batsman"
  },
  player9 :{
    name: "Brat Lee",
    age: "29",
    country: "Australia",
    status: "Fast Bowler"
  },
  player10 :{
    name: "Steve",
    age: "28",
    country: "Australia",
    status: "Batsman"
  },
  player11 :{
    name: "Mohammad Rashid",
    age: "26",
    country: "Afghanistan",
    status: "Alrounder"
  }
}
const style={
  height: "300px",
  width: "500px",
  backgroundColor: "lightgreen",
  color: "black",
  borderRadius: "20px",
  boxShadow: "10px 10px 20px grey",
  margin: "20px",
  padding: "20px"
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <div  className="cong" style={{display:"none"}}>
       <h1>Congratulations!!!</h1>
       </div>
       <div className="cart" style={style}>
         <h3>Player Name: {player.player1.name}</h3>
         <p>Age: {player.player1.age}</p>
         <p>Country: {player.player1.country}</p>
         <p>Status: {player.player1.status}</p>
         <button style={{backgroundColor:"green",color:"yellow",width:"100px", height:"40px",borderRadius:"7px"}}>Click to Buy</button>
       </div>
       <div style={style}>
         <h3>Player Name : {player.player2.name}</h3>
         <p>Age: {player.player2.age}</p>
         <p>Country: {player.player2.country}</p>
         <p>Status: {player.player2.status}</p>
         <button style={{backgroundColor:"green",color:"yellow",width:"100px", height:"40px",borderRadius:"7px"}}>Click to Buy</button>
       </div>
       <div style={style}>
         <h3>Player Name : {player.player3.name}</h3>
         <p>Age: {player.player3.age}</p>
         <p>Country: {player.player3.country}</p>
         <p>Status: {player.player3.status}</p>
         <button style={{backgroundColor:"green",color:"yellow",width:"100px", height:"40px",borderRadius:"7px"}}>Click to Buy</button>
       </div>
       <div style={style}>
         <h3>Player Name : {player.player4.name}</h3>
         <p>Age: {player.player4.age}</p>
         <p>Country: {player.player4.country}</p>
         <p>Status: {player.player4.status}</p>
         <button style={{backgroundColor:"green",color:"yellow",width:"100px", height:"40px",borderRadius:"7px"}}>Click to Buy</button>
       </div>
       <div style={style}>
         <h3>Player Name : {player.player5.name}</h3>
         <p>Age: {player.player5.age}</p>
         <p>Country: {player.player5.country}</p>
         <p>Status: {player.player5.status}</p>
         <button style={{backgroundColor:"green",color:"yellow",width:"100px", height:"40px",borderRadius:"7px"}}>Click to Buy</button>
       </div>
       <div style={style}>
         <h3>Player Name : {player.player6.name}</h3>
         <p>Age: {player.player6.age}</p>
         <p>Country: {player.player6.country}</p>
         <p>Status: {player.player6.status}</p>
         <button style={{backgroundColor:"green",color:"yellow",width:"100px", height:"40px",borderRadius:"7px"}}>Click to Buy</button>
       </div>
       <div style={style}>
         <h3>Player Name : {player.player7.name}</h3>
         <p>Age: {player.player7.age}</p>
         <p>Country: {player.player7.country}</p>
         <p>Status: {player.player7.status}</p>
         <button style={{backgroundColor:"green",color:"yellow",width:"100px", height:"40px",borderRadius:"7px"}}>Click to Buy</button>
       </div>
       <div style={style}>
         <h3>Player Name : {player.player8.name}</h3>
         <p>Age: {player.player8.age}</p>
         <p>Country: {player.player8.country}</p>
         <p>Status: {player.player8.status}</p>
         <button style={{backgroundColor:"green",color:"yellow",width:"100px", height:"40px",borderRadius:"7px"}}>Click to Buy</button>
       </div>
       <div style={style}>
         <h3>Player Name : {player.player9.name}</h3>
         <p>Age: {player.player9.age}</p>
         <p>Country: {player.player9.country}</p>
         <p>Status: {player.player9.status}</p>
         <button style={{backgroundColor:"green",color:"yellow",width:"100px", height:"40px",borderRadius:"7px"}}>Click to Buy</button>
       </div>
       <div style={style}>
         <h3>Player Name : {player.player10.name}</h3>
         <p>Age: {player.player10.age}</p>
         <p>Country: {player.player10.country}</p>
         <p>Status: {player.player10.status}</p>
         <button style={{backgroundColor:"green",color:"yellow",width:"100px", height:"40px",borderRadius:"7px"}}>Click to Buy</button>
       </div>
       <div style={style}>
         <h3>Player Name : {player.player11.name}</h3>
         <p>Age: {player.player11.age}</p>
         <p>Country: {player.player11.country}</p>
         <p>Status: {player.player11.status}</p>
         <button style={{backgroundColor:"green",color:"yellow",width:"100px", height:"40px",borderRadius:"7px"}}>Click to Buy</button>
       </div>
      </header>
    </div>
  );
 
}


export default App;
