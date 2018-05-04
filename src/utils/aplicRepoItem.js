import React from 'react';

class AplicItem extends React.Component {
	render() {
		return (
			<li class="list-item">
				<h3 class="list-name">Nome repo</h3>
				<span class="list-stars">
					<i class="fa fa-star"></i>
					300
				</span>
			</li>
		);
	}
}

export default AplicItem;