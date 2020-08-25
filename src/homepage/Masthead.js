import React from 'react';
import { Link } from 'react-router-dom';
import Utils from '../utils';

import './styles/masthead.css';

const MastheadItem = props => {
	const { item, large } = props;

	if (Utils.isEmpty(item)) {
		return null;
	}

	return large ? <Link to={`/${item.category.toLowerCase()}/${item.id.toLowerCase()}`} className="masthead__item-large">
			<div className="masthead__item-large" style={{
				backgroundImage: `url(${item.img})`
			}}>
				<div className="masthead__item-info">
					<h1 className="masthead__item-heading">{item.heading}</h1>
					<span className="masthead__item-category-and-time">
						<span className="masthead__item-category">{item.category}</span>
						<span className="masthead__item-time">{item.date}</span>
					</span>
				</div>
			</div>
		</Link>
		: <Link to={`/${item.category.toLowerCase()}/${item.id.toLowerCase()}`} className="masthead__item-small"><div className="masthead__item-small" style={{
				backgroundImage: `url(${item.img})`
			}}>
				<div className="masthead__item-info">
					<h2 className="masthead__item-heading">{item.heading}</h2>
					<span className="masthead__item-category-and-time">
						<span className="masthead__item-category">{item.category}</span> / <span className="masthead__item-time">{item.date}</span>
					</span>
				</div>
			</div>
		</Link>;
}

const Masthead = props => {
	let { articles } = props;
	articles = !Utils.isEmpty(articles) && Array.isArray(articles) ? articles : [];

	return (
		<div className="masthead">
			<div className="masthead__items-container">
				{articles.map((article, index) => index <= 2 && <MastheadItem item={article} large={index === 0} />)}
			</div>
		</div>
	)
}

export default Masthead;