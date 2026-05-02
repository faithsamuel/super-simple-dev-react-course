import RobotPic from '../assets/robot.png'
import UserPic from '../assets/user.png'
import './ChatMessage.css';

      export function ChatMessage({message, sender}) {

        return(
          <div className={
            sender === 'user' ? 'chat-message-user' : 'chat-message-robot'}>
            {sender === "robot" && (
              <img src={RobotPic} 
               className="chat-message-profile"
              />
            )}
            <div className="chat-message-text">
              {message}
            </div>
           {sender === "user" && (
            <img src={UserPic}
             className="chat-message-profile"
            />
           )} 
          
          </div>
        );
      }