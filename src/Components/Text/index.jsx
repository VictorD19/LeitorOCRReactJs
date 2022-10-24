import { Button } from "react-bootstrap";

export const TextArea = ({ text, progress }) => {
  return (
    <div className="AreaText">
      <h2>Texto Extraido</h2>
      <p>{text}</p>

      <Button
        variant="secondary"
        onClick={() => progress("")}
        size="sm"
        style={{ marginTop: "0.5rem" }}
      >
        Processar nova imagem
      </Button>
    </div>
  );
};
