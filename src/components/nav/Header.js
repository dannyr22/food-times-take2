import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom'
import { UserContext } from '../../contexts/UserContext'
import { Menu } from 'antd';
import { UserOutlined, LogoutOutlined, SettingOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router-dom';


const Header = () => {
  const history = useHistory()
  const { isLoggedIn, setIsLoggedIn } = useContext(UserContext);
  const [current, setCurrent] = useState('mail')

  const handleClick = (e) => {
    setCurrent(e.key)
  }

  const handleLogout = () => {
    setIsLoggedIn(false)
    history.push("/")
  }


  return isLoggedIn ? (
    <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
    <Menu.Item key="mail" icon={<UserOutlined />} className="float-right">
      <Link to="/">Account</Link>
    </Menu.Item>
      <Menu.Item key="app" icon={<SettingOutlined />} className="float-right">
      Settings
    </Menu.Item>
      <Menu.Item key="logout" icon={<LogoutOutlined />} className="float-right" onClick={handleLogout}>
      logout
    </Menu.Item>
      <Menu.Item key="cart" icon={<ShoppingCartOutlined />} className="float-right" >
      <Link to="/cart">Cart</Link>
    </Menu.Item>
   
  </Menu>
  ) : null;
}

export default Header
