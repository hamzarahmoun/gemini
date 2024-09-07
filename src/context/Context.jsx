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


        const delayPara = (text, setResultData) => {
            const words = text.split(' ');
            let currentIndex = 0;

            const intervalId = setInterval(() => {
                if (currentIndex < words.length) {
                    setResultData(prevText => prevText + words[currentIndex] + ' ');
                    currentIndex++;
                } else {
                    clearInterval(intervalId);
                }
            }, 30); // Adjust the delay (in milliseconds) between words as needed
        }

        const onSent = async () => {
            setResultData("");
            setIsLoading(true);
            setShowResult(true);
            setRecentPrompt(input);
            setPrevPrompt(prev => [...prev, input]);
            const response = await runChat(input);
            
            // Convert the response to Markdown
            const formattedResponse = response
                .replace(/^# /gm, '# ')
                .replace(/^## /gm, '## ')
                .replace(/^\* /gm, '* ')
                .replace(/\*\*(.*?)\*\*/g, '**$1**')
                .replace(/\[(.*?)\]\((.*?)\)/g, '[$1]($2)');
            
            setIsLoading(false);
            setInput("");
            
            // Use delayPara to show the text word by word
            delayPara(formattedResponse, setResultData);
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