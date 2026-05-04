 
import { useState } from 'react'
import { Chatbot } from 'supersimpledev'
import SpinnerPic from '../assets/loading-spinner.gif'
import dayjs from 'dayjs';

import './ChatInput.css';


 export function ChatInput({chatMessages, setChatMessages }) {
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
              id: crypto.randomUUID(),
              time: dayjs().valueOf()
            },
            {
              message: <img src={SpinnerPic} className="loading-spinner" />,
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
              id: crypto.randomUUID(),
              time: dayjs().valueOf()

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

            function clearMessage() {
              setChatMessages([JSON.parse(localStorage.removeItem('messages'))])

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

            <button
              onClick={clearMessage}
              className="clear-button"
            >Clear</button>

            
          </div>
        );
      }