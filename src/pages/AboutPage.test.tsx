import { render, screen } from "@testing-library/react";
import AboutPage from "./AboutPage";
import "@testing-library/jest-dom";

describe("AboutPage component", () => {
  it("hould render the component", () => {
    render(<AboutPage />);

    expect(document.title).toEqual("Про проект");
    expect(
      screen.getByRole("heading", { name: "Про проект" })
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        /Якщо у вас є побажання чи ви знайшли помилки додайте їх опис/i
      )
    ).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /сюди/i })).toHaveAttribute(
      "href",
      "https://github.com/tyzhnenko/beautify-tax-forms-app/issues"
    );
    expect(screen.getByText(/Пошта для звʼязку/i)).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /beautifytaxforms@j4f.app/i })
    ).toHaveAttribute("href", "mailto:beautifytaxforms@j4f.app");
  });

  it("should match snapshot", () => {
    const { container } = render(<AboutPage />);
    expect(container).toMatchSnapshot();
  });
});
