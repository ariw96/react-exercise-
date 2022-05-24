
import React, {Component}from "react";
export default class Ref extends Component {
    constructor(props) {
        super(props);       
        this.myRef=React.createRef();
    }
   componentDidMount(){
        this.myRef.current.focus()
   }
    render() {
        const log = (e) => {
            console.log(this.myRef.current.value);
        }
        return (
            <>
         
            <input onChange={log} type="text" ref={this.myRef}/>
            </>
            
        );
    }
}
