import logo from './logo.svg';
import './App.css';

import socketIOClient from "socket.io-client";
export const socket = socketIOClient('ws://api.hanasu.me', {
  path: '/mysocket/'
});

function App() {
  useEffect(() => {
    socket.emit('connection', 0)
    console.log('connection emitted');

    socket.on('connected', (socketId) => {
      console.log('connected with server as socket:', socketId)
    })
    
  }, [])
  return (
    <div>
      <p>Hello world!!!</p>
    </div>
  );
}

export default App;
