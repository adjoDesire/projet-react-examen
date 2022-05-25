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
    activities:[],
  }

  componentDidMount(){
    fetch('http://localhost:3000/activities')
    .then((response)=>{
      return response.json()
    })
    .then((result) => {
      this.setState({activities:result})
    })
  }

  render(){
    return (<div><Banner />

        <div className="App">
          <Row>
            {this.state.activities.map((activitie) => (
              <Col>
                <li key={activitie.id}>
                  <p> {activitie.name} </p>
                  <img src={activitie.image} alt='La maison jungle' className='lmj-logo' />
                  <p>{activitie.description}</p>
                  <p> {activitie.category}</p> 
                  <p className='lmj-sales'>{activitie.keywords}</p>
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
