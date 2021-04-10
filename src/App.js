import React from 'react';
import './App.css';
import { io } from 'socket.io-client'
import axios from 'axios'

const socket = io('http://127.0.0.1:5000/client');
class App extends React.Component {
  constructor(porps) {
    super(porps)
    this.socketInit()
  }

  state = {
  }

  socketInit() {
    socket.on('chat message', (msg) => {
      console.log('来自服务端:', msg)
    });
  }
  onSend = () => {
    console.log('点击按钮');
    socket.emit('chat message', '来自客户端的消息');
  }
  onAxios = () => {
    console.log('发送请求');
    axios.get('http://localhost:5000/api/test').then((res) => {
      console.log(res);
    }).catch(err => {
      console.log(err);
    })
  }

  render() {
    return (
      <div className="App">
        123123
        <button onClick={this.onSend}>发送消息</button>
        <button onClick={this.onAxios}>发送请求</button>
      </div>
    )
  }
}


export default App;
