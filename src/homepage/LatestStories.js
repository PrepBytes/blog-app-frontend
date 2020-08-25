import React from 'react';
import { Link } from 'react-router-dom';
import Utils from '../utils';

import './styles/latest-stories.css';

const LetestStoriesCard = props => {
	const { item } = props;

	return <Link to={`/${item.category.toLowerCase()}/${item.id.toLowerCase()}`} className="latest-story__card">
		<div>
			<div className="latest-story__card-bottom">
				<h2 className="latest-story__card-heading">{item.heading}</h2>
				<p className="latest-story__card-desc">{item.desc}</p>
				<div className="latest-story__card-category-and-date">
					<span className="latest-story__card-category">{item.category}</span> / <span className="latest-story__card-time">{item.date}</span>
				</div>
			</div>
		</div>
	</Link>;
};

const LetestStories = props => {
	let { articles } = props;
	articles = !Utils.isEmpty(articles) && Array.isArray(articles) ? articles : [];

	return (
		<div className="latest-stories">
			<h1 className="latest-stories__heading">Latest Stories</h1>
			<div className="latest-stories__horizontal-ruler"></div>
			<div className="latest-stories__cards-container">
				{articles.map(article => <LetestStoriesCard item={article} />)}
			</div>
			<div className="latest-stories__horizontal-ruler"></div>
		</div>
	)
}

export default LetestStories;