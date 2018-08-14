import { Layout, Menu } from 'antd';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink, withRouter } from 'react-router-dom';

const { Header, Content, Footer } = Layout;

class SiteHeader extends Component {
    
    linkTo(item) {
    }
    
    render() {
        return (
            <Layout>
            <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
            <div className="logo" />
            <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['cluster']}
            style={{ lineHeight: '64px' }}
            onClick={this.linkTo}
            >
            <Menu.Item key="/">
            <NavLink to="/"> Overview </NavLink>
            </Menu.Item>
            
            <Menu.Item key="/cluster">
            <NavLink to="/cluster"> Topic Cluster </NavLink>
            </Menu.Item>
            
            <Menu.Item key="entity">Entity Distribution</Menu.Item>
            </Menu>
            </Header>
            </Layout>
        );
    } 
}

// export default SiteHeader;
export default withRouter(SiteHeader);