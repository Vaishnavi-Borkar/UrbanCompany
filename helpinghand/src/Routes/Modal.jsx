import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    RadioGroup,
    Radio,
    Stack,
    Button,

} from '@chakra-ui/react';
import React from "react";
import { useDisclosure } from '@chakra-ui/react';
function Modal() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [placement, setPlacement] = React.useState('right')

    return (
        <>
            {/* <RadioGroup defaultValue={placement} onChange={setPlacement}>
                <Stack direction='coloum' mb='4'>

                    <Radio value='right'>Right</Radio>

                </Stack>
            </RadioGroup> */}
            <Button colorScheme='blue' onClick={onOpen}>
                open
            </Button>
            <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerHeader borderBottomWidth='1px'>Basic Drawer</DrawerHeader>
                    <DrawerBody>
                        <p>Some contents...</p>
                        <p>Some contents...</p>
                        <p>Some contents...</p>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    )
}
export default Modal;