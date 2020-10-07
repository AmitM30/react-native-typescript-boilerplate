import { connect } from 'react-redux';

import Component from './Component';

const mapStateToProps = () => ({});

const mapDispatchToProps = () => ({});

const drawerContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Component);

export default drawerContainer;
