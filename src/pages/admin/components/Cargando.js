import React from "react";
import { Layout, Spin, Space } from "antd";

export default function Cargando() {
  return (
    <Layout style={{ height: "100vh" }}>
      <Space size="middle">
        <Spin size="small" />
        <Spin />
        <Spin size="large" />
      </Space>
      ,
    </Layout>
  );
}
