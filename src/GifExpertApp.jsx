import React from "react";
import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { Gifgrid } from "./components/Gifgrid";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["Stranger things"]);

  const handleAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      <h1>GiftApp</h1>
      <AddCategory onNewCategory={(value) => handleAddCategory(value)} />

      {categories.map((category) => (
        <Gifgrid key={category} category={category} />
        //   <div key={category}>
        //     <h3>{category}</h3>
        //     <li>{category}</li>
        //   </div>
      ))}
    </>
  );
};
