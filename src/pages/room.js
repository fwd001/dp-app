import { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import { io } from 'socket.io-client'
import { baseURL } from '../utils/config'

let url = `${baseURL}`
let socket = io(url)

function Room(props) {
    let { id,name } = useParams();
    let [username, setUsername] = useState('')
    let [roomid, setRoomid] = useState('')
    useEffect(() => {
        socketInit()
        socket.emit('create', { id , userName: name });// 初始化房间 or 进入房间
    }, [])

    const socketInit = () => {
        socket.on('chat message', (msg) => {
            console.log('来自服务端:', msg)
        });

        socket.on('ontestRoom', (msg) => {
            console.log('来自服务端:', msg)
        });
    }

    const sendMsg = () => {
        console.log('点击按钮');
       socket.emit('getrooms', {})
    }
    const sendRoomMsg = () => {
        console.log('测试房间指令');
       socket.emit('testRoom', { id , userName: name })
    }
    

    return (
        <div>
            <h2>Room{id}, 玩家：{name}</h2>
            <button onClick={sendMsg}>测试</button>

            <button onClick={sendRoomMsg}>房间指令测试</button>
            {username && <p>玩家：{username} 在{roomid}房间 点击了测试指令</p>}
        </div>
    );
}

export default Room
