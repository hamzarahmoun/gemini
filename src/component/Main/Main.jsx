import React, { useContext } from 'react'
import { assets } from '../../assets/assets'
import './Main.css'
import { Context } from '../../context/Context'
import ReactMarkdown from 'react-markdown'

const Main = () => {
    const {input, setInput, recentPrompt, setRecentPrompt, prevPrompt, setPrevPrompt, showResult, setShowResult, isLoading, setIsLoading, resultData, setResultData, onSent} = useContext(Context);
  return (
    <div className='main'>
        <div className="nav">
           <p>Gemini</p>
           <img src={assets.user_icon} alt="" />
        </div>
        <div className="main-container">

            {!showResult?<>

            <div className="greet">
                <p><span>Hello, Dev.</span></p>
                <p>How Can I Help You Today?</p>
            </div>
            <div className="cards">
                <div className="card">
                <p>Suggest beutiful place to see on an upcoming road trip</p>
                <img src={assets.compass_icon} alt="" />
            </div>
            <div className="card">
                <p>briefly explain the process to build an AI chatbot</p>
                <img src={assets.bulb_icon} alt="" />
            </div>
            <div className="card">
                <p>brainstorm a few topics for a new blog post</p>
                <img src={assets.message_icon} alt="" />
            </div>
            <div className="card">
                <p>improve the copy on my website</p>
                <img src={assets.code_icon} alt="" />
            </div>

            </div>

            </>
            
            :<div className='result'>
                <div className="result-title"> 
                    <img src={assets.user_icon} alt="" />
                    <p>{recentPrompt}</p>
                </div>
                <div className="result-data">
                   <img src={assets.gemini_icon} alt="" />
                   {isLoading?<div className='loader'>
                    <hr/>
                    <hr/>
                    <hr/>
                   </div>:<div className="markdown-content">
                       <ReactMarkdown>{resultData}</ReactMarkdown>
                   </div>}
                </div>

            </div>
            
            }
            <div className="main-bottom">
                <div className="search-box">
                    <input onChange={(e) => setInput(e.target.value)} value={input} type="text" placeholder='enter a prompt here' />
                    <div>
                        <img src={assets.gallery_icon} alt="" />
                        <img src={assets.mic_icon} alt="" />
                       {input?<img onClick={()=>onSent()} src={assets.send_icon} alt="" />:null}

                    </div>
                </div>
                <p className="bottom-info">
                    Gemini may give inaccurate information, including misinformation and harmful content
                </p>

            </div>
        </div>
    </div>
  )
}
export default Main 