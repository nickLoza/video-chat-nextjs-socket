import { Suspense } from "react";
import Webcams from "./Webcams"
import styles from './page.module.css'
import CopyButton from "./CopyButton"
import Loading from "./loading";
function Room({params}) {
    console.log(params)

    return (
        <section className={styles.container}>
            <Suspense fallback={<Loading />}>
                <Webcams roomID={params.roomID}/>
            </Suspense>
            <div className={styles.linkField}>
                <label className={styles.label} htmlFor="room-link">Room Link </label>
                <p>{`https://video-chat-nextjs-socket.netlify.app/room/${params.roomID}`}</p>
                <CopyButton roomID={params.roomID}/>
            </div>
        </section>
    )
}

export default Room