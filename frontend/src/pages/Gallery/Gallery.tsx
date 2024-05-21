import React, { useEffect, useState } from "react"
import { getAllImages } from "../../service/gallery.service";
import { toast } from "react-toastify";
import "./GalleryStyles.scss";

const Gallery = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    //Fetch all the uploaded images when the component mounts
    const fetchImages = async () => {
      try {
        
        const imagesData = await getAllImages(); 
        setImages(imagesData.data);
        
      } catch (error) {
        toast("Error fetching images");
        throw error;
      }
    };

   fetchImages();

  },[]);

  

  
  return (
    <div className="gallery">
      {images.length === 0 && <div>Loading...</div> }
      {images.length > 0 && 
      images.map((images: any) => (
      <div key={images._id} className="image-container">

       <div className="">
        <div style={{paddingTop: "10rem"}}> 
          <img  width={200} height={200} 
          src={`images/${images.image}`} alt={images.data} /> 
        </div>
       </div>
      </div> 
      ))}
    </div>
  )
};

export default Gallery;
