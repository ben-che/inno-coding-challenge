import React, { Component } from 'react';
import Counter from './components/Counter';
import Card from './components/Card';
import data from './data/cardList';
import './App.scss';

class App extends Component {
	state = {
		counter: 0,
		selected: null,
		completedCount: 0,
		completedGame: false,
		disableClick: false
	};

	componentDidMount() {
		this.setState({
			cardList: data
		});
	}

	componentDidUpdate() {
		if (
			this.state.completedCount === this.state.cardList.length / 2 &&
			!this.state.completedGame
		) {
			this.setState({
				completedGame: true
			});
		}
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
						wrong={card.wrong}
						correct={card.correct}
						loading={this.state.disableClick}
					/>
				);
			});
		}
	};

	handleCardCheck = (tagName, index) => {
		let dataCopy = this.state.cardList;
		if (!this.state.disableClick) {
			if (this.state.selected === null) {
				dataCopy[index].active = true;
				this.setState({
					selected: index,
					cardList: dataCopy
				});
			} else {
				// hit
				if (dataCopy[this.state.selected].name === tagName) {
					dataCopy[this.state.selected].active = true;
					dataCopy[index].active = true;
					dataCopy[this.state.selected].correct = 1;
					dataCopy[index].correct = 1;
					this.setState(
						{
							cardList: dataCopy,
							counter: this.state.counter + 1,
							disableClick: true
						},
						() => {
							setTimeout(() => {
								dataCopy[this.state.selected].solved = true;
								dataCopy[index].solved = true;
								dataCopy[this.state.selected].active = false;
								dataCopy[index].active = false;
								dataCopy[this.state.selected].correct = false;
								dataCopy[index].correct = false;
								return this.setState({
									cardList: dataCopy,
									selected: null,
									disableClick: false,
									completedCount: this.state.completedCount + 1
								});
							}, 1500);
						}
					);
				} else {
					// miss
					dataCopy[index].active = true;
					dataCopy[this.state.selected].wrong = true;
					dataCopy[index].wrong = true;
					this.setState(
						{
							cardList: dataCopy,
							counter: this.state.counter + 1,
							disableClick: true
						},
						() => {
							setTimeout(() => {
								dataCopy[this.state.selected].active = false;
								dataCopy[index].active = false;
								dataCopy[this.state.selected].wrong = false;
								dataCopy[index].wrong = false;
								this.setState({
									cardList: dataCopy,
									selected: null,
									disableClick: false
								});
							}, 500);
						}
					);
				}
			}
		}
	};

	render() {
		return (
			<div className="">
				<Counter
					counter={this.state.counter}
					complete={this.state.completedGame}
				/>
				<div className="game">{this.renderCards()}</div>
			</div>
		);
	}
}

export default App;
