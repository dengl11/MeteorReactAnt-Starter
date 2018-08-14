import React, { Component } from 'react';
import { Layout, Menu, Content } from 'antd';
import TopicClusterContainer from './topic_cluster/topic_cluster_container.jsx';
import { Button, Input } from 'antd';

// App component - represents the whole app
export default class App extends Component {
    render() {
        return (
            <div style={{ padding: '0 50px', marginTop: 64 }}>
                <TopicClusterContainer id={100}></TopicClusterContainer> 
            </div> 
        );
    }
}
