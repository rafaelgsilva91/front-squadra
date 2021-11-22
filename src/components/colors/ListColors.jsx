import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Table} from "reactstrap";
import api from '../../services/api';

const ListColors = () => {
  const [colors, setColors] = useState([]);

  useEffect(() => {
    api.get("/cor")
      .then((response) => setColors(response.data.body))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);

  return (
    <div className="App">
      <header>
        <br/>
        <h1 className="App-title">
          Colors
        </h1>
      </header>
      <br />
      <br />
      <br />
      <div>
        <Container fluid>
          <Row>
            <Col lg="12">
              <h5 className="text-left">
                List Colors
              </h5>
            </Col>
            <Col lg="12">
              <Table>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  {colors.map(color => (
                    <tr>
                        <td>{color.id}</td>
                        <td>{color.descricao}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
export default ListColors;
