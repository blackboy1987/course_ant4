import React, { useState } from 'react';
import { Card, Checkbox, Divider } from 'antd';
import { CheckboxValueType } from 'antd/lib/checkbox/Group';

const MySpace = () => {
  const [value, setValue] = useState<CheckboxValueType[]>([]);
  const [indeterminate, setIndeterminate] = useState<boolean>(false);
  const [checked, setChecked] = useState<boolean>(false);
  const onChange = (checkedValue: CheckboxValueType[]) => {
    console.log(checkedValue);
  };

  const checkAll = (e: any) => {
    if (e.target.checked) {
      setValue([1, 2, 3]);
      setChecked(true);
    } else {
      setValue([]);
      setChecked(false);
    }
    setIndeterminate(false);
  };

  const onChange1 = (checkedValue: CheckboxValueType[]) => {
    if (checkedValue.length === 0) {
      setIndeterminate(false);
      setChecked(false);
    } else if (checkedValue.length > 0 && checkedValue.length < 3) {
      setIndeterminate(true);
    } else {
      setChecked(true);
      setIndeterminate(false);
    }
    // @ts-ignore
    setValue(checkedValue);
  };

  return (
    <Card style={{ height: 2000 }}>
      <Checkbox.Group onChange={onChange}>
        <Checkbox value={1}>选项1</Checkbox>
        <Checkbox value={2}>选项2</Checkbox>
        <Checkbox value={3}>选项3</Checkbox>
      </Checkbox.Group>
      <Divider />
      <Checkbox.Group onChange={onChange}>
        <Checkbox value={1}>选项1</Checkbox>
        <Checkbox value={2}>选项2</Checkbox>
        <Checkbox value={3} disabled>
          选项3
        </Checkbox>
      </Checkbox.Group>
      <Divider />

      <Checkbox onChange={checkAll} checked={checked} indeterminate={indeterminate}>
        全选
      </Checkbox>
      <br />
      <Checkbox.Group onChange={onChange1} value={value}>
        <Checkbox value={1}>选项1</Checkbox>
        <Checkbox value={2}>选项2</Checkbox>
        <Checkbox value={3}>选项3</Checkbox>
      </Checkbox.Group>
    </Card>
  );
};

export default MySpace;
