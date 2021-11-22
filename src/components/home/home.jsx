import React from 'react'
import './home.css'
import {Link} from 'react-router-dom'
import {
	Container,
	Row,
	Col
} from 'reactstrap'


class Home extends React.Component {
	render() {
		return (
			<div className="intro">
				<Container>
					<Row className="intro-container">
						<Col lg="12">
							<h2 className="ini-title">FRONT <br /> SQUADRA</h2>
							<p className="ini-subtitle">Teste full-stack</p>
						</Col>
						<Col lg="12" className="buttons">
							<Link to="/peoples">
						  		<button className="dpe-btn">People</button>
							</Link>
							<Link to="/colors">
						  <button className="dpe-btn">Colors</button>
							</Link>
						</Col>
					</Row>
				</Container>
			</div>
			)
	}
}

export default Home
