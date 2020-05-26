import React from 'react';
import { Row, Card, Col, Divider, Button } from 'antd';

const MyGrid = () => {
  return (
    <Card>
      <Row gutter={64}>
        <Col style={{ border: 'solid 1px red' }} span={8}>
          爱尚学院
        </Col>
        <Col style={{ border: 'solid 1px red' }} span={8}>
          爱尚学院
        </Col>
        <Col style={{ border: 'solid 1px red' }} span={8}>
          爱尚学院
        </Col>
        <Col style={{ border: 'solid 1px red' }} span={8}>
          爱尚学院
        </Col>
      </Row>
      <Divider />
      <Row>
        <Col style={{ border: 'solid 1px red' }} span={8}>
          爱尚学院
        </Col>
        <Col style={{ border: 'solid 1px red' }} span={8}>
          爱尚学院
        </Col>
        <Col style={{ border: 'solid 1px red' }} span={8}>
          爱尚学院
        </Col>
        <Col style={{ border: 'solid 1px red' }} span={8}>
          爱尚学院
        </Col>
      </Row>
      <Divider />
      <Row>
        <Col style={{ border: 'solid 1px red' }} span={8}>
          111
        </Col>
        <Col style={{ border: 'solid 1px red' }} span={2} pull={8}>
          <Button>查询</Button>
        </Col>
      </Row>

      <Divider />
      <Row>
        <Col style={{ border: 'solid 1px red' }} xs={24} sm={12} md={8} lg={6} xl={4} xxl={3}>
          111
        </Col>
        <Col style={{ border: 'solid 1px red' }} xs={24} sm={12} md={8} lg={6} xl={4} xxl={3}>
          222
        </Col>
        <Col style={{ border: 'solid 1px red' }} xs={24} sm={12} md={8} lg={6} xl={4} xxl={3}>
          333
        </Col>
        <Col style={{ border: 'solid 1px red' }} xs={24} sm={12} md={8} lg={6} xl={4} xxl={3}>
          444
        </Col>
        <Col style={{ border: 'solid 1px red' }} xs={24} sm={12} md={8} lg={6} xl={4} xxl={3}>
          555
        </Col>
        <Col style={{ border: 'solid 1px red' }} xs={24} sm={12} md={8} lg={6} xl={4} xxl={3}>
          666
        </Col>
        <Col style={{ border: 'solid 1px red' }} xs={24} sm={12} md={8} lg={6} xl={4} xxl={3}>
          777
        </Col>
        <Col style={{ border: 'solid 1px red' }} xs={24} sm={12} md={8} lg={6} xl={4} xxl={3}>
          888
        </Col>
      </Row>
    </Card>
  );
};

export default MyGrid;
