import React from 'react';
import './Counter.scss';

export default function Counter(props) {
	return <p className="move-counter">Moves: {props.counter}</p>;
}
