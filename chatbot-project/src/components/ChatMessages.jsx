import { ChatMessage } from "./ChatMessage";
import { useAutoScroll } from "../hooks/useAutoScroll";
import dayjs from 'dayjs';

import './ChatMessages.css';
     
     export function ChatMessages ({chatMessages}) {

      const time = dayjs().valueOf();

       const chatMessagesRef = useAutoScroll([chatMessages]);
      
        return (
          <div className="chat-messages-container"
          ref={chatMessagesRef}>

          {
            chatMessages.length === 0 ? (<div className="fall-back-text">Welcome to the chatbot project! Send a message using the textbox below. <p>{dayjs(time).format('h:mma')}</p>
            </div>) :  chatMessages.map((chatMessage)=> {

                  return (

                    <ChatMessage 
                      key = {chatMessage.id}
                      message= {chatMessage.message}
                      sender = {chatMessage.sender}
                      time={chatMessage.time}
                    />
                  );
            })
          }
              
              
          </div>
        );
      }