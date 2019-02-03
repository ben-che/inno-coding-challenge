import React, { Component } from 'react';
import Counter from './components/Counter';
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

	render() {
		return (
			<div className="">
				<Counter counter={this.state.counter} />
			</div>
		);
	}
}

export default App;
