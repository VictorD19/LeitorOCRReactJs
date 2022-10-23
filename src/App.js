import { useState } from "react";
import { InputFile } from "./Components/Input/Index";
import { Loading } from "./Components/Loading";
import Tesseract from "tesseract.js";
import { TextArea } from "./Components/Text";
import { ErrorAlert } from "./Components/Alert";
import { Button } from "react-bootstrap";
import { Body } from "./Components/BodyPage";

function App() {
  const [imagePath, setImagePath] = useState("");
  const [text, setText] = useState("");
  const [progress, setProgress] = useState(0);

  const handleReadImage = () => {
    Tesseract.recognize(imagePath, "por", {
      logger: (m) => {
        if (m.status === "recognizing text") setProgress(m.progress * 100);
        console.log(m);
      },
    })
      .then(({ data: { text } }) => {
        setText(text);
        setProgress(0);
        setImagePath("");
      })
      .catch((error) => ErrorAlert("Não foi possivel processar a imagem!"));
  };

  return (
    <Body>
      <h1>Leitor de imagens</h1>
      {!text && progress === 0 && (
        <div>
          <InputFile uploadImage={setImagePath} />
          <Button
            variant="primary"
            onClick={handleReadImage}
            size="sm"
            disabled={imagePath ? false : true}
          >
            Coverter em texto
          </Button>
        </div>
      )}

      {progress > 0 && progress < 100 && <Loading progress={progress} />}
      {text && <TextArea text={text} progress={setText} />}
    </Body>
  );
}

export default App;
