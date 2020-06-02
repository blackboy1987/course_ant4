import React, { useState } from 'react';
import { AccountBookFilled } from '@ant-design/icons';

import { Card, Divider, Menu, Button, Space } from 'antd';

const MenuItem = Menu.Item;
const { SubMenu } = Menu;

const MySpace = () => {
  const [collapsed, setCollapsed] = useState(true);

  return (
    <Card style={{ height: 2000 }}>
      <Menu theme="dark" defaultSelectedKeys={['menu1']}>
        <MenuItem key="menu1">菜单1</MenuItem>
        <MenuItem key="menu2">菜单2</MenuItem>
        <MenuItem key="menu3">菜单3</MenuItem>
      </Menu>
      <Divider />
      <Menu mode="horizontal" theme="dark" defaultSelectedKeys={['menu1']}>
        <MenuItem key="menu1">菜单1</MenuItem>
        <MenuItem key="menu2">菜单2</MenuItem>
        <MenuItem key="menu3">菜单3</MenuItem>
      </Menu>
      <Divider />
      <Menu mode="horizontal" theme="dark" defaultSelectedKeys={['menu1']}>
        <MenuItem key="menu1">菜单1</MenuItem>
        <MenuItem key="menu2">菜单2</MenuItem>
        <MenuItem key="menu3">菜单3</MenuItem>
      </Menu>

      <Divider />
      <Space>
        <Button type="primary" onClick={() => setCollapsed(!collapsed)}>
          展开/收起
        </Button>
        <Menu theme="dark" defaultSelectedKeys={['menu1']} inlineCollapsed={collapsed}>
          <MenuItem key="menu1" icon={<AccountBookFilled />}>
            菜单1
          </MenuItem>
          <MenuItem key="menu2" icon={<AccountBookFilled />}>
            菜单2
          </MenuItem>
          <MenuItem key="menu3" icon={<AccountBookFilled />}>
            菜单3
          </MenuItem>
        </Menu>
      </Space>
      <Divider />
      <Menu theme="dark" defaultSelectedKeys={['menu1']} style={{ width: 180 }}>
        <SubMenu title="菜单1">
          <MenuItem key="menu11">菜单11</MenuItem>
          <MenuItem key="menu12">菜单12</MenuItem>
        </SubMenu>
        <MenuItem key="menu2">菜单2</MenuItem>
        <MenuItem key="menu3">菜单3</MenuItem>
      </Menu>
    </Card>
  );
};

export default MySpace;
