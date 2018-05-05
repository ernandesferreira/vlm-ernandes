import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';


class RepoContent extends React.Component{

	renderCommits(commits) {
		if ( commits.length > 0 ) {
			return (<ul className="commits-list">
					{commits.map(item => (
						<li className="commits-list-item">
							<span className="commit-message">
								{item.commit.message}
							</span>
						</li>
					))}
				</ul>);
		}
	}

    render() {
		const { current_repo, commits, requestMoreCommits, loadMoreCommits, commits_page } = this.props;
		const loadMore = loadMoreCommits && commits.length >= 20 ? 
		<span className="btn-load-more" onClick={requestMoreCommits.bind(this, current_repo, commits_page)}>LOAD MORE COMMITS</span>: '';

		return (
			<div className="container-commitsTitle">
				<h4>{current_repo.name}</h4>
				<div className="branchStats">
					<span className="stats-itemContent">
						<i className="fa fa-star"></i>
						{current_repo.stargazers_count}
					</span>
					<span className="stats-itemContent">
						<i className="fa fa-code-branch"></i>
						{current_repo.forks_count}
					</span>
				</div>
          <div className="container-commits">
					{this.renderCommits(commits)}
					{loadMore}
            
          </div>				
			</div>
            
		);
	}
}

const mapStateToProps = state => {
	return {
	  commits : state.commits,
	  current_repo : state.current_repo,
	  commits_page: state.commits_page,
	  loadMoreCommits: state.loadMoreCommits
	}
  }
  
  const mapDispatchToProps = dispatch => {
	return {
	  requestMoreCommits : (item, page) => dispatch({
		  type: 'LOAD_MORE_COMMITS',
		  payload: axios.get(`https://api.github.com/repos/globocom/${item.name}/commits`, {
			  params: {
				  page: page + 1,
				  per_page: 20
			  }
		  })
	  })
	}
  }
  
  export default connect(
	mapStateToProps,
	mapDispatchToProps
  )(RepoContent);


