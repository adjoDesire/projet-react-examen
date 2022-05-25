import React from 'react';
import './App.css';
import '../styles/ShoppingList.css'

class ShoppingList extends React.Component {

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
		return (
			<div className="App">
				<ul className='lmj-plant-list'>
					{this.state.activities.map((activitie) => (
						<li key={activitie.id} className='lmj-plant-item'>
							<img src={activitie.image} alt='La maison jungle' className='lmj-logo' />
							{activitie.name}
							{activitie.category} <div className='lmj-sales'>{activitie.keywords}</div>
							<p>{activitie.description}</p>
							
						</li>
					))}
				</ul>
			</div>
		)
  	}
  
}
export default ShoppingList