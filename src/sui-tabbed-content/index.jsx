import React from 'react';
import _ from 'lodash';

export default class TabbedContent extends React.Component {
  render() {
    const tabs = this.props.blocks.map((item, index) => {
      return (
        <li className={item.selected && 'sui-tabbedContent'} key={index}>
          <a href={`#${_.camelCase(item.title)}`}>{item.title}</a>
        </li>
        );
    });

    const sections = this.props.blocks.map((item, index) => {
      return (
        <section id={`#${_.camelCase(item.title)}`} key={index}>
          {item.component}
        </section>
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
