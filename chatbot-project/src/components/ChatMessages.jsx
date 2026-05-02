import { ChatMessage } from "./ChatMessage";
import { useAutoScroll } from "../hooks/useAutoScroll";
import './ChatMessages.css';

     
     
     export function ChatMessages ({chatMessages}) {

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