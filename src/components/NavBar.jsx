import CartWidget from "./CartWidget"
import { Box, Flex, Spacer, Heading, Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider, } from '@chakra-ui/react'
import { Container } from "@chakra-ui/react"

const NavBar = () => {
    
  return (
    <>
    <Container maxW='100%' bg='#2F4F4F' color='#262626'> 
   
      <Flex >
        <Box p='2'>
          <Heading size='md'>Go Dev solutions</Heading>
        </Box>
        <Spacer />
        <Box gap='4' bg='#2F4F4F'  color='white'  borderRadius='md'>
            <Box w={[75, 90, 110]} margin={1} p='4' bg='red.400' as='button' color='white' fontWeight='bold' borderRadius='md' bgGradient='linear(to-r, teal.500, green.500)' _hover={{ bgGradient: 'linear(to-r, red.500, yellow.500)', }}>
            Inicio</Box>
            <Box w={[105, 110, 120]} margin={1} p='4' bg='red.400' as='button' color='white' fontWeight='bold' borderRadius='md' bgGradient='linear(to-r, teal.500, green.500)' _hover={{ bgGradient: 'linear(to-r, red.500, yellow.500)', }}>
            Contacto</Box>  
            <Box w={[110, 115, 120]} margin={1} p='4' bg='red.400' as='button' color='white' fontWeight='bold' borderRadius='md' bgGradient='linear(to-r, teal.500, green.500)' _hover={{ bgGradient: 'linear(to-r, red.500, yellow.500)', }}>
            Sobre Nosotros</Box>  
            <Box w={[105, 110, 120]} margin={1} p='4' bg='red.400' as='button' color='white' fontWeight='bold' borderRadius='md' bgGradient='linear(to-r, teal.500, green.500)' _hover={{ bgGradient: 'linear(to-r, red.500, yellow.500)', }}>
            Servicio</Box>          
          </Box>
        <Spacer />
            <Box p='4'>
                <CartWidget/>
            </Box>
        </Flex>
          
     </Container>
    </>
    
  )
}

export default NavBar