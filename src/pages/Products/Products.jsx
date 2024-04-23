import { Box, Card, CardBody,useToast, Image, Stack, Heading, Text, Divider, CardFooter, ButtonGroup, Button } from '@chakra-ui/react';

import products from '../../api';
import { useDispatch } from 'react-redux';
import { addToBasket } from '../../redux/global/basketSlice';

const Products = () => {
  const dispatch = useDispatch();
  const toast=useToast()
const handelAddToCart=(item)=>{
    dispatch(addToBasket({...item,quantity:1}))
    toast({
        title: "Success",
        description: "Product added to cart!",
        status: "success",
        duration: 3000,
        isClosable: true,
    })
}
  return (
    <>
      <Box bg='black'>
        <Text display='flex' justifyContent='center' alignItems='center' fontSize='6xl' textColor='#c90c90'>
          Fruits and Vegetables
        </Text>
        <Box display='flex' flexDirection='column' marginTop='20px'>
          <Box display='flex' flexWrap='wrap' justifyContent='center' marginTop='40px'>
            {products?.map(item => (
              <Card key={item.id} maxW='sm' flex='auto' m='20px' background='#e2e2e2'>
                <CardBody color='black'>
                  <Image
                    src={item.imageUrl}
                    alt={item.name}
                    borderRadius='lg'
                  />
                  <Stack mt='6' spacing='3'>
                    <Heading size='md'>{item.name}</Heading>
                    <Text color='blue.600' fontSize='4xl'>
                      ${item.price}
                    </Text>
                  </Stack>
                </CardBody>
                <Divider />
                <CardFooter>
                  <ButtonGroup spacing='2'>
                  <Button colorScheme='green' onClick={() => handelAddToCart(item)}>
                      Add to cart
                    </Button>
                  </ButtonGroup>
                </CardFooter>
              </Card>
            ))}
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Products;
