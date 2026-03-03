import { Container, Row } from "react-bootstrap";
import SingleBook from "./SingleBook";

export default function BookList(props) {
  return (
    <>
      <Container>
        <Row>
          {props.libri.map((libro) => {
            return <SingleBook key={libro.asin} datiLibro={libro}></SingleBook>;
          })}
        </Row>
      </Container>
    </>
  );
}
