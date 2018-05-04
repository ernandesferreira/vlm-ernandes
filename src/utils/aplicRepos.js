import React from 'react';
import MenuSidebar from './menu';
import AplicLista from './aplicRepoLista';
import RepoContent from './aplicRepoContent';


class aplicRepos extends React.Component {
    render() {       
        return (
            <div class="container">
                <MenuSidebar />
                <nav class="containerSidebar">
                    <h2>Repositorios Globo</h2>
                    <AplicLista />                  
                </nav>
                <main class="container-commit">
                  <RepoContent />
                </main>               
            </div>
        );
    }
}
export default aplicRepos