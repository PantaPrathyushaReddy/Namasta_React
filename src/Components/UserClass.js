import React from "react";
class UserClass extends React.Component{
    constructor(props){
        super(props);
        this.state={
            count:0,
        }
        console.log("child constructor")
    }
    componentDidMount(){
        console.log("child component didMount");
    }
    render(){
        const{name,location}=this.props;
        const{count}=this.state;
        console.log("child render");
        return(
            <div className="user-card">
                <h2>Count:{count}</h2>
                <button onClick={()=>{
                    this.setState({count:this.state.count+1})
                }}>Count Increase</button>
                <h2>Name:{name}</h2>
                <h3>{location}</h3>
                <h4>Contact:prathyushapanta@gmail.com</h4>

            </div>
        )
    }
}

export default UserClass;