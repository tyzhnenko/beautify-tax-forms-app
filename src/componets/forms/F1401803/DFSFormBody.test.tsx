import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import DFSFormBody from "./DFSFormBody";
import * as _ from "lodash";

describe("DFSFormBody component", () => {
  it("should render the component", () => {
    render(<DFSFormBody />);

    expect(screen.getByText("№ з/п")).toBeInTheDocument();
    expect(screen.getByText("Результат обробки запиту")).toBeInTheDocument();
    expect(
      screen.getByText("Період, за який надається інформація")
    ).toBeInTheDocument();
    expect(
      screen.getByText("Джерела отримання інформації")
    ).toBeInTheDocument();
    expect(screen.getByText("Сума доходу")).toBeInTheDocument();
    expect(screen.getByText("Сума утриманного податку")).toBeInTheDocument();
    expect(
      screen.getByText("Код та назва ознаку доходу / код ознаки пільги")
    ).toBeInTheDocument();
    expect(screen.getByText("Дата прийому на роботу")).toBeInTheDocument();
    expect(screen.getByText("Дата звільненя з роботи")).toBeInTheDocument();
    expect(screen.getByText("Рік")).toBeInTheDocument();
    expect(
      screen.getByText(
        "Податковий номер/серія(за наявності) та номер паспорта податкового агента"
      )
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        "Найменування юридичної особи/ПІБ фізичної особи – підприємця"
      )
    ).toBeInTheDocument();
    expect(screen.getAllByText("нарахованого")).toHaveLength(2);
    expect(screen.getAllByText("виплаченого")).toHaveLength(2);
    for (const colNumber of _.range(1, 13 + 1)) {
      expect(screen.getByText(colNumber.toString())).toBeInTheDocument();
    }
  });

  it("should render the component with data", () => {
    const rows = [
      {
        rowNumber: "rowNumber-1",
        requestResult: "requestResult-1",
        quarterMonth: "quarterMonth-1",
        year: "year-1",
        agentNumber: "agentNumber-1",
        agentName: "agentName-1",
        incomeCounted: "incomeCounted-1",
        incomePaid: "incomePaid-1",
        taxCounted: "taxCounted-1",
        taxPaid: "taxPaid-1",
        taxCode: "taxCode-1",
        hiredDate: "hiredDate-1",
        firedDate: "firedDate-1",
      },
      {
        rowNumber: "rowNumber-2",
        requestResult: "requestResult-2",
        quarterMonth: "quarterMonth-2",
        year: "year-2",
        agentNumber: "agentNumber-2",
        agentName: "agentName-2",
        incomeCounted: "incomeCounted-2",
        incomePaid: "incomePaid-2",
        taxCounted: "taxCounted-2",
        taxPaid: "taxPaid-2",
        taxCode: "taxCode-2",
        hiredDate: "hiredDate-2",
        firedDate: "firedDate-2",
      },
    ];
    render(<DFSFormBody rows={rows} />);
    rows.forEach((row) => {
      expect(screen.getByText(row.rowNumber)).toBeInTheDocument();
      expect(screen.getByText(row.requestResult)).toBeInTheDocument();
      expect(screen.getByText(row.quarterMonth)).toBeInTheDocument();
      expect(screen.getByText(row.year)).toBeInTheDocument();
      expect(screen.getByText(row.agentNumber)).toBeInTheDocument();
      expect(screen.getByText(row.agentName)).toBeInTheDocument();
      expect(screen.getByText(row.incomeCounted)).toBeInTheDocument();
      expect(screen.getByText(row.incomePaid)).toBeInTheDocument();
      expect(screen.getByText(row.taxCounted)).toBeInTheDocument();
      expect(screen.getByText(row.taxPaid)).toBeInTheDocument();
      expect(screen.getByText(row.taxCode)).toBeInTheDocument();
      expect(screen.getByText(row.hiredDate)).toBeInTheDocument();
      expect(screen.getByText(row.firedDate)).toBeInTheDocument();
    });
  });

  it("shoud match snapshot", () => {
    const rows = [
      {
        rowNumber: "rowNumber-1",
        requestResult: "requestResult-1",
        quarterMonth: "quarterMonth-1",
        year: "year-1",
        agentNumber: "agentNumber-1",
        agentName: "agentName-1",
        incomeCounted: "incomeCounted-1",
        incomePaid: "incomePaid-1",
        taxCounted: "taxCounted-1",
        taxPaid: "taxPaid-1",
        taxCode: "taxCode-1",
        hiredDate: "hiredDate-1",
        firedDate: "firedDate-1",
      },
      {
        rowNumber: "rowNumber-2",
        requestResult: "requestResult-2",
        quarterMonth: "quarterMonth-2",
        year: "year-2",
        agentNumber: "agentNumber-2",
        agentName: "agentName-2",
        incomeCounted: "incomeCounted-2",
        incomePaid: "incomePaid-2",
        taxCounted: "taxCounted-2",
        taxPaid: "taxPaid-2",
        taxCode: "taxCode-2",
        hiredDate: "hiredDate-2",
        firedDate: "firedDate-2",
      },
    ];
    const { asFragment } = render(<DFSFormBody rows={rows} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
