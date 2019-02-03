import React, { Component } from 'react';
import Counter from './components/Counter';
import Card from './components/Card';
import data from './data/cardList';
import './App.scss';

class App extends Component {
	state = {
		counter: 0
	};

	componentDidMount() {
		this.setState({
			cardList: data
		});
	}

	renderCards() {
		if (!!this.state.cardList) {
			return this.state.cardList.map((card) => {
				console.log(card);
				return (
					<Card
						tag={card.name}
						id={card.id}
						solved={card.solved}
						active={card.active}
						key={card.id}
					/>
				);
			});
		}
	}

	render() {
		return (
			<div className="">
				<Counter counter={this.state.counter} />
				<div className="game">{this.renderCards()}</div>
			</div>
		);
	}
}

export default App;
