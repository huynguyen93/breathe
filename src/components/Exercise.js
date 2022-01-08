import {ArrowBackIcon} from '@chakra-ui/icons';
import {
  Box,
  Button,
  Center,
  Container,
  Text,
  IconButton,
  ScaleFade,
} from '@chakra-ui/react';
import React from 'react';
import {useStopwatch} from 'react-timer-hook';

const messagesCache = {};

function Exercise(props) {
  const {exercise, handleBtnHome, initialPrepareSeconds} = props;

  const {
    seconds,
    minutes,
    hours,
    isRunning,
    start,
    pause,
    reset,
  } = useStopwatch({ autoStart: true });

  const initialState = {
    elapsed: 0,
    currentPeriodStartedAt: initialPrepareSeconds + 1,
    periodIndex: 0,
    currentRound: 1,
    prepareSeconds: initialPrepareSeconds + 1,
  }

  const [state, setState] = React.useState(initialState);

  const {
    elapsed,
    periodIndex,
    currentRound,
    prepareSeconds,
    currentPeriodStartedAt,
  } = state;

  const {periods} = exercise;
  const period = periods[periodIndex];
  const secondsString = `${seconds}s`;
  const minutesString = minutes > 0 ? `${minutes}m` : '';
  const hoursString = hours > 0 ? `${hours}h` : '';
  const isPreparing = prepareSeconds > 0;

  function restart() {
    pause();
    setState({
      ...initialState,
      currentPeriodStartedAt: initialPrepareSeconds,
      prepareSeconds: initialPrepareSeconds,
    });
    reset();
    start();
  }

  function nextRound() {
    setState((prev) => ({
      ...prev,
      currentRound: prev.currentRound + 1,
      periodIndex: 0,
      currentPeriodStartedAt: elapsed,
    }));
  }

  React.useEffect(() => {
    setState((prev) => ({...prev, elapsed: prev.elapsed + 1}));
  }, [seconds]);

  React.useEffect(() => {
    if (!isRunning || elapsed === 0) {
      return;
    }

    if (prepareSeconds > 0) {
      setState((prev) => ({...prev, prepareSeconds: prev.prepareSeconds - 1}));

      return;
    }

    if (elapsed === currentPeriodStartedAt + period.seconds) {
      if (periods[periodIndex + 1]) {
        setState((prev) => ({
          ...prev,
          currentPeriodStartedAt: elapsed,
          periodIndex: prev.periodIndex + 1,
        }));
      } else {
        nextRound();
      }
    }
  }, [elapsed]);

  React.useEffect(() => {
    if (prepareSeconds === 0) {
      if (!messagesCache[period.label]) {
        const msg = new SpeechSynthesisUtterance();
        msg.text = period.label;
        msg.rate = 0.6;

        messagesCache[period.label] = msg;
      }

      window.speechSynthesis.speak(messagesCache[period.label])
    }
  }, [periodIndex, prepareSeconds]);

  React.useEffect(() => {
    const handleKeySpacePressed = (event) => {
      if (event.key === ' ') {
        if (isRunning) {
          pause();
        } else {
          start();
        }
      }
    }

    window.addEventListener('keydown', handleKeySpacePressed);

    return () => {
      window.removeEventListener('keydown', handleKeySpacePressed);
    };
  }, [isRunning]);

  const controls = (
    <Box display="flex" flexDirection="column" alignItems="center">
      {isRunning && (
        <Button onClick={pause} mb={3}>
          Pause
        </Button>
      )}
      {!isRunning && (
        <>
          <Button onClick={start} mb={3}>
            Resume
          </Button>
          <Button onClick={restart} mb={3}>
            Restart
          </Button>
        </>
      )}
    </Box>
  );

  return (
    <Container maxW="container.lg">
      <Center mb={10}>
        <IconButton
          aria-label="Back to home"
          icon={<ArrowBackIcon />}
          marginInlineEnd={5}
          onClick={handleBtnHome}
          size="sm"
        />
        <Text>{exercise.label}</Text>
      </Center>
      <Box display="flex" flexDirection="column" alignItems="center">
        {isPreparing && (
          <Box textAlign="center" paddingBlock={100}>
            <Text fontSize="3rem">Get ready!</Text>
            <Text fontSize="3rem">{prepareSeconds}</Text>
          </Box>
        )}
        {!isPreparing && (
          <ScaleFade in={true} key={periodIndex} initialScale={0.8}>
            <Box textAlign="center">
              <Box paddingBlock={100}>
                <Text fontSize="3rem">{period.label}</Text>
                <Text fontSize="3rem">{(currentPeriodStartedAt + period.seconds) - (elapsed)}</Text>
                {period.note && (
                  <Text mt={5} fontSize="1rem" color="gray.300">{period.note}</Text>
                )}
              </Box>
            </Box>
          </ScaleFade>
        )}
        <Box mt={10}>
          <Text color="gray.500">
            Round: {currentRound} · Time: {hoursString} {minutesString} {secondsString}
          </Text>
        </Box>
        <Box mt={10}>
          {controls}
        </Box>
      </Box>
    </Container>
  );
}

export default Exercise;
