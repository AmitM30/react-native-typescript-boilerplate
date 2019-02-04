import { connect } from 'react-redux';

import Component from './Component';

const mapStateToProps = () => ({});

const mapDispatchToProps = () => ({});

const homeContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Component);

export default homeContainer;
