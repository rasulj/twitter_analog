

import PostListItem from "../PostListItem/PostListItem"
import "./PostList.css"

const PostList = ({ posts, onDelete,onToggleImportant,onToggleLike}) =>{
 
 let elements = posts.map((pos)=>{

   const { id , ...itempost} = pos
   
  return <li key={id} className="list-group-item">

    <PostListItem {...itempost}
     onDelete={()=>onDelete(id)}
     
     onToggleImportant ={()=>onToggleImportant(id) }
   
    onToggleLike={()=>onToggleLike(id)}
     />
    
  </li> 
 })
    return(
  <ul className="app-list list-group">
    {elements}
  </ul>
    )
}
export default PostList

