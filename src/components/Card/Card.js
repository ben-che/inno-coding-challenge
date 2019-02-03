import React, { Component } from 'react';
import './Card.scss';

export default function Card(props) {
	if (props.solved) {
		return <div className={`card fas fa-${props.tag} solved`} />;
	} else if (props.active) {
		return <div className={`card fas fa-${props.tag} active`} />;
	} else {
		return (
			<div
				className={`card`}
				onClick={() => props.handleCardCheck(props.tag, props.id)}
			/>
		);
	}
}
