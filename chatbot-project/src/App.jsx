import { useState, useEffect, useRef } from 'react'
import { Chatbot } from 'supersimpledev'
import './App.css'

function useAutoScroll({dependencies}) {

         const chatMessagesRef = useRef(null);

        useEffect(()=> {
          const containerElem = chatMessagesRef.current;

          if(containerElem) {
            containerElem.scrollTop = containerElem.scrollHeight;
          }

        }, dependencies);

        return chatMessagesRef;

      }

      function ChatInput({chatMessages, setChatMessages }) {
        const [inputText, setInputText] = useState('');

        const [isLoading, setIsLoading] = useState(false);

        function saveInputText(event) {
          setInputText(event.target.value);
        }

       async function sendMessage() {

        if(isLoading || inputText === '') {
          return;
        }


        setIsLoading(true);

        setInputText('');
        
          const newChatMessages = [
            ...chatMessages,
            {
              message: inputText,
              sender: 'user',
              id: crypto.randomUUID()
            },
            {
              message: <img src="loading-spinner.gif" className="loading-spinner" />,
              sender: 'robot',
              id: crypto.randomUUID()
            }
          ];

          setIsLoading(false);

          setChatMessages(newChatMessages);

          setInputText('');

          const response = await Chatbot.getResponseAsync(inputText);
         
          setChatMessages([
            ...newChatMessages.slice(0, newChatMessages.length - 1),
            {
              message: response,
              sender: 'robot',
              id: crypto.randomUUID()
            }
          ]);

          // setInputText('');
        }


          function  handleKeyDown(e) {
           if (e.key === 'Enter')  {
             sendMessage();
              } else if (e.key === 'Escape') {
                setInputText('');
              }
            }

        return (
          <div className="chat-input-container">
            <input 
              placeholder="Send a message to Chatbot" size="30"
              onChange={saveInputText}
              onKeyDown={handleKeyDown}
              value={inputText}
              className="chat-input"
            />
            <button
              onClick={sendMessage}
              className="send-button"
            >Send</button>

            
          </div>
        );
      }



      // Chat message component

      function ChatMessage({message, sender}) {

        return(
          <div className={
            sender === 'user' ? 'chat-message-user' : 'chat-message-robot'}>
            {sender === "robot" && (
              <img src="robot.png" 
               className="chat-message-profile"
              />
            )}
            <div className="chat-message-text">
              {message}
            </div>
           {sender === "user" && (
            <img src="user.png"
             className="chat-message-profile"
            />
           )} 
          
          </div>
        );
      }

      // Chat messages component

      function ChatMessages ({chatMessages}) {

       const chatMessagesRef = useAutoScroll([chatMessages]);
      
        return (
          <div className="chat-messages-container"
          ref={chatMessagesRef}>

          {
            chatMessages.length === 0 ? (<p className="fall-back-text">Welcome to the chatbot project! Send a message using the textbox below.</p>) :  chatMessages.map((chatMessage)=> {

                  return (

                    <ChatMessage 
                      key = {chatMessage.id}
                      message= {chatMessage.message}
                      sender = {chatMessage.sender}
                    />
                  );
            })
          }
              
              
          </div>
        );
      }

  function App() {
        
          const [chatMessages, setChatMessages] = useState([]);

        return (
           <div className="app-container">
              <ChatMessages
                chatMessages={chatMessages}
               />

               <ChatInput
                chatMessages={chatMessages}
                setChatMessages={setChatMessages}
               />
          </div>
        );
       
      }

export default App
