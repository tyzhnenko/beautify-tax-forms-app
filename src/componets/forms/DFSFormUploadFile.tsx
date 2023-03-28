import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Input,
} from "@material-tailwind/react";
import { Fragment, useState } from "react";
import readXMLFile from "../../utils/readXMLFile";

function DFSFormUploadFile(props: any) {
  const [open, setOpen] = useState(false);
  const [file, setFile] = useState<File>();

  function onChangeHandler(event: React.ChangeEvent<HTMLInputElement>) {
    if (!event.target.files) {
      return;
    }
    setFile(event.target.files[0]);
  }

  const openHandler = () => setOpen(!open);

  function uploadClickHandler() {
    if (!file) {
      openHandler();
      return;
    }

    readXMLFile(file, props.xmlLoader);
    setFile(undefined);
    openHandler();
  }

  return (
    <div className="text-center">
      <Fragment>
        <Button onClick={openHandler}>Оберить файл</Button>
        <Dialog open={open} handler={openHandler}>
          <DialogHeader>Вибір файлу</DialogHeader>
          <DialogBody>
            Оберить XML файл форми F0121213 для відображення
            <Input
              data-testid="file-selector"
              type="file"
              onChange={onChangeHandler}
              accept="text/xml"
            />
          </DialogBody>
          <DialogFooter>
            <Button variant="text" color="red" onClick={openHandler}>
              Відмінити
            </Button>
            <Button
              variant="gradient"
              color="green"
              onClick={uploadClickHandler}
            >
              Обробити
            </Button>
          </DialogFooter>
        </Dialog>
      </Fragment>
    </div>
  );
}

export default DFSFormUploadFile;
