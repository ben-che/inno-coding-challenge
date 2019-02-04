import React from 'react';
import './Card.scss';

export default function Card(props) {
	if (props.correct) {
		console.log('rendering right');
		return <div className={`card fas fa-${props.tag} right`} />;
	} else if (props.active && props.wrong) {
		return <div className={`card fas fa-${props.tag} wrong`} />;
	} else if (props.solved) {
		return <div className={`card fas fa-${props.tag} solved`} />;
	} else if (props.active) {
		return <div className={`card fas fa-${props.tag} active`} />;
	} else if (props.loading) {
		return <div className={`card loading`} />;
	} else {
		return (
			<div
				className={`card`}
				onClick={() => props.handleCardCheck(props.tag, props.id)}
			/>
		);
	}
}
