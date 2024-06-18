'use client';

import { Product } from 'lib/shopify/types';
import { useState } from 'react';
import ProductCard from './product/product-card';

interface ProductViewProps {
  productList: Product[];
}

export default function ProductView({ productList }: ProductViewProps) {
  const filterVals = {
    ALL: 'all',
    CANS: 'cans',
    BAGS: 'bags'
  };
  const [filter, setFilter] = useState(filterVals.ALL);

  const handleFilterClick = (val: string) => {
    setFilter(val);
  };

  return (
    <div className="flex w-full flex-col gap-fluid-16 px-fluid-16">
      <FilterButtons
        filter={filter}
        filterVals={filterVals}
        handleFilterClick={handleFilterClick}
      />
      <div className="grid w-full grid-cols-1 gap-fluid-48 md:grid-cols-2 lg:grid-cols-3">
        {productList.map((p) => {
          return <ProductCard key={p.id} product={p} />;
        })}
      </div>
    </div>
  );
}

const FilterButtons = ({ filter, filterVals, handleFilterClick }: any) => {
  return (
    <div className="flex justify-between gap-fluid-16 text-fluid-xl font-semibold text-opacity-30 md:justify-start">
      {Object.entries(filterVals).map(([key, val]) => {
        const isSelected = filter === val;
        return (
          <div
            onClick={() => handleFilterClick(val)}
            key={key}
            className={isSelected ? '' : 'opacity-30'}
          >
            {val.toUpperCase()}
          </div>
        );
      })}
    </div>
  );
};
