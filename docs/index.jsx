import React from 'react';
import ReactDom from 'react-dom';
import TabbedContent from '../src';
import './style.scss';
import '../src/index.scss';

class SampleComponent extends React.Component {
  render() {
    return (<p>{this.props.content}</p>)
  }
};

const blocks = [{
  title: 'First component',
  selected: true,
  component: <SampleComponent content={'First Component'} />
}, {
  title: 'Second component',
  component: <SampleComponent content={'Second Component'} />
}, {
  title: 'Third component',
  component: <SampleComponent content={'Third Component'} />
}];

ReactDom.render(<TabbedContent blocks={blocks}/>, document.getElementById('main'));
