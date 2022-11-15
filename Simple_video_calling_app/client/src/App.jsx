import './App.css'
import { Box, Heading } from '@chakra-ui/react';

import VideoPlayer from './components/VideoPlayer';
import Notifications from './components/Notifications';
import Options from './components/Options';

function App() {
  return (
    <Box>
      <Heading textAlign='center' color='white'>
        Chalo Baat Karte Hai
      </Heading> 
      <VideoPlayer />
      <Options>
        <Notifications />
      </Options>
    </Box>
  )
}

export default App
