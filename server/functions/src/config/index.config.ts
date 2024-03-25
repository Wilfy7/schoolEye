import dotenv from "dotenv";

dotenv.config();

const devApp = {
   dev: {
     port: process.env.SERVERPORT,
     secret: process.env.SECRET,
     db: {
        uri: process.env.DB_URL}
   },
    
}


export default devApp;