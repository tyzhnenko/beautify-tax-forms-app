import { useState, useMemo } from "react";

import DFSFormUploadFile from "../DFSFormUploadFile";
import { DFSFormBody } from "./DFSFormBody";
import { DFSFormHeader } from "./DFSFormHeader";
import DFSXMLForm from "../../../utils/DFSXMLForm";
import { DFSFormHeaderType, DFSFormRowType } from "../../../utils/DFSXMLForm";
import { Alert } from "@material-tailwind/react";
import useTitle from "../../../utils/useTitle";

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

const defaultBody = (): Array<DFSFormRowType> => [
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
    hiredDate: "",
    firedDate: "",
  },
];

function DFSForm() {
  useTitle("Форма F1401803");

  const [formXML, setFormXML] = useState<string>("");
  const [formHeader, setFormHeader] = useState<DFSFormHeaderType>(
    defaultHeader()
  );
  const [formBody, setFormBody] = useState<Array<DFSFormRowType>>(
    defaultBody()
  );
  const [errorMessage, setErrorMessage] = useState("");

  useMemo(() => {
    console.debug("formXML state is changed");
    if (formXML === "") {
      console.debug("formXML is empty");
      return;
    }
    const xmlForm = new DFSXMLForm(formXML);
    if (!xmlForm.validFormType()) {
      setErrorMessage("Invalid form type");
      return;
    }
    setFormHeader(xmlForm.getHeader());
    setFormBody(xmlForm.getBody());
  }, [formXML]);

  return (
    <>
      <Alert
        show={Boolean(errorMessage)}
        color="red"
        dismissible={{
          onClose: () => setErrorMessage(""),
        }}
      >
        {errorMessage}
      </Alert>
      <div className="shadow-lg">
        <DFSFormHeader headers={formHeader}></DFSFormHeader>
        <DFSFormBody rows={formBody}></DFSFormBody>
        <DFSFormUploadFile xmlLoader={setFormXML}></DFSFormUploadFile>
      </div>
    </>
  );
}

export default DFSForm;
