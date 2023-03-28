import { XMLParser } from "fast-xml-parser";
import * as _ from "lodash";
import log from "loglevel";

export interface DFSFormHeaderType {
  firstName: string;
  lastName: string;
  sureName: string;
  taxNumber: string;
  taxAuthorityName: string;
  taxAuthorityNumber: string;
  email: string;
  periodFromYear: string;
  periodFromQuarter: string;
  periodToYear: string;
  periodToQuarter: string;
}

export interface DFSFormRowType {
  rowNumber: string;
  requestResult: string;
  quarterMonth: string;
  year: string;
  agentNumber: string;
  agentName: string;
  incomeCounted: string;
  incomePaid: string;
  taxCounted: string;
  taxPaid: string;
  taxCode: string;
  hiredDate: string;
  firedDate: string;
}

class DFSXMLForm {
  formType: string = "F1401803";
  formColsMap = {
    requestResult: "T1RXXXXG2",
    quarterMonth: "T1RXXXXG3S",
    year: "T1RXXXXG4",
    agentNumber: "T1RXXXXG5S",
    agentName: "T1RXXXXG6S",
    incomeCounted: "T1RXXXXG7",
    incomePaid: "T1RXXXXG8",
    taxCounted: "T1RXXXXG9",
    taxPaid: "T1RXXXXG10",
    taxCode: "T1RXXXXG11S",
    hiredDate: "T1RXXXXG12D",
    firedDate: "T1RXXXXG13D",
  };
  lenghtColName = "requestResult";
  formColsIndexMap: any = {};
  XML: any;

  constructor(xmlString: string) {
    const options = {
      parseTagValue: false,
      ignoreAttributes: false,
      parseAttributeValue: false,
    };
    this.XML = new XMLParser(options).parse(xmlString);
    log.debug(this.XML);
    // this.fillRowsIndex();
  }

  parseFile() {
    if (!this.validFormType) {
      return null;
    }
    this.fillRowsIndex();
  }

  validFormType(): boolean {
    if (this.formHead === null) {
      return false;
    }
    const cDoc = this.formHead["C_DOC"];
    const cDocSub = this.formHead["C_DOC_SUB"];
    const cDocVer = this.formHead["C_DOC_VER"];
    const cDocType = this.formHead["C_DOC_TYPE"];

    const providerFormType = `${cDoc}${cDocSub}${cDocType}${cDocVer}`;
    log.debug("providesFormType = %s", providerFormType);
    log.debug("formType = %s", this.formType);
    return (providerFormType as string) === (this.formType as string);
  }

  fillRowsIndex() {
    for (const key in this.formColsMap) {
      const storageName =
        this.formColsMap[key as keyof typeof this.formColsMap];
      log.log("key = %s, storageName = %s", key, storageName);
      if (storageName in this.fromBody) {
        this.fromBody[storageName].forEach((row: any) => {
          if (!(key in this.formColsIndexMap)) {
            this.formColsIndexMap[key] = {};
          }
          this.formColsIndexMap[key][row["@_ROWNUM"]] = row;
        });
      }
    }
    log.debug("formColsIndexMap = ", this.formColsIndexMap);
  }

  get formHead(): any {
    // return this.XML["DECLAR"]["DECLARHEAD"];
    return (
      // this.XML && this.XML["DECLAR"] && this.XML["DECLAR"]["DECLARHEAD"] && null
      this.XML?.DECLAR?.DECLARHEAD || null
    );
  }

  get fromBody(): any {
    // return this.XML["DECLAR"]["DECLARBODY"];
    return (
      // this.XML && this.XML["DECLAR"] && this.XML["DECLAR"]["DECLARBODY"] && null
      this.XML?.DECLAR?.DECLARBODY || null
    );
  }

  getHeader(): DFSFormHeaderType {
    return {
      firstName: this.fromBody["HPNAME"],
      lastName: this.fromBody["HLNAME"],
      sureName: this.fromBody["HFNAME"],
      taxNumber: this.fromBody["HTIN"],
      taxAuthorityName: this.fromBody["HSTI"],
      taxAuthorityNumber: this.fromBody["HKSTI"],
      email: this.fromBody["HEMAIL"],
      periodFromYear: this.fromBody["R0401G2"],
      periodFromQuarter: this.fromBody["R0401G1"],
      periodToYear: this.fromBody["R0401G4"],
      periodToQuarter: this.fromBody["R0401G3"],
    };
  }

  private fillRow(rowNumber: string): DFSFormRowType {
    log.debug("fillRow rowNumber %s", rowNumber);
    const newRow: DFSFormRowType = {
      rowNumber: rowNumber,
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
    };

    for (const key in this.formColsIndexMap) {
      if (
        key in this.formColsIndexMap &&
        rowNumber in this.formColsIndexMap[key]
      ) {
        log.debug("Index for %s key", key, this.formColsIndexMap[key]);
        newRow[key as keyof DFSFormRowType] =
          this.formColsIndexMap[key][rowNumber]["#text"];
      }
    }
    return newRow;
  }

  *row(): Generator<DFSFormRowType> {
    const rows =
      this.fromBody[
        this.formColsMap[this.lenghtColName as keyof typeof this.formColsMap]
      ].length;
    for (const rowNumber of _.range(1, rows + 1)) {
      yield this.fillRow(rowNumber.toString(10));
    }
  }

  getBody(): DFSFormRowType[] {
    return [...this.row()];
  }
}

export default DFSXMLForm;
