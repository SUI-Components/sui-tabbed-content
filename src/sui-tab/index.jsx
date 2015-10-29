import React from 'react';
import cx from 'classnames';

export default class Tab extends React.Component {
  render(){
    const tabClass = cx('sui-Tab', {
      'sui-Tab--active': this.props.active
    });

    return (
      <section id={this.props.id} className={tabClass}>
        {this.props.children}
      </section>
    );
  }
}

Tab.propTypes = {
  active: React.PropTypes.bool,
  id: React.PropTypes.string,
  children: React.PropTypes.any
};
