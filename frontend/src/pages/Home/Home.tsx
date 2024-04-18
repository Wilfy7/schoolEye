import { useEffect, useState } from "react";
import "./HomeStyles.scss"
import { getAllPosts } from "../../service/post.service";
import { format } from "date-fns";


const Home = () => {


   const [posting, setPosting]: any = useState([]);
   
   
   useEffect(() => {
    try {
  
     const fecthPosts = async () => {
      const res = await getAllPosts();
       setPosting(res.data);
     }

     fecthPosts();
    } catch (error) {
      console.log(error)
    }
   }, [])

  

  return (
  <>
    <div>
        {posting.length === 0 && <div>Loading...</div> }
        {posting.length > 0 && 
         posting.map((posting: any) => (
      <div
        key={posting._id}
       >
            
       <div style={{fontSize: "14px"}} 
             className="card justify-content-center ">
       
         <div className="card-userIni">
          {posting.user?.fullName[0]}
         {posting.user?.fullName.split(" ")[1]?.charAt(0)}
         </div>
         <div className="card-title ">
         <span className="userName " >
          {posting.user?.fullName}</span>
          <span style={{fontSize: "10px"}}>
            {format(new Date (posting.createdAt), "EE d MMM yyy")}
            {format(new Date(posting.createdAt), "hh:mm a")}</span>
          </div>
          <div className="postContainer ">
           <div className="card-text card-body "> 
          </div>
          {posting.post}
         </div>
       </div>
      </div> 
        
       ))}
    </div>
      
  </>
  
  )
}

export default Home; 
