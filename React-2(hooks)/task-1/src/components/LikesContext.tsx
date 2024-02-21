import { createContext } from "react";
interface ILikesContext{
    likesCount: number;
    setLikesCount: React.Dispatch<React.SetStateAction<number>>;
}

export const LikesContext = createContext<undefined | ILikesContext>(undefined);