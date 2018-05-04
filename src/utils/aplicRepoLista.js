import React from 'react';
import AplicItem from './aplicRepoItem';

class AplicLista extends React.Component {
    render(){
        return (
            <ul class="list-container">
                <AplicItem/>
            </ul>
        );
    }
}
export default AplicLista