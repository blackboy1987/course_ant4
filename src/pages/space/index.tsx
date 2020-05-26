import React from 'react';
import { Card, Button, Space } from 'antd';

const MySpace = () => {
  return (
    <Card>
      <Space size={64}>
        <Button>添加</Button>
        <Button>删除</Button>
        <Button>刷新</Button>
        <Button>禁用</Button>
        <Button>启用</Button>
      </Space>
    </Card>
  );
};

export default MySpace;
