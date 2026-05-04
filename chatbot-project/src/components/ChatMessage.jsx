import RobotPic from '../assets/robot.png'
import UserPic from '../assets/profile-1.jpg'
import dayjs from 'dayjs';
import './ChatMessage.css';

      export function ChatMessage({message, sender, time}) {


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
              {time && (
                <div className='chat-message-time'>
                  {dayjs(time).format('h:mma')}
                </div>
              )}
            </div>
           {sender === "user" && (
            <img src={UserPic}
             className="chat-message-profile"
            />
           )} 
          
          </div>
        );
      }