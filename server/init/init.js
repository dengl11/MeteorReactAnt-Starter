import { Meteor } from 'meteor/meteor';
import { TopicCluster } from '/imports/db/collections.js';

Meteor.startup(()=>{
    init_db();
});

init_db = ()=>{
    var topic_clusters = JSON.parse(Assets.getText("10000_clustering.json"));
    TopicCluster.remove({});
    for (var key in topic_clusters) {
        if (topic_clusters.hasOwnProperty(key)) {
            TopicCluster.insert({"Topic": key, "Neighbors": topic_clusters[key]});
        }
    }

};