import axios from "axios";
import React, { Component } from "react";

state ={ avatarArr:[]}
export default class Main extends Component{
   async componentDidMount(){
        try {
            const{data} = await axios.get("https://api.chucknorris.io/jokes/categories");
            const relavntData = data.map((e)=>e)
        } catch (error) {
            
        }
  render()
        return <div>main</div>
  
}
}