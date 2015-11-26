import React from 'react';
import _ from 'lodash';
import Tab from '../sui-tab';
import TabSelector from '../sui-tab-selector';

export default class TabbedContent extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      items: this.props.blocks.map((item) => {
                return {
                  ...item,
                  id: _.camelCase(item.title)
                };
              })
    };
  }

  handleSelect(evt) {
    evt.preventDefault();
    this.setState({
      items: this.state.items.map((item) => {
                return {
                  ...item,
                  selected: evt.target.hash === `#${item.id}`
                };
             })
    });
  }

  render() {
    const tabs = this.state.items.map((item, index) => {
      return (
        <TabSelector id={item.id} title={item.title} key={index} active={item.selected} onSelect={this.handleSelect.bind(this)} />
        );
    });

    const sections = this.state.items.map((item, index) => {
      return (
        <Tab id={item.id} key={index} active={item.selected}>
          {item.component}
        </Tab>
      );
    });

    return (
      <div>
        <nav className='sui-TabbedContent'>
          <ul>
            {tabs}
          </ul>
        </nav>
        {sections}
      </div>
    );
  }
}

TabbedContent.propTypes = {
  blocks: React.PropTypes.array
};

TabbedContent.defaultProps = {
  blocks: []
};
