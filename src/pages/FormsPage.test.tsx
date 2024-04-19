/**
 * @jest-environment jsdom
 */

import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import FormsPage from "./FormsPage";
import { availableForms } from "../components/forms";

describe("AppRouter component", () => {
  it("should render the component", () => {
    render(
      <BrowserRouter>
        <FormsPage />
      </BrowserRouter>
    );
    expect(document.title).toEqual("Доступні форми");
    availableForms.forEach((form) => {
      expect(screen.getByText(form.name)).toBeInTheDocument();
      expect(screen.getByText(form.description)).toBeInTheDocument();
      expect(screen.getByRole("link", { name: form.name })).toHaveAttribute(
        "href",
        `/forms/${form.name}`
      );
    });
  });

  it("should match snapshot", () => {
    const { container } = render(
      <BrowserRouter>
        <FormsPage />
      </BrowserRouter>
    );
    expect(container).toMatchSnapshot();
  });
});
