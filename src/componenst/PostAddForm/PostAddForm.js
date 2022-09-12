


import React from "react"
import "./PostAddForm.css"
export default class PostAddForm extends React.Component{
 state ={
    text:''
 }

onSubmit=(e)=>{
e.preventDefault()
this.props.onAdd(this.state.text)
this.setState({
    text:''
})
}
    render(){

       return(
        <form  className="bottom-panel d-flex" onSubmit={this.onSubmit}>
        <input
        type="text"
        placeholder="What are you thinking about?"
        className="form-control new-post-label"
        value={this.state.text}
        onChange={(e)=>(this.setState({text: e.target.value}))}
/>
    <button 
        type="submit"
        className="btn btn-outline-secondary"  
        >
             Add Post
      </button>
      


        </form>
    )  
    }
}

