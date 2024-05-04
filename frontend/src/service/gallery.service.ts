import axios from "axios";


const baseUrl = process.env.REACT_APP_API;


//Upload image
export const uploadImage = async (imageFile: any) => {
    try {
        //Validate file type and size
        //if (!imageFile || !imageFile.type.startsWith(`image/`) || imageFile.size)
        
        //Create formData object to send the file
        const formData = new FormData();
        formData.append("image", imageFile)

        const res = await axios.post(`${baseUrl}/upload`, formData);

        console.log("File uploaded successfully:", res.data.filePath)
        return res.data

    } catch (error) {
      console.log("Error uploading image", error);
      throw error;
    }
};

export const getAllImages = async () => {
    try {
        const res = await axios.get(`${baseUrl}/images/all`);
        return res.data
    } catch (error) {
      console.log("Error fetching images");
      throw error;  
    }
};
  
export const getImage = async () => {
  try {
    const res = await axios.get(`${baseUrl}/image`); 
    return res.data;

  } catch (error) {
    console.log("Error fetching image");
    throw error;
  }
};
