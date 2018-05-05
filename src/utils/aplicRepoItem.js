import React from 'react';

class AplicItem extends React.Component {
	render() {
		const {repo, click} = this.props;
		return (
			<li className="list-item" onClick={click}> 
				<h3 className="list-name">{repo.name}</h3>
				<span className="list-stars">
					<i className="fa fa-star"></i>
					{repo.stargazers_count}
				</span>
			</li>
		);
	}
}

export default AplicItem;