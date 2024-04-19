/**
 * @jest-environment jsdom
 */

import { render, screen } from "@testing-library/react";
import HomePage from "./HomePage";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";

describe("HomePage component", () => {
  it("should render the component", () => {
    render(
      <BrowserRouter>
        <HomePage />
      </BrowserRouter>
    );
    expect(document.title).toEqual("Головна сторінка");
    expect(screen.getByText(/Нормальні форми ДФС/i)).toBeInTheDocument();
  });

  it("should match snapshot", () => {
    const { container } = render(
      <BrowserRouter>
        <HomePage />
      </BrowserRouter>
    );
    expect(container).toMatchSnapshot();
  });
});
