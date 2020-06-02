import React, { useState } from 'react';
import { Card, AutoComplete, Divider } from 'antd';
import { DataSourceItemType } from 'antd/lib/auto-complete';

const { Option } = AutoComplete;

interface DataSource1 {
  id: number;
  title: string;
}

const dataSource1: DataSource1[] = [
  {
    id: 1,
    title: '男鞋',
  },
  {
    id: 2,
    title: '女鞋',
  },
  {
    id: 3,
    title: '裙子',
  },
];

const MySpace = () => {
  const [dataSource, setDataSource] = useState<DataSourceItemType[]>([]);
  const [items, setItems] = useState<DataSourceItemType[]>([]);
  const [item1s, setItem1s] = useState<DataSource1[]>([]);
  const onSearch = () => {
    setDataSource(['a', 'ab', 'c', 'cd']);
  };

  const onSelect = (value: string) => {
    setItems([...items, value]);
  };

  const onSelect1 = (value: DataSourceItemType) => {
    setItem1s([
      ...item1s,
      // @ts-ignore
      ...dataSource1.filter((item) => item.id === value),
    ]);
  };

  const remove = (value: DataSourceItemType) => {
    setItems([...items.filter((item) => item !== value)]);
  };

  return (
    <Card style={{ height: 2000 }}>
      <AutoComplete style={{ width: '100%' }} dataSource={dataSource} onSearch={onSearch} />
      <Divider />
      <AutoComplete
        style={{ width: '100%' }}
        dataSource={dataSource}
        onSearch={onSearch}
        onSelect={onSelect}
      />
      {items.map((item) => (
        <div>
          {item}
          <span onClick={() => remove(item)}>移除</span>
        </div>
      ))}
      <Divider />
      <AutoComplete
        style={{ width: '100%' }}
        optionLabelProp="text"
        value=""
        // @ts-ignore
        dataSource={[...dataSource1.map((item) => <Option value={item.id}>{item.title}</Option>)]}
        onSearch={onSearch}
        onSelect={onSelect1}
      />
      {item1s.map((item: DataSource1) => (
        <div>{item.title}</div>
      ))}
    </Card>
  );
};

export default MySpace;
