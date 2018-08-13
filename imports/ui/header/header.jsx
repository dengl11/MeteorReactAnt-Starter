import { Layout, Menu, Breadcrumb } from 'antd';
import React, { Component } from 'react';

const { Header, Content, Footer } = Layout;

export default class SiteHeader extends Component {

    render() {
        return (
            <Layout>
                <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
                    <div className="logo" />
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={['2']}
                        style={{ lineHeight: '64px' }}
                    >
                        <Menu.Item key="overview">Overview</Menu.Item>
                        <Menu.Item key="cluster">Topic Cluster</Menu.Item>
                        <Menu.Item key="entity">Entity Distribution</Menu.Item>
                    </Menu>
                </Header>
                {/* <Content style={{ padding: '0 50px', marginTop: 64 }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>Cluster</Breadcrumb.Item>
                        <Breadcrumb.Item>List</Breadcrumb.Item>
                    </Breadcrumb>
                    <div style={{ background: '#fff', padding: 24, minHeight: 380 }}>Content</div>
                </Content> */}
            </Layout>
            );
    } 
}
