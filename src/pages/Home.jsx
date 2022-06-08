import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCategoryId } from '../redux/slices/filterSlice';

import Categories from '../components/Categories';
import Sort from '../components/Sort';
import PizzaBlock from '../components/PizzaBlock/PizzaBlock';
import Skeleton from '../components/PizzaBlock/Skeleton';
import Pagination from '../components/Pagination';

const Home = ({ categoriesList, searchValue }) => {
  const categoryId = useSelector((state) => state.filter.categoryId);
  const sort = useSelector((state) => state.filter.sort);
  const dispatch = useDispatch();

  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setIsLoading(true);
    const category = categoryId > 0 ? `&category=${categoryId}` : '';
    const search = searchValue ? `&search=${searchValue}` : '';
    fetch(
      `https://6293dd43089f87a57ac6edcf.mockapi.io/item?page=${currentPage}&limit=4${category}&sortBy=${sort.sortProperty}&order=asc${search}`,
    )
      .then((res) => res.json())
      .then((arr) => {
        setItems(arr);
        setIsLoading(false);
      });
    window.scrollTo(0, 0);
  }, [categoryId, sort, searchValue, currentPage]);

  return (
    <div className='container'>
      <div className='content__top'>
        <Categories
          value={categoryId}
          pizzaList={categoriesList}
          onChangeCategory={(id) => dispatch(setCategoryId(id))}
        />
        <Sort />
      </div>
      <h2 className='content__title'>Все пиццы</h2>
      <div className='content__items'>
        {isLoading
          ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
          : items.map((obj) => (
              <PizzaBlock
                key={obj.id}
                title={obj.title}
                price={obj.price}
                imageUrl={obj.imageUrl}
                size={obj.sizes}
                type={obj.types}
              />
            ))}
      </div>
      <Pagination onChangePage={(number) => setCurrentPage(number)} />
    </div>
  );
};
export default Home;
