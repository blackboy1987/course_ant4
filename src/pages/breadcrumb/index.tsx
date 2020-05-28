import React from 'react';
import { RightOutlined, AppleOutlined } from '@ant-design/icons';
import { Card, Breadcrumb } from 'antd';

const MySpace = () => {
  return (
    <Card>
      <Breadcrumb separator={<RightOutlined />}>
        <Breadcrumb.Item>
          <AppleOutlined /> home
        </Breadcrumb.Item>
        <Breadcrumb.Item>article</Breadcrumb.Item>
        <Breadcrumb.Item>detail</Breadcrumb.Item>
      </Breadcrumb>
    </Card>
  );
};

export default MySpace;
