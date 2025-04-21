import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

const categoryNames = {
  all: 'Вся коллекция',
  tshirts: 'Футболки',
  hoodies: 'Толстовки',
  jeans: 'Джинсы',
  jackets: 'Куртки',
};

const filters = [
  { label: 'Вся коллекция', path: '/shop' },
  { label: 'Футболки', path: '/shop/tshirts' },
  { label: 'Толстовки', path: '/shop/hoodies' },
  { label: 'Джинсы', path: '/shop/jeans' },
  { label: 'Куртки', path: '/shop/jackets' },
];

const Shop = () => {
  const { category } = useParams();
  const [items, setItems] = useState([]);
  const current = category || 'all';

  useEffect(() => {
    axios.get('http://localhost:5001/products')
      .then((res) => {
        const allProducts = res.data;
        if (current === 'all') {
          setItems(allProducts);
        } else {
          setItems(allProducts.filter(p => p.category === current));
        }
      })
      .catch(err => console.error('Ошибка при загрузке данных:', err));
  }, [current]);

  return (
    <div className="bg-white text-black min-h-screen font-manrope">
      {/* Разделы */}
      <div className="mt-32 mb-10 px-4">
        {/* Десктоп: две строки */}
        <div className="hidden sm:flex flex-wrap justify-center gap-4 mb-4">
          {filters.slice(0, 3).map(({ label, path }, i) => (
            <Link key={i} to={path}>
              <button className="border border-black px-5 py-2 rounded-full hover:bg-black hover:text-white transition-all">
                {label}
              </button>
            </Link>
          ))}
        </div>
        <div className="hidden sm:flex flex-wrap justify-center gap-4">
          {filters.slice(3).map(({ label, path }, i) => (
            <Link key={i} to={path}>
              <button className="border border-black px-5 py-2 rounded-full hover:bg-black hover:text-white transition-all">
                {label}
              </button>
            </Link>
          ))}
        </div>

        {/* Мобильная версия: скролл по горизонтали */}
        <div className="sm:hidden overflow-x-auto flex gap-3 pb-2 scrollbar-hide">
          {filters.map(({ label, path }, i) => (
            <Link key={i} to={path} className="flex-shrink-0">
              <button className="border border-black px-4 py-2 rounded-full whitespace-nowrap hover:bg-black hover:text-white transition-all">
                {label}
              </button>
            </Link>
          ))}
        </div>
      </div>

      {/* Заголовок категории */}
      <div className="text-center text-2xl font-bold uppercase mb-10">{categoryNames[current]}</div>

      {/* Сетка товаров */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 px-4 pb-20 max-w-[1400px] mx-auto">
        {items.map((item, i) => (
          <Link key={i} to={`/product/${item.id}`} className="relative w-full block">
            <img src={item.image_url} alt={item.title} />
            <div className="absolute bottom-4 left-4 right-4 flex justify-between text-sm">
              <p className="font-normal">{item.title}</p>
              <p className="font-semibold">₽{item.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Shop;
