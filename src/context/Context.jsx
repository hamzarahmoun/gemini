import { createContext, useState } from "react";
import runChat from "../config/gemini";
export const Context = createContext();

export const ContextProvider = (props) => {
    const[input, setInput] = useState("");
        const[recentPrompt, setRecentPrompt] = useState("");
        const[prevPrompt, setPrevPrompt] = useState([]);
        const[showResult, setShowResult] = useState(false);
        const[isLoading, setIsLoading] = useState(false);
        const[resultData, setResultData] = useState("");
    const onSent  = async () => {
        setResultData("")
        setIsLoading(true)
        setShowResult(true)
        const response = await runChat(input);
        setResultData(response)
        setIsLoading(false)
        setInput("")
    }
    
    
    const contextValue = {
        prevPrompt,
        setPrevPrompt,
        recentPrompt,
        setRecentPrompt,
        input,
        setInput,
        showResult,
        setShowResult,
        isLoading,
        setIsLoading,
        onSent,
        resultData,
        setResultData,
        



    }
    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )
};

export default ContextProvider;