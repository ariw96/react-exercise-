import React ,{Component} from 'react';


export default class   TextArea extends Component {
    constructor(props) {
        super(props);       
        this.myRef=React.createRef();
    }
   componentDidMount(){
       this.myRef.current.select();
         this.myRef.current.setSelectionRange(0, 99999);
   }
    render() {
      
        return (
            <>
         
            <textarea  type="text" ref={this.myRef}/>
            <button onClick={this.handle}> copy</button>
            </>
            
        );
    }
}