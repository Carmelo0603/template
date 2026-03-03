import { Component } from "react";
import { Card, Col, Button } from "react-bootstrap";

export default class SingleBook extends Component() {
  state = { selected: false };
  render() {
    const book = this.props.datiLibro;
    <Col className="g-3" xs={6} md={3} lg={2}>
      <Card
        className={`h-100 ${this.state.selected ? "border border-danger" : ""}`}
        onClick={() => {
          this.setState({ selected: !this.state.selected });
        }}
        style={{ cursor: "pointer" }}
      >
        <Card.Img className="h-100" variant="top" src={book.img} />
        <Card.Body>
          <Card.Title className="fs-6 text-truncate">{book.title}</Card.Title>
          <Card.Text>{book.price} €</Card.Text>
          <div className="d-flex justify-content-center">
            <Button variant="primary">Te piace?</Button>
          </div>
        </Card.Body>
      </Card>
    </Col>;
  }
}
