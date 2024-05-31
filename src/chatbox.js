import { useState } from "react";
export default function Chatbox(props){
    const [messages, setMessages] = useState([]);
    return(
        <>
        <div className="chat-box">
        {messages.map((message, index) => (
          <div key={index} className={message.sender}>
            <span>{message.text}</span>
          </div>
        ))}

       </div>
        </> 
   
    )
}