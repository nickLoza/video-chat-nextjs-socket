"use client"
import React from "react";
import Link from "next/link";
import { v1 as uuid } from "uuid";

const CreateRoomButton = () => {

    return (
        <Link href={`/room/${uuid()}`}>Create Room</Link>
    );
}

export default CreateRoomButton;