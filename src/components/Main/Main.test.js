import React from "react";
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Main from "./Main";

describe("Main", () => {
  test("matches snapshot", () => {
    render(<BrowserRouter>
      <Main />
    </BrowserRouter>);
    expect(screen).toMatchSnapshot();
  });
});
