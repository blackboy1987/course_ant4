import React from 'react';

import { AccountBookFilled } from '@ant-design/icons';

import { Button, ConfigProvider } from 'antd';

const MyButton = () => (
  <ConfigProvider autoInsertSpaceInButton={false}>
    <Button type="primary" danger>
      爱尚
    </Button>
    <br />
    <Button icon={<AccountBookFilled />} type="primary">
      爱尚
    </Button>
    <br />
    <Button type="primary" disabled>
      爱尚
    </Button>
    <br />
    <Button type="primary">爱尚</Button>
  </ConfigProvider>
);

export default MyButton;
