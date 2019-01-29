import React, { PureComponent } from 'react';

export interface Props {
  name: string;
}

interface State {
  name: string;
}

class Home extends PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      name: props.name || 'Deepak Thakkar'
    };
  }

  componentDidMount() {}

  render() {
    const { name } = this.state;

    return (
      <div>
        <h1>Fridayyyyy Web</h1>
        <h2>{name}</h2>
      </div>
    );
  }
}

export default Home;
