

import React from "react";
import AppHeader from "../AppHeader";
import PostAddForm from "../PostAddForm/PostAddForm";
import PostList from "../PostList/PostList";
import PostStatusFilter from "../PostStatusFilter/PostStatusFilter";
import SearchPonel from "../SearchPonel";
import "./App.css"




  export default class App extends React.Component{
constructor(props){
    super(props)
    this.state = {
data:[
     { label: "Going to learn React js" ,important: false, like:false,id:'qv'},
     { label: "That is so good", important: false, like:false, id: 'qs' },
     { label: "i need a beak....", important: false, like:false, id: 'qz' }
 ]
    }
    this.onToggleLike =this.onToggleLike.bind(this)
    this.onDelete = this.onDelete.bind(this)
    this.oddItem = this.oddItem.bind(this)
    this.maxid = 4 
   this.onToggleImportant = this.onToggleImportant.bind(this)
}


onDelete(id){
    this.setState(({data})=>{
           let index = data.findIndex(elem => elem.id === id) 
           
    let newdata = [...data.slice(0,index), ...data.slice(index+1)];

    return{  
          data :newdata }
     
    })
}
     oddItem(body){
  const newitem ={
    label:body,
    important: false,
    id:this.maxid++
   }
   this.setState(({data}) => {
       const newarr = [...data, newitem]
return{
    data:newarr
}

   })

}
onToggleImportant(id){
   this.setState(({data})=>{
    const index = data.findIndex(elem => elem.id === id)
    const olitem =data[index]
    const newitem = {...olitem ,important:!olitem.important}
    const newarr =[...data.slice(0,index), newitem, ...data.slice(index+1)];
    console.log(newarr);
    return{
        data:newarr
    }
 
   })  
}
onToggleLike(id){
   this.setState(({data})=>{
    const index = data.findIndex(elem => elem.id === id)
    const olitem =data[index]
    const newitem = {...olitem ,like:!olitem.like}
    const newarr =[...data.slice(0,index), newitem, ...data.slice(index+1)];
    console.log(newarr);
    return{
        data:newarr
    }
 
   }) 
}
    render(){
 const liked = this.state.data.filter(item => item.like).length;
 const allposts = this.state.data.length
           return(
        <div className="app">
    <AppHeader liked={liked} allposts={allposts}/>
        <div className="search-panel  d-flex">
              <SearchPonel/>
              <PostStatusFilter/>
         </div>
      <PostList posts={this.state.data}
       onDelete={this.onDelete}
       onToggleImportant={this.onToggleImportant}
       onToggleLike={this.onToggleLike}

       />
      <PostAddForm onAdd={this.oddItem}/>
     
        </div>
    )
    }
  }

 

 

