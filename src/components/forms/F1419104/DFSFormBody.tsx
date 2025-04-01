import { F1419101DFSFormRowType } from "../../../utils/DFSXMLForm";

export interface F1419104DFDFormBodyProps {
  rows?: Array<F1419101DFSFormRowType>;
}

export function F1419104DFSFormBody(props: F1419104DFDFormBodyProps) {
  const { rows } = props;

  return (
    <div className="container overflow-hidden">
      <table className="min-w-full text-center text-sm font-light border-2">
        <thead className="font-medium dark:border-neutral-500">
          <tr className="border-2">
            <th scope="col" rowSpan={2} className="border-2">
              № з/п
            </th>
            <th scope="col" rowSpan={2} className="border-2">
              Результат обробки запиту
            </th>
            <th scope="col" colSpan={2} className="border-2">
              Період, за який надається інформація
            </th>
            <th scope="col" colSpan={2} className="border-2">
              Джерела отримання інформації
            </th>
            <th scope="col" colSpan={2} className="border-2">
              Сума доходу
            </th>
            <th scope="col" colSpan={2} className="border-2">
              Сума податку
            </th>
            <th scope="col" colSpan={2} className="border-2">
              Сума війскового збору
            </th>
            <th scope="col" rowSpan={2} className="border-2">
              Код та назва ознаку доходу / код ознаки пільги
            </th>
            <th scope="col" rowSpan={2} className="border-2">
              Дата прийому на роботу
            </th>
            <th scope="col" rowSpan={2} className="border-2">
              Дата звільненя з роботи
            </th>
          </tr>
          <tr className="border-2">
            <th scope="col" className="border-2">
              Номер кварталу - місяць
            </th>
            <th scope="col" className="whitespace-nowrap border-2">
              Рік
            </th>
            <th scope="col" className="border-2">
              Податковий номер/серія(за наявності) та номер паспорта податкового
              агента
            </th>
            <th scope="col" className="border-2">
              Найменування юридичної особи/ПІБ фізичної особи – підприємця
            </th>
            <th scope="col" className="-rotate-90 border-2">
              нарахованого
            </th>
            <th scope="col" className="-rotate-90 border-2">
              виплаченого
            </th>
            <th scope="col" className="-rotate-90 border-2">
              нарахованого
            </th>
            <th scope="col" className="-rotate-90 border-2">
              виплаченого
            </th>
            <th scope="col" className="-rotate-90 border-2">
              нарахованого
            </th>
            <th scope="col" className="-rotate-90 border-2">
              виплаченого
            </th>
          </tr>
          <tr className="border-2">
            <th className="whitespace-nowrap border-2">1</th>
            <th className="whitespace-nowrap border-2">2</th>
            <th className="whitespace-nowrap border-2">3</th>
            <th className="whitespace-nowrap border-2">4</th>
            <th className="whitespace-nowrap border-2">5</th>
            <th className="whitespace-nowrap border-2">6</th>
            <th className="whitespace-nowrap border-2">7</th>
            <th className="whitespace-nowrap border-2">8</th>
            <th className="whitespace-nowrap border-2">9</th>
            <th className="whitespace-nowrap border-2">10</th>
            <th className="whitespace-nowrap border-2">11</th>
            <th className="whitespace-nowrap border-2">12</th>
            <th className="whitespace-nowrap border-2">13</th>
            <th className="whitespace-nowrap border-2">14</th>
            <th className="whitespace-nowrap border-2">15</th>
          </tr>
        </thead>
        <tbody>
          {rows?.map((row) => (
            <tr className="border-2" key={row.rowNumber}>
              <th className="whitespace-nowrap border-2">{row.rowNumber}</th>
              <th className="whitespace-nowrap border-2">
                {row.requestResult}
              </th>
              <th className="border-2">{row.quarterMonth}</th>
              <th className="whitespace-nowrap border-2">{row.year}</th>
              <th className="border-2">{row.agentNumber}</th>
              <th className="w-64 border-2">{row.agentName}</th>
              <th className="border-2">{row.incomeCounted}</th>
              <th className="border-2">{row.incomePaid}</th>
              <th className="border-2">{row.taxCounted}</th>
              <th className="border-2">{row.taxPaid}</th>
              <th className="border-2">{row.warTaxCounted}</th>
              <th className="border-2">{row.warTaxPaid}</th>
              <th className="border-2">{row.taxCode}</th>
              <th className="border-2">{row.hiredDate}</th>
              <th className="border-2">{row.firedDate}</th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default F1419104DFSFormBody;
