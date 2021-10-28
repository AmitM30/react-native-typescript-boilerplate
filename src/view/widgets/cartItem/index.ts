import { connect } from 'react-redux';

import Component from './Component';

const mapStateToProps = () => ({});

const mapDispatchToProps = () => ({});

const Container = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Component);

export default Container;
