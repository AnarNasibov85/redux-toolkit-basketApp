import { Box, Button, Stack, Text } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { ROUTER } from '../../constant/router';
import { useSelector } from 'react-redux';

const Header = () => {
  const navigate = useNavigate();
  const { carts } = useSelector(state => state.basket);

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
          _hover={{ color: 'black', bg: 'teal' }} 
          as='li'
          onClick={() => navigate(ROUTER.HOME)}
        >
          Home
        </Button>
        <Button
          variant='ghost'
          color='white'
          _hover={{ color: 'black', bg: 'teal' }} 
          as='li'
          onClick={() => navigate(ROUTER.PRODUCTS)}
        >
          Products
        </Button>
        <Button
          variant='ghost'
          color='white'
          _hover={{ color: 'black', bg: 'teal' }} 
          as='li'
          onClick={() => navigate(ROUTER.BASKET)}
        >
          Cart {carts.length > 0 && `(${carts.length})`}
        </Button>
      </Stack>
    </Box>
  );
};

export default Header;
