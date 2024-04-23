import { useDispatch, useSelector } from 'react-redux';
import { Box, Text,Button,Image } from '@chakra-ui/react';
import { incrementQuantity,decrementQuantity,removeFromBasket } from '../../redux/global/basketSlice';

const Basket = () => {

const dispatch=useDispatch()
const { carts } = useSelector(state => state.basket);


  const handleIncrement = (itemId) => {
    dispatch(incrementQuantity({ id: itemId }));
  };

  const handleDecrement = (itemId) => {
    dispatch(decrementQuantity({ id: itemId }));
  };

  const handleRemove = (itemId) => {
    dispatch(removeFromBasket({ id: itemId }));
  };
 

 
return (
    <Box bg='white'>
      <Text display='flex' justifyContent='center' alignItems='center' fontSize='6xl' textColor='#c90c90'>
       Cart
      </Text>
      <Box display='flex' flexDirection='column' marginTop='20px'>
        {carts.length === 0 ? (
          <Text display='flex' alignItems='center'justifyContent='center' fontSize='3xl'>Your cart is empty</Text>
        ) : (
          <>
            {carts?.map(item => (
              <Box key={item.id} display='flex' justifyContent='space-between' alignItems='center' p='10px'>
              
              <Image src={item.imageUrl} alt={item.name} boxSize='80px' objectFit='cover' />

                <Text>{item.name}</Text>
                
                <Button colorScheme='red' onClick={() => handleDecrement(item.id)}>-</Button>
                
                <Text>{item.quantity}</Text>
                <Button colorScheme='green' onClick={() => handleIncrement(item.id)}>+</Button>
                <Text>${item.totalPrice}</Text>
                <Button colorScheme='red' onClick={() => handleRemove(item.id)}>X</Button>
                </Box>
              
            ))}
          </>
        )}
      </Box>
    </Box>
  );
}

export default Basket;
