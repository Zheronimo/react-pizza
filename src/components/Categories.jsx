import React from 'react';

function Categories({ value, pizzaList, onChangeCategory }) {
  const itemList = pizzaList.map((categoryName, index) => (
    <li
      key={index}
      className={value === index ? 'active' : null}
      onClick={() => {
        onChangeCategory(index);
      }}>
      {categoryName}
    </li>
  ));

  return (
    <div className='categories'>
      <ul>{itemList}</ul>
    </div>
  );
}
export default Categories;
