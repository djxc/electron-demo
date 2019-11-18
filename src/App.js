import React from 'react';
import logo from './logo.svg';
import {DatePicker} from 'antd'
import zhCN from 'antd/es/locale/zh_CN'
import moment from 'moment'
import 'moment/locale/zh-cn'
import './App.css';
import 'antd/dist/antd.css'

moment.locale('zh-cn')

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

		<DatePicker/>
      </header>
    </div>
  );
}

export default App;
