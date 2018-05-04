import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import AplicItem from './aplicRepoItem';

class AplicLista extends React.Component {

    constructor(props) {
      super(props);
    }

    

    render(){
        return (
            <ul class="list-container">
                <AplicItem/>
            </ul>
        );
    }
}

const mapDispatchToProps = dispatch => {
  return {
    loadRepositories : () => dispatch({
      type: 'REQUEST_REPO',
      payload: axios.get('https://api.github.com/search/repositories?q=user:globocom&sort=stars:desc&per_page=200')    
  	}),
    loadRepoCommits : (item, flag) => {
      dispatch({
        type: 'SET_CURRENT_REPO',
        payload: item
		  }),
      dispatch({
        type: 'REQUEST_COMMITS',
        payload: axios.get(`https://api.github.com/repos/globocom/${item.name}/commits`, {
          params: {
            page: 1,
            per_page: 20
          }
        })
      }),
      dispatch({
        type: 'DISABLE_MENU',
        payload: flag ? false : true
      })
	  }
  }
}
const mapStateToProps = state => {
  return {
    repos : state.repos,
    disableMenu: state.disableMenu
  }
}

export default AplicLista