import { connect } from 'react-redux';

import Component from './Component';

const mapStateToProps = () => ({});

const mapDispatchToProps = () => ({});

const dummyContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Component);

export default dummyContainer;
