"use client"
import React from "react";
import { useRouter } from 'next/navigation';
import { v1 as uuid } from "uuid";

const CreateRoomButton = () => {
    const router = useRouter();
    function handleOnClick(){
        router.push(`/room/${uuid()}`)
    }

    return (
        <button onClick={handleOnClick}>Create Room</button>
    );
}

export default CreateRoomButton;