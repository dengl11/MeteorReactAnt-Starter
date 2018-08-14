import React from 'react';
import PropTypes from 'prop-types';
import { TopicCluster } from '../../db/collections.js'
import { Input, AutoComplete, Icon, Table} from 'antd'
import { ResponsiveLine } from '@nivo/line'

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
            
            <div style={{ height: 400 }}>
            <ResponsiveLine
            data= {[
                {
                  "id": "whisky",
                  "color": "hsl(2, 70%, 50%)",
                  "data": [
                    {
                      "color": "hsl(132, 70%, 50%)",
                      "x": "SE",
                      "y": 51
                    },
                    {
                      "color": "hsl(143, 70%, 50%)",
                      "x": "GD",
                      "y": 46
                    },
                    {
                      "color": "hsl(203, 70%, 50%)",
                      "x": "VE",
                      "y": 4
                    },
                    {
                      "color": "hsl(74, 70%, 50%)",
                      "x": "GS",
                      "y": 33
                    },
                    {
                      "color": "hsl(274, 70%, 50%)",
                      "x": "TM",
                      "y": 5
                    },
                    {
                      "color": "hsl(238, 70%, 50%)",
                      "x": "PS",
                      "y": 6
                    },
                    {
                      "color": "hsl(274, 70%, 50%)",
                      "x": "DE",
                      "y": 14
                    },
                    {
                      "color": "hsl(244, 70%, 50%)",
                      "x": "TR",
                      "y": 12
                    },
                    {
                      "color": "hsl(41, 70%, 50%)",
                      "x": "AQ",
                      "y": 48
                    }
                  ]
                },
                {
                  "id": "rhum",
                  "color": "hsl(180, 70%, 50%)",
                  "data": [
                    {
                      "color": "hsl(183, 70%, 50%)",
                      "x": "SE",
                      "y": 37
                    },
                    {
                      "color": "hsl(292, 70%, 50%)",
                      "x": "GD",
                      "y": 49
                    },
                    {
                      "color": "hsl(354, 70%, 50%)",
                      "x": "VE",
                      "y": 31
                    },
                    {
                      "color": "hsl(30, 70%, 50%)",
                      "x": "GS",
                      "y": 21
                    },
                    {
                      "color": "hsl(318, 70%, 50%)",
                      "x": "TM",
                      "y": 44
                    },
                    {
                      "color": "hsl(203, 70%, 50%)",
                      "x": "PS",
                      "y": 46
                    },
                    {
                      "color": "hsl(22, 70%, 50%)",
                      "x": "DE",
                      "y": 41
                    },
                    {
                      "color": "hsl(301, 70%, 50%)",
                      "x": "TR",
                      "y": 37
                    },
                    {
                      "color": "hsl(226, 70%, 50%)",
                      "x": "AQ",
                      "y": 0
                    }
                  ]
                },
                {
                  "id": "gin",
                  "color": "hsl(169, 70%, 50%)",
                  "data": [
                    {
                      "color": "hsl(223, 70%, 50%)",
                      "x": "SE",
                      "y": 10
                    },
                    {
                      "color": "hsl(161, 70%, 50%)",
                      "x": "GD",
                      "y": 29
                    },
                    {
                      "color": "hsl(311, 70%, 50%)",
                      "x": "VE",
                      "y": 60
                    },
                    {
                      "color": "hsl(301, 70%, 50%)",
                      "x": "GS",
                      "y": 18
                    },
                    {
                      "color": "hsl(326, 70%, 50%)",
                      "x": "TM",
                      "y": 41
                    },
                    {
                      "color": "hsl(209, 70%, 50%)",
                      "x": "PS",
                      "y": 33
                    },
                    {
                      "color": "hsl(111, 70%, 50%)",
                      "x": "DE",
                      "y": 11
                    },
                    {
                      "color": "hsl(298, 70%, 50%)",
                      "x": "TR",
                      "y": 14
                    },
                    {
                      "color": "hsl(6, 70%, 50%)",
                      "x": "AQ",
                      "y": 23
                    }
                  ]
                },
                {
                  "id": "vodka",
                  "color": "hsl(247, 70%, 50%)",
                  "data": [
                    {
                      "color": "hsl(342, 70%, 50%)",
                      "x": "SE",
                      "y": 60
                    },
                    {
                      "color": "hsl(53, 70%, 50%)",
                      "x": "GD",
                      "y": 35
                    },
                    {
                      "color": "hsl(237, 70%, 50%)",
                      "x": "VE",
                      "y": 41
                    },
                    {
                      "color": "hsl(134, 70%, 50%)",
                      "x": "GS",
                      "y": 22
                    },
                    {
                      "color": "hsl(343, 70%, 50%)",
                      "x": "TM",
                      "y": 32
                    },
                    {
                      "color": "hsl(295, 70%, 50%)",
                      "x": "PS",
                      "y": 11
                    },
                    {
                      "color": "hsl(238, 70%, 50%)",
                      "x": "DE",
                      "y": 41
                    },
                    {
                      "color": "hsl(66, 70%, 50%)",
                      "x": "TR",
                      "y": 55
                    },
                    {
                      "color": "hsl(38, 70%, 50%)",
                      "x": "AQ",
                      "y": 7
                    }
                  ]
                },
                {
                  "id": "cognac",
                  "color": "hsl(104, 70%, 50%)",
                  "data": [
                    {
                      "color": "hsl(327, 70%, 50%)",
                      "x": "SE",
                      "y": 54
                    },
                    {
                      "color": "hsl(349, 70%, 50%)",
                      "x": "GD",
                      "y": 25
                    },
                    {
                      "color": "hsl(179, 70%, 50%)",
                      "x": "VE",
                      "y": 11
                    },
                    {
                      "color": "hsl(18, 70%, 50%)",
                      "x": "GS",
                      "y": 17
                    },
                    {
                      "color": "hsl(232, 70%, 50%)",
                      "x": "TM",
                      "y": 10
                    },
                    {
                      "color": "hsl(111, 70%, 50%)",
                      "x": "PS",
                      "y": 24
                    },
                    {
                      "color": "hsl(92, 70%, 50%)",
                      "x": "DE",
                      "y": 17
                    },
                    {
                      "color": "hsl(294, 70%, 50%)",
                      "x": "TR",
                      "y": 9
                    },
                    {
                      "color": "hsl(247, 70%, 50%)",
                      "x": "AQ",
                      "y": 43
                    }
                  ]
                }
              ]}
            margin={{
                "top": 50,
                "right": 110,
                "bottom": 50,
                "left": 60
            }}
            minY="auto"
            stacked={true}
            axisBottom={{
                "orient": "bottom",
                "tickSize": 5,
                "tickPadding": 5,
                "tickRotation": 0,
                "legend": "country code",
                "legendOffset": 36,
                "legendPosition": "center"
            }}
            axisLeft={{
                "orient": "left",
                "tickSize": 5,
                "tickPadding": 5,
                "tickRotation": 0,
                "legend": "count",
                "legendOffset": -40,
                "legendPosition": "center"
            }}
            dotSize={10}
            dotColor="inherit:darker(0.3)"
            dotBorderWidth={2}
            dotBorderColor="#ffffff"
            enableDotLabel={true}
            dotLabel="y"
            dotLabelYOffset={-12}
            animate={true}
            motionStiffness={90}
            motionDamping={15}
            legends={[
                {
                    "anchor": "bottom-right",
                    "direction": "column",
                    "translateX": 100,
                    "itemWidth": 80,
                    "itemHeight": 20,
                    "symbolSize": 12,
                    "symbolShape": "circle"
                }
            ]}
            />
            </div>
            </div>
        );
    }
}

TopicClusterComponent.propTypes = {
    all_topics: PropTypes.array,
};
