import { Box, Button } from '@chakra-ui/react';
import React, { useContext } from 'react'

import { SocketContext } from '../SocketContext'
const Notifications = () => {
    const { answerCall, call, callAccepted } = useContext(SocketContext);

    return (
        <Box>
            {call.isReceivingCall && !callAccepted && (
                <Box style={{ display: 'flex', justifyContent: 'space-around' }}>
                    <h1>{call.name} is calling:</h1>
                    <Button colorScheme="green" onClick={answerCall}>
                        Answer
                    </Button>
                </Box>
            )}
        </Box>
    )
}

export default Notifications