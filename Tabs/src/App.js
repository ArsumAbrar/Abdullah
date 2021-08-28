import React,{useState} from 'react'
import {Route, Switch,Link} from 'react-router-dom'
import { Menu } from 'antd';
import { MailOutlined, AppstoreOutlined } from '@ant-design/icons';
import TabOne from './BarComp/TabOne'
import TabThree from './BarComp/TabThree'
import TabTwo from './BarComp/TabTwo'
import TabFour from './BarComp/TabFour';

const App = () => {
  const [val, setVal] = useState('one')
  
  const handleClick = (e) =>{
      setVal(e.key)
      //console.log(val)
  }

  return (
    <>
    <Menu onClick={handleClick} selectedKeys={val} mode="horizontal">
        <Menu.Item key="one" icon={<MailOutlined />}>
          <Link to={'/one/1'} val={'one'}>Coin</Link>
        </Menu.Item>
        <Menu.Item key="two" icon={<AppstoreOutlined />}>
        <Link to={'/two/2'}>Market</Link>
        </Menu.Item>
        <Menu.Item key="three" icon={<AppstoreOutlined />}>
        <Link to={'/three/3'}>Exchange</Link>
        </Menu.Item>
        <Menu.Item key="four" icon={<AppstoreOutlined />}>
        <Link to={'/four'}>Component</Link>
        </Menu.Item>
      </Menu>
      <Switch>
        <Route exact path="/one/:id" component={TabOne} />
        <Route exact path="/two/:id" component={TabTwo} />
        <Route exact path="/three/:id" component={TabThree}/>
        <Route exact path="/four" component={TabFour}/>
      </Switch>

    </>
  )
}

export default App