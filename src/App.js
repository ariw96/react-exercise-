import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";


import "./App.css";
import axios from "axios";
function App() {

const data= async()=>{
	try{
		const response =await axios.get("https://nameless-cove-68474.herokuapp.com");
		return response.data;
		console.log(response.data);
	}
	catch(error){
		console.log(error);
	}
}
data();

	return (
		<>
		hello
		
		</>
);
}
export default App;



