import React, { useContext } from 'react';
import { AppBar, Tabs, Tab } from '@material-ui/core';
import withWidth from '@material-ui/core/withWidth';
import AppContext from '../../context';

const Footer = ({ width }) => {
  const value = useContext(AppContext);

  const { handleCategorySelected } = value;

  const { category, muscles } = value;

  const getIndex = () => {

    return category ? muscles.findIndex(muscle => muscle === category) + 1 : 0;
  }

  const onIndexSelect = (e, index) => {

    handleCategorySelected(index === 0 ? '' : muscles[index - 1]);
  }

  return (
    <AppBar position='static'>
      <Tabs
        value={getIndex()}
        onChange={onIndexSelect}
        indicatorColor="secondary"
        textColor="secondary"
        centered={width !== 'xs'}
        variant={width === 'xs' ? 'scrollable' : 'standard'}
        scrollButtons="on"
      >
        <Tab key='all' label="All" />
        {muscles.map(muscle => (
          <Tab key={muscle} label={muscle} />
        ))}
      </Tabs>
    </AppBar>
  )
}

export default withWidth()(Footer);
