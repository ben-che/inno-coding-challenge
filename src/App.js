import React, { Component } from 'react';
import Counter from './components/Counter';
import Card from './components/Card';
import data from './data/cardList';
import './App.scss';

class App extends Component {
	state = {
		counter: 0,
		selected: null
	};

	componentDidMount() {
		this.setState({
			cardList: data
		});
	}

	renderCards = () => {
		if (!!this.state.cardList) {
			return this.state.cardList.map((card) => {
				return (
					<Card
						tag={card.name}
						id={card.id}
						solved={card.solved}
						active={card.active}
						key={card.id}
						handleCardCheck={this.handleCardCheck}
					/>
				);
			});
		}
	};

	handleCardCheck = (tagName, index) => {
		let dataCopy = this.state.cardList;
		if (this.state.selected === null) {
			dataCopy[index].active = true;
			this.setState({
				selected: index,
				cardList: dataCopy
			});
		} else {
			if (dataCopy[this.state.selected].name === tagName) {
				dataCopy[this.state.selected].solved = true;
				dataCopy[index].solved = true;
				this.setState({
					selected: null,
					cardList: dataCopy
				});
			} else {
				dataCopy[this.state.selected].active = false;
				this.setState({
					selected: null,
					cardList: dataCopy
				});
			}
		}
	};

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
