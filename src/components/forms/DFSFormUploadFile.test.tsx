/**
 * @jest-environment jsdom
 */

import "@testing-library/jest-dom";
import {
  render,
  screen,
  fireEvent,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import DFSFormUploadFile from "./DFSFormUploadFile";

describe("DFSFormUploadFile component", () => {
  it("should render the component", () => {
    render(<DFSFormUploadFile />);

    expect(screen.getByText(/Оберить файл/i)).toBeInTheDocument();
  });

  it("dialog should be opened and closed", async () => {
    render(<DFSFormUploadFile />);
    fireEvent.click(screen.getByRole("button", { name: /Оберить файл/i }));

    await screen.findByText(/Вибір файлу/i);

    expect(screen.getByText(/Вибір файлу/i)).toBeInTheDocument();
    expect(screen.getByText(/Відмінити/i)).toBeInTheDocument();
    expect(screen.getByText(/Обробити/i)).toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: /Відмінити/i }));

    await waitForElementToBeRemoved(() => screen.queryByText(/Вибір файлу/i));

    expect(screen.queryByText(/Вибір файлу/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/Відмінити/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/Обробити/i)).not.toBeInTheDocument();
  });
});
