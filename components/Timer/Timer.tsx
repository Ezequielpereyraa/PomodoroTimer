import React from "react";
import styles from '../../styles/Home.module.css'

type Props = {
	time: number;
	seconds: number;
	ticking: boolean;
	reset : () => void;
	startTimer: () => void;
	isBreak: boolean;
}

export default function Timer({
	time,
	seconds,
	startTimer,
	ticking,
	reset,
	isBreak
}: Props) {

	return (
		<div className={styles.containerPomodoro}>
				{ticking ? <h1>{isBreak ? 'Time to relax' : 'Time to Work'}</h1> : 					<h1>Pomodoro</h1>}

				<h2 className={styles.time}>
					{time}:{seconds.toString().padStart(2, "0")}
				</h2>

				<div className={styles.buttonContainer}>
				<button
					className={styles.buttonStart}
					onClick={startTimer}
				>
					{ticking ? "Stop" : "Start"}
				</button>

			{ticking && (
				<button className={styles.resetButton} onClick={reset}>
					Reset
				</button>
			)}
			</div>
		</div>
	);
}