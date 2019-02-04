import { connect } from 'react-redux';

import Component from './Component';

const mapStateToProps = () => ({});

const mapDispatchToProps = () => ({});

const settingsContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Component);

export default settingsContainer;
