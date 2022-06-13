import React from 'react';
import './App.css';
import './styles/ShoppingList.css'
import Banner from './components/Banner';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

class App extends React.Component {

  state = {
    utilisateurs:[],
  }
  
  componentDidMount(){
    fetch('http://localhost:3000/utilisateurs')
    .then((response)=>{
      return response.json()
    })
    .then((result) => {
      this.setState({utilisateurs:result})
    })
  }

  render(){
    const styles = {
      border: '1px solid rgba(0, 0, 0, 1)', 
    };
    return (
    <div><Banner />

        <div className="App">
          <h1> Liste des Locataires </h1>
          <Row md={3}>
            {this.state.utilisateurs.map((utilisateur) => (
              <Col lg={4} style={styles}>
                <li key={utilisateur.id}>
                    <h3>Les infos Personnels Locataire {utilisateur.id}</h3>
                    <p> Nom : {utilisateur.name} </p>
                    <p> Username : {utilisateur.username}</p>
                    <p> Email : {utilisateur.email} </p>
                    <p> Adresse : {utilisateur.address}</p> 
                    <p> Telephone : {utilisateur.phone}</p>
                </li>
                <li key={utilisateur.id}>
                    <h3>Les infos de la Compagnie Locataire {utilisateur.id}</h3>
                    <p> Nom : {utilisateur.company.name} </p>
                    <p> catchPhrase : {utilisateur.company.catchPhrase}</p>
                    <p> bs : {utilisateur.company.bs} </p>
                </li>
              </Col>
            ))}
          </Row>

        </div>
      </div>
    )
  }
  
}
export default App;
