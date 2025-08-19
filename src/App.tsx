import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, notification, Select } from 'antd';
import dayjs from 'dayjs';

import localeData from 'dayjs/plugin/localeData';
import updateLocale from 'dayjs/plugin/updateLocale';


const { Option } = Select;

dayjs.extend(localeData);
dayjs.extend(updateLocale);
dayjs.updateLocale('en', {
  weekStart: 1,
});


const onClick = () => {
  notification.success({ message: 'Hello' })
}

function App() {

  return (
    <div className="App">
      <Button onClick={onClick}>Click</Button>
    </div>
  );
}

export default App;
