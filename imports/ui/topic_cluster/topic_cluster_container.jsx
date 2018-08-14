import { Meteor } from 'meteor/meteor';
import TopicClusterComponent from '../topic_cluster/topic_cluster.jsx';
import { withTracker } from 'meteor/react-meteor-data';
import { TopicCluster } from '/imports/db/collections.js';

export default TopicClusterContainer = withTracker(({ id }) => {
    return {
        all_topics: TopicCluster.find({}, {fields: {'Topic':1}}).fetch().map((x)=>x.Topic),
    };
})(TopicClusterComponent);
