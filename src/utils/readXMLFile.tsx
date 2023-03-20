function readXMLFile(
  file: File,
  setState: React.Dispatch<React.SetStateAction<string>>
) {
  console.debug("readXMLFile called");
  const reader = new FileReader();
  const decoder = new TextDecoder("windows-1251");

  reader.onload = (e) => {
    console.debug("reader onload hanler called");
    if (e.target) {
      const text = decoder.decode(e.target.result as ArrayBuffer);
      setState(text);
    }
  };
  reader.readAsArrayBuffer(file);
}

export default readXMLFile;
