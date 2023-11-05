import { BrowserRouter, Route, Routes } from "react-router-dom";
import Chat from "./components/chat";
import { useState } from "react";


function App() {
  const [chat, setChat] = useState([]);
  
  const sendMessage = (message) => {
    setChat((prevChat) => [...prevChat, message]);
  };

  const receiveMessage = (message) =>{
    setChat((prevChat) => [...prevChat, message]);  
  }
  
  return (
      <Chat 
        chat={chat} 
        sendMessage={sendMessage} 
        receiveMessage={receiveMessage} 
      />
  );
}

export default App;
