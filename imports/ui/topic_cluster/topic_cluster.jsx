import React from 'react';
import PropTypes from 'prop-types';
import { TopicCluster } from '../../db/collections.js'
import { Input, AutoComplete, Icon, Table} from 'antd'

export default class TopicClusterComponent extends React.Component {
    
    state = {
        selector_dataSource: [],
        table_dataSource: []
    }

    selected = null

    columns = [{
        title: '',
        dataIndex: 'distance',
        key: 'distance',
      }, {
        title: 'Neighbors',
        dataIndex: 'neighbors',
        key: 'neighbors',
      }];
    
    handleSearch = (value) => {
        this.selected = null;
        value = value.toLowerCase();
        this.setState({
            selector_dataSource: value ? this.props.all_topics.filter((x)=>x.toLowerCase().startsWith(value)) : []
        });
    };


    onSelectTopic = (value) => {
        var obj = TopicCluster.findOne({"Topic": value});
        this.selected = obj;
        this.setState({table_datasource: obj.Neighbors.map((x, i) => {
            return {
                distance: i+1,
                neighbors: x.map((t)=>'(' + t + ')').join(' | '), 
                key: i+1
            };
        })});
    }
    

    render() {
        return (
            <div style={{marginTop: '8em'}}>

            <AutoComplete dataSource={this.state.selector_dataSource}
            style={{width:"100%"}} 
            onSearch={this.handleSearch}
            onSelect={this.onSelectTopic}
            placeholder="Search for Toic">
            <Input suffix={<Icon type="search" />} />
            </AutoComplete>
            {
                this.selected ? <Table dataSource={this.state.table_datasource} pagination={false} columns={this.columns} /> : null
            }
            

            </div>
        );
    }
}

TopicClusterComponent.propTypes = {
    all_topics: PropTypes.array,
};
