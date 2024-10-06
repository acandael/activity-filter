import React from 'react';
import { CategoryFilter as CategoryFilterType } from '../types';
import { Button } from "@/components/ui/button"

interface CategoryFilterProps {
  categories: string[];
  selectedCategory: CategoryFilterType;
  onSelectCategory: (category: CategoryFilterType) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({
  categories,
  selectedCategory,
  onSelectCategory,
}) => {
  return (
    <div className="flex flex-wrap gap-2 mb-4">
      {categories.map((category) => (
        <Button
          key={category}
          variant={selectedCategory === category ? "default" : "outline"}
          onClick={() => onSelectCategory(category)}
        >
          {category}
        </Button>
      ))}
    </div>
  );
};

export default CategoryFilter;