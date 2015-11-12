import React from 'react';
import _ from 'lodash';
import Tab from '../sui-tab';
import TabSelector from '../sui-tab-selector';

export default class TabbedContent extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      items: this.props.blocks.map((item) => {
                item.id = _.camelCase(item.title);
                return item;
              })
    };
  }

  handleSelect(evt) {
    evt.preventDefault();
    this.setState({
      items: this.state.items.map((item) => {
               item.selected = evt.target.hash === `#${item.id}`;
               return item;
             })
    });
  }

  render() {
    const tabs = this.props.blocks.map((item, index) => {
      return (
        <TabSelector id={item.id} title={item.title} key={index} active={item.selected} onSelect={this.handleSelect.bind(this)} />
        );
    });

    const sections = this.props.blocks.map((item, index) => {
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
