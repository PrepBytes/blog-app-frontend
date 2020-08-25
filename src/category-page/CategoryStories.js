import React from 'react';
import { Link } from "react-router-dom";
import Utils from '../utils';

import './styles/category-stories.css';

const CategoryStory = props => {
	const { item, index } = props;

	return <>
		{index > 0 && <div className="category-story__horizontal-ruler"></div>}
		<Link to={`/${item.category.toLowerCase()}/${item.id.toLowerCase()}`}>
			<div className="category-story">
				<div className="category-story__info">
					<div className="category-story__image" style={{background: `url(${item.img})`}}></div>
					<div className="category-story__details">
						<h1 className="category-story__heading">{item.heading}</h1>
						<p className="category-story__desc">{item.desc}</p>
						<div className="category-story__category-and-time">
							<span className="category-story__category">{item.category}</span> / <span className="category-story__time">{item.date}</span>
						</div>
					</div>
				</div>
			</div>
		</Link>
	</>;
}

const CategoryStories = props => {
	let { articles, category } = props;
	articles = !Utils.isEmpty(articles) && Array.isArray(articles) ? articles : [];

	category = typeof category === "string" ? category : "";
	category = category.charAt(0).toUpperCase() + category.slice(1);

	return (
		<div className="category-stories">
			<div className="category-stories__heading">{category}</div>
			{articles.map((article, index) => <CategoryStory item={article} index={index} />)}
		</div>
	)
}

export default CategoryStories;