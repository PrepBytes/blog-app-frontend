import React from 'react';
import { Link } from 'react-router-dom';
import Utils from '../utils';

import './styles/the-latest.css'

const TheLatestCard = props => {
	const { item } = props;

	return <Link to={`/${item.category.toLowerCase()}/${item.id.toLowerCase()}`} className="the-latest__card">
		<div>
			<div className="the-latest__card-top" style={{ background: `url(${item.img})` }}></div>
			<div className="the-latest__card-bottom">
				<h2 className="the-latest__card-heading">{item.heading}</h2>
				<p className="the-latest__card-desc">{item.desc}</p>
				<div className="the-latest__card-category-and-date">
					<span className="the-latest__card-category">{item.category}</span> / <span className="the-latest__card-time">{item.date}</span>
				</div>
			</div>
		</div>
	</Link>;
};

const TheLatest = props => {
	let { articles } = props;
	articles = !Utils.isEmpty(articles) && Array.isArray(articles) ? articles : [];

	return (
		<div className="the-latest">
			<h1 className="the-latest__heading">The Latest</h1>
			<div className="the-latest__cards-container">
				{articles.map(article => <TheLatestCard item={article} />)}
			</div>
		</div>
	)
}

export default TheLatest;