
import React, { useState, useEffect } from 'react';
import { Container, Row, Col, FormGroup, Form, Button } from "reactstrap";
import {Link, useParams} from 'react-router-dom'
import api from '../../services/api';
import * as Yup from 'yup';

const MaintainPeople = () => {
  const { id } = useParams();

  //HOOKS
  const [people, setPeople] = useState({
    nome: "",
    cor: 1
  });
  const [cores, setCores] = useState([]);
  const [status, setStatus] = useState({
    type: '',
    mensagem: ''
  });

  const valueInput = e => {
    if(e.target.name == "nome")
      setPeople({ ...people, nome: e.target.value})
    else
      setPeople({ ...people, cor: parseInt(e.target.value)})
  };

  useEffect(() => {
    //GET
    api.get("/cor")
      .then((response) => setCores(response.data.body))
      .catch((err) => {
        console.error("Error!!" + err);
      });
  }, []);

  useEffect(() => {
    //GET
    if(id!==undefined){
      api.get("/pessoa/"+id)
      .then((response) => setPeople(response.data.body))
      .catch((err) => {
        console.error("Error!!" + err);
      });
    }
  }, []);

  //Validation FORM
  async function validate(){
    const validationSchema = Yup.object().shape({
      nome: Yup.string()
          .required('Name is required'),
      cor: Yup.number().integer()
          .required('Color is required')
    });

    try{
      await validationSchema.validate(people);
      return true;
    }catch (err) {
      setStatus({
        type: 'error',
        mensagem: err.errors
      });
      return false;
    }
  }

  //Submit FORM
  const submitReview = async e => {
    e.preventDefault();

    if(!(await validate())) return;

    const saveDataForm = true;

    console.log(typeof(people.cor))

    if (saveDataForm) {
      if(id!==undefined){
        api.post("pessoa", {
          nome: people.nome,
          corFavoritaId: people.cor
        })
        .then(() =>
          setStatus({
            type: 'success',
            mensagem: "People save success!"
          })
        )
        .catch((err) => {
          console.log(err)
          setStatus({
            type: 'error',
            mensagem: "Error save people!"
          });
        });
      }
      setPeople({
        nome: ""
      });
    }
  };

  return (
    <div className="App">
      <header>
        <br/>
        <h1 className="App-title">
          {id!==undefined ? 'Update' : 'Add'} People
        </h1>
      </header>
      <hr/>
      <br />
      <br />
      <br />
      <div>
        {status.type === 'success' ? <p style={{ color: "green" }}>{status.mensagem}</p> : ""}
        {status.type === 'error' ? <p style={{ color: "#ff0000" }}>{status.mensagem}</p> : ""}
        <Form onSubmit={submitReview} >
          <Container fluid className="inputs">
            <Row>
              <Col lg="4">
                <FormGroup>
                  <p className="text-left">Name</p>
                  <input
                    name="nome"
                    className="form-control"
                    onChange={valueInput} value={people.nome}
                  >
                  </input>
                </FormGroup>
              </Col>
              <Col lg="4">
                <FormGroup>
                  <p className="text-left">Color</p>
                  <select
                    name="cor"
                    className="form-control"
                    onChange={valueInput} value={people.cor}
                  >
                    {cores.map(cor => (
                      <option key={cor.id} value={cor.id}>{cor.descricao}</option>
                    ))}
                  </select>
                </FormGroup>
              </Col>
              <Col lg="12" className="botao">
                <Button color="primary" type="submit">Submit</Button>
                {' '}
                <Link className="btn btn-danger" to="/peoples">Cancel</Link>
              </Col>
            </Row>
          </Container>
        </Form>
      </div>
    </div>
  )
}
export default MaintainPeople;
