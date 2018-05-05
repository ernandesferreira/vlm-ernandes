import React from 'react';
import MenuSidebar from './menu';
import AplicLista from './aplicRepoLista';
import RepoContent from './aplicRepoContent';
import { Route } from 'react-router-dom'


class AplicRepos extends React.Component {
    render() { 

        const { disableMenu } = this.props;
        const isMobile = window.innerWidth < 1024 ? true : false;
        const hideMenu = disableMenu && isMobile ? 'hide-menu' : '';

        return (
            <div className="container">
                <MenuSidebar />
                <nav className="containerSidebar">
                    <h2>Repositorios Globo</h2>
                    <AplicLista />                  
                </nav>
                <main className="container-commit">
                <RepoContent />
                </main>               
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
      disableMenu: state.disableMenu
    }
  }
  
  export default connect(
    mapStateToProps,
  )(AplicRepos);
