import React from 'react';
import pascalCase from 'pascal-case';

export default class TabbedContent extends React.Component {
  render() {
    const tabs = this.props.blocks.map((item, index) => {
      return (
        <li className={item.selected && 'sui-tabbedContent'} key={index}>
          <a href={`#${pascalCase(item.title)}`}>{item.title}</a>
        </li>
        );
    });

    const sections = this.props.blocks.map((item, index) => {
      return (
        <section id={`#${pascalCase(item.title)}`} key={index}>
          {item.component}
        </section>
      );
    })

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
}
