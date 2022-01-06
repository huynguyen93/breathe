import { useStopwatch } from 'react-timer-hook';

function Timer() {
  const {
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    reset,
  } = useStopwatch({ autoStart: true });

  return (
    <div style={{textAlign: 'center'}}>
    </div>
  );
}
