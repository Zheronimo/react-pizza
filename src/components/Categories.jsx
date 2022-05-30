import React, { useState } from 'react';

function Categories({ pizzaList }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const itemList = pizzaList.map((item, index) => (
    <li
      key={index}
      className={activeIndex === index ? 'active' : null}
      onClick={() => {
        setActiveIndex(index);
      }}>
      {item}
    </li>
  ));

  return (
    <div className='categories'>
      <ul>{itemList}</ul>
    </div>
  );
}
export default Categories;
