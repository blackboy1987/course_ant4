import React, { useState } from 'react';

import { message, Typography } from 'antd';

const MyTypography = () => {
  const [text, setText] = useState('我是标题');

  return (
    <div>
      <Typography.Title
        copyable={{
          text: '我才是真实复制的内容',
          onCopy: () => message.success('复制成功'),
        }}
      >
        我是标题
      </Typography.Title>

      <Typography.Title
        editable={{
          onStart: () => message.success('开始编辑'),
          onChange: (value) => setText(value),
        }}
      >
        {text}
      </Typography.Title>
      <div style={{ width: 300 }}>
        <Typography.Text ellipsis>
          阿斯顿发撒阿斯顿发撒阿斯顿发撒阿斯顿发撒阿斯顿发撒阿斯顿发撒阿斯顿发撒阿斯顿发撒阿斯顿发撒阿斯顿发撒阿斯顿发撒阿斯顿发撒阿斯顿发撒阿斯顿发撒阿斯顿发撒阿斯顿发撒阿斯顿发撒阿斯顿发撒阿斯顿发撒阿斯顿发撒阿斯顿发撒阿斯顿发撒阿斯顿发撒阿斯顿发撒阿斯顿发撒阿斯顿发撒阿斯顿发撒阿斯顿发撒阿斯顿发撒
        </Typography.Text>
      </div>
    </div>
  );
};

export default MyTypography;
