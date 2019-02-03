import React from 'react';
import './Counter.scss';

export default function Counter(props) {
	if (props.complete) {
		return <p className="move-counter">You won in {props.counter} moves!</p>;
	}
	return <p className="move-counter">Moves: {props.counter}</p>;
}
