// components/ProductGrid.jsx

import React from 'react';

// Sample data for demonstration
const products = [
  {
    id: 1,
    name: 'Layer Feed High Protein',
    description: 'Behtareen Andon ki Paidawar ke liye. Complete and balanced nutrition.',
    href: '#',
    imageUrl: '', // Placeholder for your actual image URL
    price: 'Ask for Price',
  },
  {
    id: 2,
    name: 'Broiler Starter Feeds',
    description: 'Tez Growth aur behtar FCR ke liye. Pehle kuch hafton ke liye zaroori.',
    href: '#',
    imageUrl: '', // Placeholder for your actual image URL
    price: 'Ask for Price',
  },
  {
    id: 3,
    name: 'Cattle Feed Pellets',
    description: 'Doodh ki miqdar aur janwar ki sehat barhane ke liye high-energy pellets.',
    href: '#',
    imageUrl: '

[Image of Cattle Feed Pellets]
', // Placeholder for your actual image URL
    price: 'Ask for Price',
  },
  // Aap yahan aur products add kar sakte hain...
];

const ProductGrid = () => {
  return (
    <div className="bg-white py-12 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Hamari High-Quality Feeds Products
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Har qism ke janwar ki zaroorat ke mutabiq tayyar ki gayi behtareen ghiza.
          </p>
        </div>

        {/* Product Grid Layout */}
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {products.map((product) => (
            <article key={product.id} className="flex flex-col items-start justify-between border border-gray-100 rounded-lg shadow-xl hover:shadow-2xl transition duration-300 transform hover:-translate-y-1">
              
              <div className="relative w-full">
                {/* Product Image Placeholder */}
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-t-lg bg-gray-200">
                    {/* Real Image Tag will be <img src={product.imageUrl} alt={product.name} className="h-full w-full object-cover object-center" /> */}
                    <div className="flex h-48 items-center justify-center text-gray-500 font-semibold text-sm">
                      {product.name} Image Placeholder
                    </div>
                </div>
              </div>

              <div className="p-6 w-full">
                <div className="group relative">
                  <h3 className="mt-3 text-xl font-semibold leading-6 text-gray-900 group-hover:text-yellow-600 transition duration-300">
                    <a href={product.href}>
                      <span className="absolute inset-0" />
                      {product.name}
                    </a>
                  </h3>
                  <p className="mt-3 line-clamp-3 text-sm leading-6 text-gray-600">
                    {product.description}
                  </p>
                </div>
                <div className="mt-4 flex items-center justify-between border-t border-gray-100 pt-4">
                    <p className="text-lg font-bold text-gray-900">
                        {product.price}
                    </p>
                    <a href={product.href} className="text-sm font-semibold text-yellow-600 hover:text-yellow-700">
                        Details Dekhein →
                    </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductGrid;
