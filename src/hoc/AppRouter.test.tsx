/**
 * @jest-environment jsdom
 */
import { enableFetchMocks } from "jest-fetch-mock";
enableFetchMocks();

import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import AppRouter from "./AppRouter";

describe("AppRouter component", () => {
  it("should render the component", () => {
    render(<AppRouter />);

    expect(screen.getByText(/Нормальні податкові форми/i)).toBeInTheDocument();
    expect(screen.getByText(/Доступні форми/i)).toBeInTheDocument();
    expect(screen.getByText(/Опис/i)).toBeInTheDocument();
  });

  it("topnav links work well", async () => {
    render(<AppRouter />);

    const rootLink = screen.getByRole("link", {
      name: "Нормальні податкові форми",
    });
    const availableFormsLink = screen.getByRole("link", {
      name: "Доступні форми",
    });
    const aboutLink = screen.getByRole("link", { name: "Опис" });
    expect(rootLink).toHaveAttribute("href", "/");
    expect(availableFormsLink).toHaveAttribute("href", "/forms");
    expect(aboutLink).toHaveAttribute("href", "/about");

    fireEvent.click(availableFormsLink);

    await screen.findByRole("heading", { level: 1, name: "Доступні форми" });
    expect(
      screen.getByRole("heading", { name: "Доступні форми" })
    ).toBeInTheDocument();

    fireEvent.click(aboutLink);
    await screen.findByRole("heading", { name: "Про проект" });
    expect(
      screen.getByRole("heading", { name: "Про проект" })
    ).toBeInTheDocument();

    fireEvent.click(rootLink);
    await screen.findByRole("heading", { name: "Нормальні форми ДФС" });
    expect(
      screen.getByRole("heading", { name: "Нормальні форми ДФС" })
    ).toBeInTheDocument();
  });
});
