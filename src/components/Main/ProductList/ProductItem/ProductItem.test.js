import React from "react";
import { render, screen } from '@testing-library/react';
import ProductItem from "./ProductItem";

describe("ProductItem", () => {

  const product = {
    name: "Vodka con lima",
    info: "Vodka con limas tropicales",
    price: 10,
    image: "https://img2.freepng.es/20180213/fdq/kisspng-vodka-tonic-cocktail-gin-and-tonic-screwdriver-transparent-mint-lemon-coke-5a828af40ceab3.3125557515185046920529.jpg"
  };
  test("matches snapshot", () => {
    render(<ProductItem data={product} />);
    expect(screen).toMatchSnapshot();
  });
});
