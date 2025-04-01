/**
 * @jest-environment jsdom
 */

import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import DFSForm from "./DFSForm";
import fs from "fs";
import { TextEncoder, TextDecoder } from "util";

(global as any).TextEncoder = TextEncoder;
(global as any).TextDecoder = TextDecoder;

describe("DFSFormBody component", () => {
  function getMockXML() {
    const mockData = fs.readFileSync(
      "src/components/forms/F1419103/__testdata__/F1419103_mock_data.xml"
    );
    return new File([mockData], "test.xml", { type: "text/xml" });
  }

  it("should render the component", () => {
    render(<DFSForm />);

    expect(document.title).toEqual("Форма F1419103");
    expect(
      screen.getByText("Фізична особа - платник податків")
    ).toBeInTheDocument();
    expect(screen.getByText("№ з/п")).toBeInTheDocument();
  });

  it("should load the correct file", async () => {
    render(<DFSForm />);

    const mockFile = getMockXML();

    fireEvent.click(screen.getByRole("button", { name: /Оберить файл/i }));
    await screen.findByText(/Вибір файлу/i);

    const fileSelector = screen.getByTestId("file-selector");
    const uploader = screen.getByRole("button", { name: /Обробити/i });
    fireEvent.change(fileSelector, {
      target: { files: [mockFile] },
    });
    fireEvent.click(uploader);
    await screen.findByText(/user@example.com/i);

    const expectedTaxValues = [
      "10.1",
      "11.1",
      "12.1",
      "13.1",
      "14.1",
      "15.1",
      "16.1",
      "17.1",
      "18.1",
      "19.1",
      "20.1",
      "21.1",
    ];
    expectedTaxValues.forEach((value) => {
      expect(screen.getAllByText(value)).toHaveLength(2);
    });

    const expectedIncomeValues = [
      "100.00",
      "200.20",
      "300.30",
      "400.40",
      "500.50",
      "600.60",
      "700.70",
      "800.80",
      "900.90",
      "1000.00",
      "1100.10",
      "1200.20",
    ];
    expectedIncomeValues.forEach((value) => {
      expect(screen.getAllByText(value)).toHaveLength(2);
    });
  });

  it("should show an error if the file is not XML", async () => {
    render(<DFSForm />);

    const mockFile = new File(["test"], "test.txt", { type: "text/plain" });

    fireEvent.click(screen.getByRole("button", { name: /Оберить файл/i }));
    await screen.findByText(/Вибір файлу/i);

    const fileSelector = screen.getByTestId("file-selector");
    const uploader = screen.getByRole("button", { name: /Обробити/i });
    fireEvent.change(fileSelector, {
      target: { files: [mockFile] },
    });
    fireEvent.click(uploader);
    await screen.findByText("Не вірний тип форми");
  });

  it("should match the snapshot with no data", () => {
    const { container } = render(<DFSForm />);
    expect(container).toMatchSnapshot();
  });

  it("should match the snapshot with data", async () => {
    const { container } = render(<DFSForm />);
    const mockFile = getMockXML();

    fireEvent.click(screen.getByRole("button", { name: /Оберить файл/i }));
    await screen.findByText(/Вибір файлу/i);

    const fileSelector = screen.getByTestId("file-selector");
    const uploader = screen.getByRole("button", { name: /Обробити/i });
    fireEvent.change(fileSelector, {
      target: { files: [mockFile] },
    });
    fireEvent.click(uploader);
    await screen.findByText(/user@example.com/i);

    expect(container).toMatchSnapshot();
  });
});
