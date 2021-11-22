
import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Table} from "reactstrap";
import {Link} from 'react-router-dom';
import api from '../../services/api';

const ListPeople = () => {
  //HOOKS
  const [peoples, setPeoples] = useState([]);

  useEffect(() => {
    //GET
    api.get("/pessoa")
      .then((response) => setPeoples(response.data.body))
      .catch((err) => {
        console.error("Error retrieve people!" + err);
      });
  }, []);

  const deleteReview = (idPeople) => {
    api.delete("/pessoa/"+ idPeople)
    .then(() => {
      alert("People delete success!");
    })
    .catch((err) => {
      console.error("Error delete people!" + err);
    });
  }

  return (
    <div className="App">
      <header>
        <br/>
        <h1 className="App-title">
          List Peoples
        </h1>
      </header>
      <hr/>
      <div>
        <Container fluid>

          <Link className="btn btn-primary" to="/peoples/add" >
            Add
          </Link>
          <hr/>
          <Row>
            <Col lg="12">
              <Table>
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Created At</th>
                    <th>Updated At</th>
                    <th colSpan="2">Operations</th>
                  </tr>
                </thead>
                <tbody>
                  {peoples.map(people => (
                    <tr key={people.id}>
                        <td>{people.id}</td>
                        <td>{people.nome}</td>
                        <td>{people.createdAt}</td>
                        <td>{people.updatedAt}</td>
                        <td>
                          <Link className="btn btn-primary" to={"/peoples/edit/"+people.id} >
                            Edit
                          </Link>
                          {' '}
                          <Button color="danger" onClick={() => {deleteReview(people.id)}}>
                            Remove
                          </Button>
                        </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  )
}
export default ListPeople;
