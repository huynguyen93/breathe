import {SettingsIcon} from '@chakra-ui/icons';
import React from 'react';
import {Button, Center, Heading, Grid, GridItem, Box, Text, FormControl, FormLabel} from '@chakra-ui/react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react';
import { Select } from '@chakra-ui/react';
import { Container } from '@chakra-ui/react';
import SlickComment from '@slickcomment/slickcomment-react';
import Exercise from './components/Exercise';
import {exercises} from './constants';

function App() {
  const [activeExercise, setActiveExercise] = React.useState(null);
  const [audioFolder, setAudioFolder] = React.useState('salli');
  const [openSettings, setOpenSettings] = React.useState(false);

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
            audioFolder={audioFolder}
          />
        )}
        {!activeExercise && (
          <Box mt={10}>
            <Box mb={10}>
              <Center>
                <Button leftIcon={<SettingsIcon />} variant="ghost" onClick={() => setOpenSettings(true)}>
                  Settings
                </Button>
              </Center>
              <Modal isOpen={openSettings} onClose={() => setOpenSettings(false)}>
                <ModalOverlay />
                <ModalContent>
                  <ModalHeader>Settings</ModalHeader>
                  <ModalCloseButton />
                  <ModalBody>
                    <Box mb={10}>
                      <FormControl>
                        <FormLabel>Voice</FormLabel>
                        <Select value={audioFolder} onChange={(e) => setAudioFolder(e.target.value)}>
                          <option value="salli">English (Salli - US)</option>
                          <option value="joey">English (Joey - US)</option>
                          <option value="huy">Vietnamese (Huy)</option>
                        </Select>
                      </FormControl>
                    </Box>
                  </ModalBody>
                </ModalContent>
              </Modal>
            </Box>
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
          Created by <a href="https://khoahuy.com">khoahuy.com 😊</a>
          {' · '}
          <a href="https://github.com/huynguyen93/breathe">github</a>
        </Text>
      </Box>
    </Container>
  );
}

export default App;
