import React from 'react'
class UserClass extends React.Component{
    constructor(props){
        super(props);
        console.log("from user class"+props);
        this.state={
            count:0
        }
    }
    render(){
        return(
            <div className="user-card">
            <h2>Name:{this.props.nameclass}</h2>
            <h2>Count : {this.state.count}</h2>
            <button onClick={()=>{
                //never update state variable directly
                this.setState({
                    count:this.state.count +1,
                })
            }}>Count increment</button>
            <h2>Location:Banglore</h2>
            <h2>Contact Us:anjalibhat012@gmail.com</h2>
             </div>
        )
    }
}
export default UserClass;