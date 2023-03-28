import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import DFSFormHeader from "./DFSFormHeader";

describe("DFSFormHeader component", () => {
  it("should render the component", () => {
    render(<DFSFormHeader />);

    expect(
      screen.getByText("Фізична особа - платник податків")
    ).toBeInTheDocument();
    expect(screen.getByText("Ім'я")).toBeInTheDocument();
    expect(screen.getByText("Прізвище")).toBeInTheDocument();
    expect(screen.getByText("По батькові")).toBeInTheDocument();
    expect(
      screen.getByText(
        "Реестраційний номер облікової картки платника податків/серія (за наявності) та номер паспорта"
      )
    ).toBeInTheDocument();
    expect(screen.getByText("Який зареєстрований в")).toBeInTheDocument();
    expect(
      screen.getByText("Назва териториального органу ДПС")
    ).toBeInTheDocument();
    expect(
      screen.getByText("Електронна адреса фізичної особи")
    ).toBeInTheDocument();
    expect(screen.getByText("за период з")).toBeInTheDocument();
    expect(screen.getByText("кварталу")).toBeInTheDocument();
    expect(screen.getAllByText("року")).toHaveLength(2);
    expect(screen.getByText("квартал")).toBeInTheDocument();
  });

  it("should render the component with the correct data", () => {
    const headers = {
      firstName: "FirstName",
      sureName: "SureName",
      lastName: "LastName",
      taxNumber: "TaxNumber",
      taxAuthorityNumber: "TaxAuthorityNumber",
      taxAuthorityName: "TaxAuthorityName",
      email: "Email",
      periodFromQuarter: "PeriodFromQuarter",
      periodFromYear: "PeriodFromYear",
      periodToQuarter: "PeriodToQuarter",
      periodToYear: "PeriodToYear",
    };

    render(<DFSFormHeader headers={headers} />);

    expect(screen.getByText(headers.firstName)).toBeInTheDocument();
    expect(screen.getByText(headers.sureName)).toBeInTheDocument();
    expect(screen.getByText(headers.lastName)).toBeInTheDocument();
    expect(screen.getByText(headers.taxNumber)).toBeInTheDocument();
    expect(screen.getByText(headers.taxAuthorityNumber)).toBeInTheDocument();
    expect(screen.getByText(headers.taxAuthorityName)).toBeInTheDocument();
    expect(screen.getByText(headers.email)).toBeInTheDocument();
    expect(screen.getByText(headers.periodFromQuarter)).toBeInTheDocument();
    expect(screen.getByText(headers.periodFromYear)).toBeInTheDocument();
    expect(screen.getByText(headers.periodToQuarter)).toBeInTheDocument();
    expect(screen.getByText(headers.periodToYear)).toBeInTheDocument();
  });

  it("should match the snapshot", () => {
    const headers = {
      firstName: "FirstName",
      sureName: "SureName",
      lastName: "LastName",
      taxNumber: "TaxNumber",
      taxAuthorityNumber: "TaxAuthorityNumber",
      taxAuthorityName: "TaxAuthorityName",
      email: "Email",
      periodFromQuarter: "PeriodFromQuarter",
      periodFromYear: "PeriodFromYear",
      periodToQuarter: "PeriodToQuarter",
      periodToYear: "PeriodToYear",
    };

    const { asFragment } = render(<DFSFormHeader headers={headers} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
