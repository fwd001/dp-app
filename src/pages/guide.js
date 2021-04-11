import { useState, useEffect } from 'react'
import { userAdd } from '../server/index'
import { useHistory } from "react-router-dom";

function Guide(porps) {
    let history = useHistory();
    const [username, setName] = useState('')
    const [roomId, setRoomId] = useState(0)
    useEffect(() => {
        console.log('useEffect:::');
    }, [])
    const add = async () => {
        console.log('add', username, roomId);
        const params = {
            username,
            roomId,
        }
        try {
            const res = await userAdd(params)
            console.log(res);
            const id = res.id
            history.push(`/room/${id}/${username}`);
        } catch (error) {
            console.log(error);

        }

    }
    const onNameChange = (e) => {
        const value = e.target.value
        setName(value)
    }
    const onIdChange = (e) => {
        const value = e.target.value
        setRoomId(value)
    }

    return (
        <>
            <p>
                <label htmlFor="username">用户名：</label>
                <input value={username} onChange={onNameChange} id="username" />
            </p>
            <p>
                <label htmlFor="roomId">房间号：</label>
                <input value={roomId} onChange={onIdChange} id="roomId" type="number" />
            </p>
            <p><button onClick={add}>加入</button></p>
        </>
    );
}

export default Guide
