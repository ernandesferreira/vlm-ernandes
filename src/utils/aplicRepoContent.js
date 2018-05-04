import React from 'react'


class RepoContent extends React.Component{
    render() {			
		return (
			<div class="container-commitsTitle">
				<h4>Current Repositorio</h4>
				<div class="branchStats">
					<span class="stats-itemContent">
						<i class="fa fa-star"></i>
						300
					</span>
					<span class="stats-itemContent">
						<i class="fa fa-code-branch"></i>
						100
					</span>
				</div>
                <div class="container-commits">
                <ul class="commits-list">					
                    <li class="commits-item">
                        <span class="resume-commit">
                                Don't prevent tab events (#197)
                                Don't prevent tab events (#197)
                        </span>
                    </li>
				</ul>
            </div>				
			</div>
            
		);
	}
}

export default RepoContent
