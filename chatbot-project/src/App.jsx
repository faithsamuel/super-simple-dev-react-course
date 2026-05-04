import { useEffect, useState } from 'react'
import { ChatInput } from './components/ChatInput'
import { ChatMessages } from './components/ChatMessages';
import { Chatbot } from 'supersimpledev'
import './App.css'


     

  function App() {
        
          const [chatMessages, setChatMessages] = useState(JSON.parse(localStorage.getItem('messages')) || [{
            message: 'hello chatbot',
            sender: 'user',
            id: 'id1'
          }]);

          useEffect(()=>{
            Chatbot.addResponses({
              '1 + 1' : '2',
              'Bye' : 'Have a great day!'
            }
          )
          }, []);

          useEffect(()=>{
            localStorage.setItem('messages', JSON.stringify(chatMessages))
          }, [chatMessages]);

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
