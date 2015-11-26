import React from 'react';
import ReactDom from 'react-dom';
import TabbedContent from '../src';
import './style.scss';
import '../src/index.scss';

class SampleComponent extends React.Component {
  render() {
    return (<p>{this.props.content}</p>);
  }
}

SampleComponent.propTypes = {
  content: React.PropTypes.string
};

const blocks = [{
  id: '#first',
  title: 'First component',
  selected: true,
  component: <SampleComponent content={'First Component'} />
}, {
  id: '#second',
  title: 'Second component',
  component: <SampleComponent content={'Second Component'} />
}, {
  id: '#third',
  title: 'Third component',
  component: <SampleComponent content={'Third Component'} />
}];

ReactDom.render(<TabbedContent blocks={blocks}/>, document.getElementById('main'));
