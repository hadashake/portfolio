import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const sizes = ['XS', 'S', 'M', 'L', 'XL'];

  useEffect(() => {
    axios.get(`http://localhost:5001/products/${id}`)
      .then(res => setProduct(res.data))
      .catch(err => console.error('Ошибка при загрузке товара:', err));
  }, [id]);

  if (!product) return <div className="p-10">Загрузка...</div>;

  return (
    <div className="bg-white text-black min-h-screen font-manrope">
      {/* Блок с фоновой картинкой и контентом */}
      <div className="relative w-full h-screen">
        <img
          src={product.horizontal_image_url}
          alt={product.title}
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="relative z-10 flex flex-col justify-end h-full max-w-[1400px] mx-auto px-6 pb-20">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end w-full">
            {/* Левая часть — текст */}
            <div className="mb-6 sm:mb-0">
              <h1 className="text-[40px] font-bold mb-2 uppercase">{product.title}</h1>
              <p className="text-xl font-medium">₽{product.price}</p>
            </div>

            {/* Правая часть — размеры и кнопка */}
            <div className="flex flex-col sm:items-end gap-4">
              <div className="flex items-center gap-4">
                {sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() =>
                      setSelectedSize((prev) => (prev === size ? null : size))
                    }
                    className={`text-sm pb-1 transition-all ${
                      selectedSize === size
                        ? 'border-b border-black'
                        : 'border-b border-transparent hover:border-black'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>

              <button className="bg-blue-900 text-white px-8 py-3 text-sm hover:bg-blue-700 transition-all">
                ДОБАВИТЬ В КОРЗИНУ
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Описание и таблица */}
      <div className="max-w-[1400px] mx-auto px-6 py-20">
        <h2 className="text-[28px] font-bold mb-6">/ ОПИСАНИЕ</h2>
        <p className="text-base max-w-[900px] mb-12 leading-relaxed">
          {product.description}
        </p>

        <div className="w-full border-t text-sm text-black/90">
          {product.specs?.map(([label, value], i) => (
            <div
              key={i}
              className="flex justify-between py-3 border-b border-gray-300"
            >
              <span className="font-semibold">{label}</span>
              <span>{value}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Блок рекомендаций — горизонтальный скролл */}
      <div className="max-w-[1400px] mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-10">/ ВАМ ТАКЖЕ МОЖЕТ ПОНРАВИТЬСЯ</h2>
        
        <div className="overflow-x-auto">
          <div className="flex gap-4 w-max">
            {[1, 2, 3, 4, 5].map((num) => (
              <div key={num} className="w-[250px] flex-shrink-0">
                <img
                  src={`/products/hoodie${num}.jpg`}
                  alt={`Product ${num}`}
                  className="w-full object-cover mb-4"
                />
                <p className="font-medium uppercase">RUWEAR HOODIE</p>
                <p className="text-sm">₽3200</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
