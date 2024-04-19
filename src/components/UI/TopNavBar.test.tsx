/**
 * @jest-environment jsdom
 */

import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import TopNavbar from "./TopNavBar";

describe("TopNavbar component", () => {
  it("should render the component", () => {
    render(
      <BrowserRouter>
        <TopNavbar />
      </BrowserRouter>
    );

    expect(screen.getByText(/Нормальні податкові форми/i)).toBeInTheDocument();
    expect(screen.getByText(/Доступні форми/i)).toBeInTheDocument();
    expect(screen.getByText(/Опис/i)).toBeInTheDocument();

    expect(
      screen.getByRole("link", { name: /Нормальні податкові форми/i })
    ).toHaveAttribute("href", "/");
    expect(
      screen.getByRole("link", { name: /Доступні форми/i })
    ).toHaveAttribute("href", "/forms");
    expect(screen.getByRole("link", { name: /Опис/i })).toHaveAttribute(
      "href",
      "/about"
    );
  });
});
