import React from 'react';
import { connect } from 'react-redux';

class MenuSidebar extends React.Component {
	render() {
		const { disableMenu } = this.props;		
		return (
			<span onClick={this.props.enableMenu.bind(this, disableMenu)} className="menu-sidebar">
				<i  className="fa fa-bars"></i>
			</span>
		);
	}
}

const mapStateToProps = state => {
  return {
    disableMenu: state.disableMenu
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    enableMenu : (flag) => {
    	dispatch({ type: 'DISABLE_MENU', payload: flag ? false : true })
    }
  }
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(MenuSidebar);