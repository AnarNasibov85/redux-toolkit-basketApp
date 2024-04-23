import { useDispatch, useSelector } from 'react-redux';
import { Box, Text,Button,Image } from '@chakra-ui/react';
import { incrementQuantity,decrementQuantity,removeFromBasket,addToBasket } from '../../redux/global/basketSlice';

const Basket = () => {

const dispathc=useDispatch()
  const { carts } = useSelector(state => state.user);
//   const { carts } = useSelector(state => state.basket.carts);
  const handleIncrement = (itemId) => {
    dispathc(incrementQuantity({ id: itemId }));
  };

  const handleDecrement = (itemId) => {
    dispathc(decrementQuantity({ id: itemId }));
  };

  const handleRemove = (itemId) => {
    dispathc(removeFromBasket({ id: itemId }));
  };


//   const totalItems = carts.length; 
return (
    <Box bg='white'>
      <Text display='flex' justifyContent='center' alignItems='center' fontSize='6xl' textColor='#c90c90'>
       Cart
      </Text>
      <Box display='flex' flexDirection='column' marginTop='20px'>
        {carts.length === 0 ? (
          <Text>Your cart is empty</Text>
        ) : (
          <>
            {carts.map(item => (
              <Box key={item.id} display='flex' justifyContent='space-between' alignItems='center' p='10px'>
              
                 <Image src={item.imageUrl} alt={item.name} boxSize='50px' />
                <Text>{item.name}</Text>
                
                <Button colorScheme='red' onClick={() => handleDecrement(item.id)}>-</Button>
                
                <Text>{item.quantity}</Text>
                <Button colorScheme='green' onClick={() => handleIncrement(item.id)}>+</Button>
                <Text>${item.price}</Text>
                <Button colorScheme='red' onClick={() => handleRemove(item.id)}>Remove</Button>
                </Box>
              
            ))}
          </>
        )}
      </Box>
    </Box>
  );
}

export default Basket;
