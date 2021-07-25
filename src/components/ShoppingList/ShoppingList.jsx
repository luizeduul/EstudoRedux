import React from 'react';
import { useSelector } from 'react-redux';
import { selectAllProducts } from '../../redux/Products/Products.selector';
import { Wrapper, Title, Array } from './ShoppingList.styles';
import Checkbox from '../../shared/Checkbox';

function ShoppingList({ title, products, onToggle }) {
  const productsFromRedux = useSelector(selectAllProducts);
  return <Wrapper>
    <Title>
      {title}:
    </Title>
    <Array>
      {
        products.map(product =>
          <Checkbox
            key={product.id}
            value={product.checked}
            title={product.name}
            onClick={() => onToggle(product.id, product.checked, product.name)}
          />
        )
      }
    </Array>
  </Wrapper>
}

export default ShoppingList
