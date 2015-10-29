import React from 'react';

export default class TabbedContent extends React.Component {
  render() {
    return (
      <nav className='sui-TabbedContent'>
        <ul>
            <li className={'sui-TabbedContent--selected'}>
                <a href='#mostSearched'>Lo más buscado</a>
            </li>
            <li>
                <a href='#capitals'>Capitales</a>
            </li>
            <li>
                <a href='#provinces'>Provincias</a>
            </li>
            <li>
                <a href='#islands'>Islas</a>
            </li>
        </ul>
    </nav>
    );
  }
}
