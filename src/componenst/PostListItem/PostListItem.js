

import React from "react"
import "./PostListItem.css"


export default class PostListItem extends React.Component{



    render(){ 
        const { important, like,label , onDelete,onToggleLike,onToggleImportant} = this.props
 
       
      console.log(important);
        
        let classnames = "app-list-item d-flex justify-content-between"; 
   if(important){
 classnames +=" important "
   }           
        if (like) {
            classnames += " like"
        }
           return(
 

        <div className={classnames }>
                   <span className="app-list-item-label" onClick={onToggleLike}>{label}</span>
                
            
            <div className="d-flex justify-content-center align-items-center">

                        <button type="button"
                         className="btn-star btn-sm"
                        onClick={onToggleImportant}>
                             <i className="fa fa-star "></i>
                       </button>

                      <button type ="button" onClick={onDelete}
                     className="btn-trash btn-sm">
                      <i className="fa fa-trash" ></i>
                      </button>
 
                <i className="fa fa-heart like"></i>
            </div>
        </div>
    )
    }
}

