import React, { useState } from 'react';
import { DownOutlined, UpOutlined } from '@ant-design/icons';
import { Card, Dropdown, Button, Menu, Divider } from 'antd';

const menus = (
  <Menu>
    <Menu.Item>菜单1菜单1菜单1菜单1菜单1菜单1菜单1</Menu.Item>
  </Menu>
);

const MySpace = () => {
  const [visible, setVisible] = useState(false);

  return (
    <Card>
      <Dropdown overlay={menus} trigger="hover" placement="topLeft">
        <Button>更多</Button>
      </Dropdown>
      <Divider />
      <Dropdown overlay={menus} placement="topLeft" onVisibleChange={(flag) => setVisible(flag)}>
        <Button>更多 {visible ? <UpOutlined /> : <DownOutlined />}</Button>
      </Dropdown>
    </Card>
  );
};

export default MySpace;
