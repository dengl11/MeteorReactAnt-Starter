import { withTracker } from 'meteor/react-meteor-data';
import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { Divider } from 'antd';



export default class Overview extends React.Component {
    render() {
        return (
            
            <div>

            <Divider>Distribution of Number of Topics</Divider>
            <div style={{textAlign: 'center'}}>
            <a href="/img/topic_temporal_dist.png" data-fancybox="images" data-caption="topic_temporal_dist">
            <img src="/img/topic_temporal_dist.png" alt="" />
            </a>
            </div>

            
            <Divider>Distribution of Number of Samples Collected</Divider>
            <div style={{textAlign: 'center'}}>
            <a href="/img/num_sample_temporal_dist.png" data-fancybox="images" data-caption="num_sample_temporal_dist">
            <img src="/img/num_sample_temporal_dist.png" alt="" />
            </a>
            </div>

            </div>
        );
    }
}