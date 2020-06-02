import React from 'react';
import { Card, Divider, Pagination } from 'antd';

// 总数，totalPages，当前页，每页条数

const MySpace = () => {
  return (
    <Card style={{ height: 2000 }}>
      <Pagination size="small" total={98}>
        adfas
      </Pagination>
      <Divider />
      <Pagination total={98}>adfas</Pagination>
      <Divider />
      <Pagination
        total={98}
        showSizeChanger
        onShowSizeChange={(current, pageSize) => console.log(current, pageSize)}
        onChange={(page, pageSize) => console.log(page, pageSize)}
        showTotal={(total, range) => (
          <>
            <span>总记录数{total}</span>
            <Divider type="vertical" />
            <span>
              当前显示 {range[0]}条~{range[1]}条
            </span>
          </>
        )}
      />
      <Divider />
      <Pagination
        total={98}
        hideOnSinglePage={false}
        pageSizeOptions={['10', '50', '100', '200']}
        showSizeChanger
        onShowSizeChange={(current, pageSize) => console.log(current, pageSize)}
        onChange={(page, pageSize) => console.log(page, pageSize)}
        showTotal={(total, range) => (
          <>
            <span>总记录数{total}</span>
            <Divider type="vertical" />
            <span>
              当前显示 {range[0]}条~{range[1]}条
            </span>
          </>
        )}
      />
    </Card>
  );
};

export default MySpace;
