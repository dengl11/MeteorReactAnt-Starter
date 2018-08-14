import React from 'react';
import PropTypes from 'prop-types';
import TopicCluster from '../../db/collections.js'
import { Input, AutoComplete, Icon} from 'antd'

export default class TopicClusterComponent extends React.Component {
    
    state = {
        dataSource: []
    }
    
    handleSearch = (value) => {
        this.setState({
            dataSource: this.props.all_topics.filter((x)=>x.toLowerCase().includes(value))
        });
    };
    
    
    render() {
        const { dataSource } = this.state;
        return (
            <div style={{marginTop: '8em'}}>
            <AutoComplete dataSource={dataSource}
            style={{width:"100%"}} 
            onSearch={this.handleSearch}
            placeholder="Search for Topic">
            <Input suffix={<Icon type="search" />} />
            </AutoComplete>
            </div>
        );
    }
}

TopicClusterComponent.propTypes = {
    all_topics: PropTypes.array,
};
