import React from 'react';
import Tab from '../sui-tab';
import TabSelector from '../sui-tab-selector';

export default class TabbedContent extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      selectedIndex: this.props.blocks.length > 0 && `#${this.props.blocks[0].id}`
    };
  }

  handleSelect(evt) {
    evt.preventDefault();

    this.setState({
      selectedIndex: evt.target.hash
    });
  }

  render() {
    const tabs = this.props.blocks.map((item, index) => {
      return (
        <TabSelector id={item.id} title={item.title} key={index} active={`#${item.id}` === this.state.selectedIndex} onSelect={this.handleSelect.bind(this)} />
        );
    });

    const sections = this.props.blocks.map((item, index) => {
      return (
        <Tab id={item.id} key={index} active={`#${item.id}` === this.state.selectedIndex}>
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
