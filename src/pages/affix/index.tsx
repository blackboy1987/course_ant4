import React from 'react';
import { Affix, Card, Button } from 'antd';

const MySpace = () => {
  return (
    <Card style={{ height: 2000 }}>
      <div style={{ height: 1900 }} />
      <Affix offsetBottom={300} style={{ textAlign: 'right' }}>
        <Button size="large" type="primary" shape="circle">
          test
        </Button>
      </Affix>
    </Card>
  );
};

export default MySpace;
