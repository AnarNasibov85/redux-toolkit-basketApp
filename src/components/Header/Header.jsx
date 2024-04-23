import { Box, Button, Stack, Text } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { ROUTER } from '../../constant/router';
const Header = () => {
  const navigate = useNavigate();

  return (
    <Box
      height='100px'
      p='12px'
      alignItems='center'
      display='flex'
      justifyContent='space-between'
      backgroundColor='#c90c90'
    >
      <Text
        as='h1'
        fontSize='4xl'
        color='white'
      >
     Online Shop
      </Text>

      <Stack
        direction='row'
        spacing={4}
        align='center'
        as='ul'
      >
        <Button
          variant='ghost'
          color='white'
          as='li'
          onClick={() => navigate(ROUTER.HOME)}
        >
          Home
        </Button>
        <Button
          variant='ghost'
          color='white'
          as='li'
          onClick={() => navigate(ROUTER.PRODUCTS)}
        >
         Products
        </Button>
        <Button
          variant='ghost'
          color='white'
          as='li'
          onClick={() => navigate(ROUTER.BASKET)}
        >
          Basket
        </Button>
      </Stack>
    </Box>
  );
};

export default Header;
