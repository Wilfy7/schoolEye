import bcrypt from "bcrypt";

const saltRounds = 13;

export const hashedPassword = async (password: string) => {
    const salt = await bcrypt.genSalt(saltRounds)
    const hashedPassword = bcrypt.hashSync(password, salt);
    return hashedPassword
};

export const comparePassword = async (password: string, hashedPassword: string) => {
    const isMatch = await bcrypt.compare(password, hashedPassword);
    return isMatch;
};