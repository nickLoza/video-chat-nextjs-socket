"use client"
import styles from './page.module.css'

function CopyButton({roomID}) {

	function handleOnClick(){
		navigator.clipboard.writeText(`https://video-chat-nextjs-socket-nick.vercel.app/room/${roomID}`)
	}
	return (
		<button className={styles.copyButton} onClick={handleOnClick}>
			COPY
		</button>
	)
}

export default CopyButton