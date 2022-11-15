import { Box, Button, Input, SimpleGrid, Text } from '@chakra-ui/react';
import React, { useContext, useState } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { SocketContext } from '../SocketContext';

const Options = ({ children }) => {
  const { me, callAccepted, name, setName, callEnded, leaveCall, callUser } = useContext(SocketContext);
  const [idToCall, setIdToCall] = useState('');
  return (
    <Box>
      <form noValidate autoComplete="off">
        <SimpleGrid>
          <SimpleGrid>
            <Text>Account Info</Text>
            <Input label="Name" value={name} onChange={(e) => setName(e.target.value)} />
            <CopyToClipboard text={me}>
              <Button variant="solid" colorScheme="teal">
                Copy Your ID
              </Button>
            </CopyToClipboard>
          </SimpleGrid>
          <SimpleGrid >
            <Text>Make a call</Text>
            <Input label="ID to call" value={idToCall} onChange={(e) => setIdToCall(e.target.value)} />
            {callAccepted && !callEnded ? (
              <Button  colorScheme="red" onClick={leaveCall} >
                Hang Up
              </Button>
            ) : (
              <Button colorScheme="blue" onClick={() => callUser(idToCall)} >
                Call
              </Button>
            )}
          </SimpleGrid>
        </SimpleGrid>
      </form>
      {children}
    </Box>
  )
}

export default Options