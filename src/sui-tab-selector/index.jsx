import React from 'react';
import cx from 'classnames';

export default class TabSelector extends React.Component {
  render(){
    const tabSelectorClass = cx('sui-TabSelector-link', {
      'sui-TabSelector-link--active': this.props.active
    });

    return (
      <li className='sui-TabSelector'>
        <a className={tabSelectorClass} href={`#${this.props.id}`} onClick={this.props.onSelect}>
          {this.props.title}
        </a>
      </li>
    );
  }
}

TabSelector.propTypes = {
  active: React.PropTypes.bool,
  title: React.PropTypes.string,
  id: React.PropTypes.string,
  onSelect: React.PropTypes.func
};
