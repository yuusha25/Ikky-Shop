import { Button, Form } from "react-bootstrap"
import '../style/landingPage.css'

const contentInput = () => {
  return (
    <Form className="">
      <div className="d-flex justify-content-center">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="h1 d-flex justify-content-center pb-4">Masukkan Nomor Telepon</Form.Label>
          <Form.Control
          className="text-center p-2 "
            type="tel"
            placeholder="08123456789"
            pattern="[0-9]{10,13}"
            title="Masukkan nomor telepon 10-13 digit tanpa spasi"
          />

        </Form.Group >
      </div>
      <div className="d-flex justify-content-center align-items-center p-4">
        <Button className="buttonBG" type="submit">
          Submit
        </Button>
      </div>
    </Form>
  );
}

export default contentInput