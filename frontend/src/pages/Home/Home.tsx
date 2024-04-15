import { useEffect, useState } from "react";
import "./HomeStyles.scss"
import { getAllPosts } from "../../service/post.service";

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
              
         </div>
         <p className="userName">{posting.user?.fullName}
          <p style={{fontSize: "10px"}}>{posting.createdAt}</p>
         </p>
         <div className="card-text">
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
