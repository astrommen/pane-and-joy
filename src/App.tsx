import { useState } from 'react';
import { useQuery } from 'react-query';
// Components
import Item from './components/Item/Item';
import Drawer from '@material-ui/core/Drawer';
import LinearProgress from '@material-ui/core/LinearProgress';
import Grid from '@material-ui/core/Grid';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import Badge from '@material-ui/core/Badge';
// Styles
//scaffolding for now
import { Wrapper } from './App.styles';
// Types
export type CartItemType = {
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  title: string;
  amount: number;
}

const getProducts = async (): Promise<CartItemType[]> =>
  // first await for json conversion, second await for API
  await(await fetch('https://fakestoreapi.com/products')).json();

const App = ()=> {
  const { data, isLoading, error } = useQuery<CartItemType[]>(
    'products', 
    getProducts
  );
  console.log(data);

  const getTotalItems = () => null; //scaffolding

  const handleAddToCart = (clickedItem: CartItemType) => null; //scaffolding

  const handleRemoveFromCart = () => null; //scaffolding

  if (isLoading) return <LinearProgress />;
  if (error) return <div>Something went wrong...</div>;
 


  return (
    <Wrapper>
      <Grid container spacing={3}>
        {/* '?' will return undefined if cant find data */}
        {data?.map(item => (
          <Grid item key={item.id} xs={12} sm={4}>
            <Item item={item} handleAddToCart={handleAddToCart}></Item>
          </Grid>
        ))}
      </Grid>
    </Wrapper>
  );
}

export default App;
