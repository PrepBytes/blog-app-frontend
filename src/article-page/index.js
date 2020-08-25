import React, { Component } from 'react';
import axios from 'axios';
import appConfig from '../appConfig';

import Header from '../layout/Header';
import Article from './Article';
import LatestStories from './SimilarArticles';

class ArticlePage extends Component {
	constructor(props, context) {
		super (props, context);
		this.state = {
			article: undefined,
			similarArticles: undefined,
			category: "bollywood"
		};
	}

	componentDidMount() {
			let postId = this.props.match.params.postId;

			axios.post(`${appConfig.serverUrl}/get-article-by-id`, { id: postId })
			.then(response => {
				this.setState({
					article: response.data ? response.data : undefined
				});
			})
			.catch(err => console.error(err));

			axios.post(`${appConfig.serverUrl}/get-similar-articles`, { postId: postId })
			.then(response => {
				this.setState({
					similarArticles: response.data
				});
			})
			.catch(err => console.error(err));
	}

	render() {
		return (
			<div className="article-page">
				<Header />
				{this.state.article && <Article article={this.state.article} />}
				{this.state.similarArticles && <LatestStories articles={this.state.similarArticles}/>}
			</div>
		)
	}
}

export default ArticlePage;