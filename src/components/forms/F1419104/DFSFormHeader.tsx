import { DFSFormHeaderType } from "../../../utils/DFSXMLForm";

export interface DFSFormHeaderProps {
  headers?: DFSFormHeaderType;
}

export function F1419104DFSFormHeader(props: DFSFormHeaderProps) {
  const { headers } = props;
  return (
    <div className="container">
      <div className="grid grid-rows-10 grid-cols-12">
        <div className="row-span-8 col-span-3 flex justify-center items-center border-2">
          Фізична особа - платник податків
        </div>
        <div className="col-span-9 border-2 text-center">
          {headers?.firstName}
        </div>
        <div className="col-span-9 border-2 text-center">Прізвище</div>
        <div className="col-span-9 border-2 text-center">
          {headers?.lastName}
        </div>
        <div className="col-span-9 border-2 text-center">Ім'я</div>
        <div className="col-span-9 border-2 text-center">
          {headers?.sureName}
        </div>
        <div className="col-span-9 border-2 text-center">По батькові</div>
        <div className="col-span-9 border-2 text-center">
          {headers?.taxNumber}
        </div>
        <div className="col-span-9 border-2 text-center">
          Реестраційний номер облікової картки платника податків/серія (за
          наявності) та номер паспорта
        </div>
      </div>
      <div className="grid grid-rows-2 grid-cols-12">
        <div className="row-span-2 col-span-3 flex justify-center items-center border-2">
          Який зареєстрований в
        </div>
        <div className="col-span-1 border-2 text-center">
          {headers?.taxAuthorityNumber}
        </div>
        <div className="col-span-8 border-2 text-center">
          {headers?.taxAuthorityName}
        </div>
        <div className="col-span-1 border-2 text-center">Код</div>
        <div className="col-span-8 border-2 text-center">
          Назва териториального органу ДПС
        </div>
      </div>
      <div className="grid grid-rows-1 grid-cols-12">
        <div className="col-span-3 text-center border-2">
          Електронна адреса фізичної особи
        </div>
        <div className="col-span-9 text-center border-2">{headers?.email}</div>
      </div>
      <div className="flex pt-4">
        <div className="flex-initial w-8"></div>
        <div className="flex-auto w-8 text-right">за период з</div>
        <div className="flex-auto w-8 text-center border-b-2 border-black">
          {headers?.periodFromQuarter}
        </div>
        <div className="flex-auto w-8 text-left">кварталу</div>
        <div className="flex-auto w-8 text-center border-b-2 border-black">
          {headers?.periodFromYear}
        </div>
        <div className="flex-auto w-8">року</div>
        <div className="w-32"></div>
        <div className="flex-auto w-8 text-right">по</div>
        <div className="flex-auto w-8 text-center border-b-2 border-black">
          {headers?.periodToQuarter}
        </div>
        <div className="flex-auto w-8 text-left">квартал</div>
        <div className="flex-auto w-8 text-center border-b-2 border-black">
          {headers?.periodToYear}
        </div>
        <div className="flex-auto w-8">року</div>
        <div className="w-8"></div>
      </div>
    </div>
  );
}

export default F1419104DFSFormHeader;
