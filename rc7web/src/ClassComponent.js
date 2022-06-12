import React, {Component} from "react";

class ClassComponent extends Component{
    constructor(){
        console.log("Constructor")
        super();
        this.state ={
            "number" : 5,
        };
    }

    numberplus(){
        this.state.number = this.state.number+1;
        console.log(this.state.number);
        this.forceUpdate();
    }
    
    render(){
        console.log("Render")
        return(
            <div>
                <h1>이것이 클래스 컴포넌트</h1>
                <h1>{this.state.number}</h1>
                <button onClick={()=>{this.numberplus()}}>numberPlus</button>
            </div>
        );
    }
    
    componentDidMount(){
        console.log("ComponentDidMount")
    }    

    componentDidUpdate(){
        console.log("ComponentDidUpdate")
    }
}

export default ClassComponent