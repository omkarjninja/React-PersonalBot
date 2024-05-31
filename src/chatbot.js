// src/Chatbot.js

import React, { useState } from 'react';
import './chatbot.css';

const Chatbot = () => {
 
  const [input, setInput] = useState('');
  const [um,setum]=useState([])
  var [messages, setMessages] = useState([]);
  const [Joke, setJoke] =useState("");
   const fetchApi = () => {
      fetch("https://sv443.net/jokeapi/v2/joke/Dark?type=single")
          .then((res) => res.json())
          .then((data) => setJoke(data.joke)); 
  };
  // window.onload =  fetchApi;
  // const [textsppech, setTextspeech] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    const userMessage = { sender: 'user', text: input };
    // setum([...um, userMessage])
    setMessages([...messages, userMessage]);

    const botMessage = getBotResponse(input);
    setMessages([...messages, userMessage, botMessage]);
    // setTextspeech([botMessage])
    // setJoke("haha")
    setInput('');
    fetchApi();
  };

  const getBotResponse = (input) => {
    let response = { sender: 'bot', text: '' };

    if (input.toLowerCase().includes('hi')) {
      response.text = 'Hi there! How can I help you today?';
    } else if (input.toLowerCase().includes('omkar')) {
      response.text = 'Omkar is a Full-Stack Web Developer proficient with MERN Stack , combining a solid foundation in web development with a passion for crafting dynamic, user-centric applications and currently pursuing MCA in BMSIT.';
    }
    else if (input.toLowerCase().includes('hello') || input.toLowerCase().includes('hi') || input.toLowerCase().includes('hey')
    || input.toLowerCase().includes('yo')
    ) {
      response.text = 'Hello! How can I assist you today?';
    } else if (input.toLowerCase().includes('bye') || input.toLowerCase().includes('goodbye')) {
      response.text = 'Goodbye! Have a great day!';
    }else if (input.toLowerCase().includes('weather')) {
      response.text = 'I am not equipped to provide weather updates at the moment. Please check your local weather service.It will Be coming in Next Update.';
    }     
    else if (input.toLowerCase().includes('portfolio')) {
      response.text = `You can check Omkar's Portfolio at https://jadhavomkar.netlify.app`
      // <a href='https://jadhavomkar.netlify.app' target='blank'>Omkar</a>
    }else if (input.toLowerCase().includes('skills')) {
      response.text="Omkar is Proficient in MERN Stack | Typescript | TailwindCSS | GIT | PHP | JS | Python"
    }else if (input.toLowerCase().includes('hobbies') || input.toLowerCase().includes('hobby')) {
      response.text = 'Omkar Loves to do Graphic Designing , Video Editing , Playing Football and Cricket';
    }else if (input.toLowerCase().includes('football')) {
      response.text = 'Omkar`s Favorite club is Barcelona and Favorite Player is Messi';
    }else if (input.toLowerCase().includes('joke')) {
      var f=Joke
      response.text = `${f}`;
    }
    else if (input.toLowerCase().includes('how are you')) {
      response.text = 'I am just a bot, but I am functioning as expected!';
    }
    else if (input.toLowerCase().includes('how are you')) {
      response.text = 'I am just a bot, but I am functioning as expected!';
    }else if (input.toLowerCase().includes('time')) {
      const currentTime = new Date().toLocaleTimeString();
      response.text = `Your current time is ${currentTime}.`;
    }else if (input.toLowerCase().includes('date')) {
      const dete = new Date().toDateString();
      response.text = `Your current Date is ${dete}.`;
    }
    else if (input.toLowerCase().includes('how are you')) {
      response.text = 'I am just a bot, but I am functioning as expected!';
    }else {
      response.text = 'I am sorry, I do not understand your query. Can you please rephrase?';
    }

    return response;
  };
  
 
  const clearall=()=>{
    messages.map((msg)=>{
      messages=[]
    })
    setInput('')
   
  }

  // const handleSpeak = () => {
  //   if ('speechSynthesis' in window) {
  //     const utterance = new SpeechSynthesisUtterance(textsppech);
  //     window.speechSynthesis.speak(utterance);
  //   } else {
  //     alert('Text-to-speech is not supported in this browser.');
  //   }
  // };
  return (
    <>
    {/* <div>
      <h1>Omkar's Simple ChatBot</h1>
      <div className="chat-box">
        {messages.map((message, index) => (
          <div key={index} className={message.sender}>
            <span>{message.text}</span>
           
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
        />
        <button type="submit">Send</button>
        <button onClick={clear}>Clear All</button>
        
      </form>
    </div> */}


<form onSubmit={handleSubmit}>
    <div class="flex h-screen antialiased text-gray-800 bg-[#F6F5F2]">
    <div class="flex flex-row h-full w-full overflow-x-hidden bg-[#F6F5F2]">
      <div class="flex flex-col py-8 pl-6 pr-2 w-64 bg-white flex-shrink-0 bg-[#F6F5F2]">
        <div class="flex flex-row items-center justify-center h-12 w-full">
          <div
            class="flex items-center justify-center rounded-2xl text-[#d7dfe1] bg-[#0f2328] h-10 w-10"
          >
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
              ></path>
            </svg>
          </div>
          <div class="ml-2 font-bold text-2xl">Omkar's Bot</div>
        </div>
        <div
          class="flex flex-col items-center bg-[#0f2328] border border-gray-200 mt-4 w-full py-6 px-4 rounded-lg"
        >
          <div class="h-20 w-20 rounded-full border overflow-hidden">
            <img
              src="https://res.cloudinary.com/dunygyzai/image/upload/v1717113730/nu7w4jnjsgbyu1vjlivj.jpg"
              alt="Avatar"
              class="h-full w-full"
            />
          </div>
          <div class="text-sm font-semibold text-[#d7dfe1] mt-2">Omkar Jadhav</div>
          <div class="text-xs text-[#d7dfe1]">Full-Stack Developer</div>
          <div class="flex flex-row items-center mt-3">
            {/* <div
              class="flex flex-col justify-center h-4 w-8 bg-indigo-500 rounded-full"
            >
              <div class="h-3 w-3 bg-white rounded-full self-end mr-1"></div>
            </div> */}
            {/* <div class="leading-none ml-1 text-xs">Active</div> */}
          </div>
        </div>
        <div class="flex flex-col mt-8">

         
        </div>
      </div>
      <div class="flex flex-col flex-auto h-full p-6">
        <div
          class="flex flex-col flex-auto flex-shrink-0 rounded-2xl bg-[#0f2328] h-full p-4"
        >
          <div class="flex flex-col h-full overflow-x-auto mb-4">
            <div class="flex flex-col h-full">
              <div class="grid grid-cols-12 gap-y-2">
                
                
                
                <div class="col-start-1 col-end-13 p-3 rounded-lg">
                {messages.map((message, index) => (
          <div key={index} className={message.sender}>
            <span>{message.text}</span>
           
          </div>
        ))}
                {/* {messages.map((message,index)=> (
                  <div class="flex flex-row items-center">
                    <div
                      class="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0"
                    >
                      OJ
                    </div>
                    <div
                      class="relative ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl"
                    >
                      
          <div key={index} className={message.sender}>
            <span>{message.text}</span>
           
          </div>
       
                    </div>
                  </div>
                   ))}
                  {um.map((message,index)=> (

<div class="flex items-center justify-start flex-row-reverse">
<div
    class="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0"
  >
    YOU 
  </div>
  <div
    class="relative mr-3 text-sm bg-indigo-100 py-2 px-4 shadow rounded-xl"
  >
    
<div key={index} >
<span>{message.text}</span>

</div>

  </div>
</div>


                  ))} */}
                 
                </div>
                {/* <div class="col-start-1 col-end-8 p-3 rounded-lg">
                  {messages.map((message,index)=> (
                  <div class="flex flex-row items-center">
                    <div
                      class="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0"
                    >
                      OJ
                    </div>
                    <div
                      class="relative ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl"
                    >
                      
          <div key={index} className={message.sender}>
            <span>{message.text}</span>
           
          </div>
       
                    </div>
                  </div>
                   ))}
                </div>   */}
              </div>
            </div>
          </div>
          <div
            class="flex flex-row items-center h-16 rounded-xl bg-[#d7dfe1] w-full px-4 text-[#0f2328]"
          >
           
            <div class="flex-grow ml-4">
              <div class="relative w-full">
                
                {/* <input
                  type="text"
                  class="flex w-full border rounded-xl focus:outline-none focus:border-indigo-300 pl-4 h-10"
                /> */}
                <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          // onKeyPress={(e) => {e.key === "Enter"?handleSubmit:"";}}
          placeholder="Type your message..."
          class="flex w-full border rounded-xl focus:outline-none focus:border-[#0f2328] pl-4 h-10 bg-[#d7dfe1] text-[#0f2328]"
        />
                {/* <button
                  class="absolute flex items-center justify-center h-full w-12 right-0 top-0 text-[#0f2328] hover:text-gray-600"
                >
                  <svg
                    class="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                </button> */}
              </div>
            </div>
            <div class="ml-4">
              <button type='submit' onClick={handleSubmit}
                class="flex items-center justify-center bg-[#0f2328] hover:bg-[#0f2328] rounded-xl text-white px-4 py-1 flex-shrink-0"
              >
                <span>Send</span>
                <span class="ml-2">
                  <svg
                    class="w-4 h-4 transform rotate-45 -mt-px"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                    ></path>
                  </svg>
                </span>
              </button>
              
            </div>
            {/* <div class="ml-4">
              <button onClick={clearall}
                class="flex items-center justify-center bg-[#0f2328] hover:bg-[#0f2328] rounded-xl text-white px-4 py-1 flex-shrink-0"
              >
                <span>Clear All</span>
                <span class="ml-2">
                  <svg
                    class="w-4 h-4 transform -mt-px"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M7.50006 5.5L4.05262 10.7909C3.71387 11.3107 3.69732 11.9772 4.00984 12.5133L7.50006 18.5H18.8588C19.7651 18.5 20.4999 17.7653 20.4999 16.8589V7.14109C20.4999 6.23474 19.7651 5.5 18.8588 5.5H7.50006Z"
                    ></path>
                  </svg>
                </span>
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  </div>
  </form>
    </>
  );
};

export default Chatbot;
