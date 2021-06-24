import { connect } from 'react-redux';

import Component from './Component';

const mapStateToProps = () => ({});

const mapDispatchToProps = () => ({});

const cartContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Component);

export default cartContainer;
