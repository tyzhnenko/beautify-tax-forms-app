import { useState, useMemo } from "react";

import DFSFormUploadFile from "../DFSFormUploadFile";
import { F1419101DFSFormBody } from "./DFSFormBody";
import { F1419101DFSFormHeader } from "./DFSFormHeader";
import { F1419101DFSXMLForm } from "../../../utils/DFSXMLForm";
import {
  DFSFormHeaderType,
  F1419101DFSFormRowType,
} from "../../../utils/DFSXMLForm";
import { Alert } from "@material-tailwind/react";
import useTitle from "../../../utils/useTitle";
import log from "loglevel";

const defaultHeader = (): DFSFormHeaderType => ({
  firstName: "",
  lastName: "",
  sureName: "",
  taxNumber: "",
  taxAuthorityName: "",
  taxAuthorityNumber: "",
  email: "",
  periodFromYear: "",
  periodFromQuarter: "",
  periodToYear: "",
  periodToQuarter: "",
});

const defaultBody = (): Array<F1419101DFSFormRowType> => [
  {
    rowNumber: "",
    requestResult: "",
    quarterMonth: "",
    year: "",
    agentNumber: "",
    agentName: "",
    incomeCounted: "",
    incomePaid: "",
    taxCounted: "",
    taxPaid: "",
    taxCode: "",
    warTaxCounted: "",
    warTaxPaid: "",
    hiredDate: "",
    firedDate: "",
  },
];

function DFSForm() {
  useTitle("Форма F1419101");

  const [formXML, setFormXML] = useState<string>("");
  const [formHeader, setFormHeader] = useState<DFSFormHeaderType>(
    defaultHeader()
  );
  const [formBody, setFormBody] = useState<Array<F1419101DFSFormRowType>>(
    defaultBody()
  );
  const [errorMessage, setErrorMessage] = useState("");

  useMemo(() => {
    log.debug("formXML state is changed");
    if (formXML === "") {
      log.debug("formXML is empty");
      return;
    }
    const xmlForm = new F1419101DFSXMLForm(formXML);
    if (!xmlForm.validFormType()) {
      setErrorMessage("Не вірний тип форми");
      return;
    }
    xmlForm.parseFile();
    setFormHeader(xmlForm.getHeader());
    setFormBody(xmlForm.getBody() as F1419101DFSFormRowType[]);
  }, [formXML]);

  return (
    <>
      <Alert
        open={Boolean(errorMessage)}
        color="red"
        onClose={() => setErrorMessage("")}
      >
        {errorMessage}
      </Alert>
      <div className="shadow-lg">
        <F1419101DFSFormHeader headers={formHeader}></F1419101DFSFormHeader>
        <F1419101DFSFormBody rows={formBody}></F1419101DFSFormBody>
        <DFSFormUploadFile xmlLoader={setFormXML}></DFSFormUploadFile>
      </div>
    </>
  );
}

export default DFSForm;
