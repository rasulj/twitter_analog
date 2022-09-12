import "./AppHeader.css"

    
const AppHeader =({liked,allposts})=>{

    return(
        <div className="app-header d-flex">
            <h1>RASULJON KAMILOV</h1>
            <h2> {allposts} posts  {liked} like</h2>
        </div>
    )
}

export default AppHeader




// import "./AppHeader.css"

// const AppHeader =()=>{
//     return(
//         <div className="app-header d-flex">
//                     <h1>rasul kamilov</h1>
//             <h2>5 post like 0</h2>
//         </div>
//     )
// }
// export default AppHeader ;