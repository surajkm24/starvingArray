import React from 'react'
import { Box, SimpleGrid, Text } from '@chakra-ui/react';
import { SocketContext } from '../SocketContext';
import { useContext } from 'react';
const VideoPlayer = () => {
  const { name, callAccepted, myVideo, userVideo, callEnded, stream, call } = useContext(SocketContext);
  return (
    <Box>
      <SimpleGrid>
        {stream && (
          <Box>
            <video playsInline muted ref={myVideo} autoPlay style={{width:"300px",height:"200px"}}/>
          </Box>
        )}
        {callAccepted && !callEnded && (
          <Box>
            <video playsInline ref={userVideo} autoPlay style={{width:"300px",height:"200px"}}/>
          </Box>
        )}
      </SimpleGrid>
    </Box>
  )
}

export default VideoPlayer