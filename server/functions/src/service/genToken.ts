import jwt from "jsonwebtoken";
import devApp from "../config/index.config";

export const genToken = (payload: string |object |Buffer, time: string) => {
    const token = jwt.sign(payload, String(devApp.dev.secret), {expiresIn: time});
    return token
};

export const decodeToken = (token: string) => {
    const decodedToken = jwt.verify(token, String(devApp.dev.secret));
    return decodedToken
};
