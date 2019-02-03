import React, { Component } from 'react';
import './Card.scss';

export default function Card(props) {
	console.log(props);
	return <div className={`card fas fa-${props.tag}`} />;
}
