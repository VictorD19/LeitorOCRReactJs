import { Form } from "react-bootstrap"

export const InputFile = ({uploadImage}) =>{
    const handleChange = (event) => {
        uploadImage(event.target.files[0])
      }
    return (
        <Form.Group controlId="formFile" className="mb-3">
        <Form.Label>Selecione imagem</Form.Label>
        <Form.Control type="file" onChange={handleChange} />
      </Form.Group>
    )
}