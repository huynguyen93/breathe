import React from 'react';
import {Button, Center, Heading, Grid, GridItem, Box, Text} from '@chakra-ui/react';
import { Container } from '@chakra-ui/react';
import SlickComment from '@slickcomment/slickcomment-react';
import Exercise from './components/Exercise';
import {exercises} from './constants';

function App() {
  const [activeExercise, setActiveExercise] = React.useState(null);

  return (
    <Container maxW={'lg'} display="flex" flexDirection="column" p={5} minHeight="100%">
      <Box>
        <Center>
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              setActiveExercise(null);
            }}
          >
            <Heading size="3xl" mb={7} color="green.400" textAlign="center">
              Let's breathe!
            </Heading>
          </a>
        </Center>
      </Box>
      <Box flexGrow={1}>
        {!activeExercise && (
          <Grid templateColumns='repeat(1, 1fr)' gap={5}>
            {exercises.map((exercise) => (
              <GridItem
                key={exercise.label}
                w="100%"
                h={10}
              >
                <Center>
                  <Button onClick={() => setActiveExercise(exercise)}>
                    {exercise.label}
                  </Button>
                </Center>
              </GridItem>
            ))}
          </Grid>
        )}
        {activeExercise && (
          <Exercise
            exercise={activeExercise}
            handleBtnHome={() => setActiveExercise(null)}
            initialPrepareSeconds={3}
          />
        )}
        {!activeExercise && (
          <Box mt={20}>
            <Box mb={5}>
              <hr/>
            </Box>
            <Heading size="md" mb={3}>Comments</Heading>
            <SlickComment.WidgetDiscussion
              config={{
                communityId: 'yU5Dye30e1',
                colorScheme: 'dark',
                pageId: 'breathe',
                pageUrl: 'https://breathe.khoahuy.com',
                pageTitle: 'Let\'s Breathe!',
              }}
            />
          </Box>
        )}
      </Box>
      <Box mt={10}>
        <hr/>
        <Text color="gray.500" size="0.9rem" mt={5}>
          😊 created by <a href="https://khoahuy.com">khoahuy.com</a>
        </Text>
      </Box>
    </Container>
  );
}

export default App;
