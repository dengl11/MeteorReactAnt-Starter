import { Meteor } from 'meteor/meteor';
import { TopicCluster } from '/imports/db/collections.js';
import { DayRatio } from '/imports/db/collections.js';

Meteor.startup(()=>{
    init_db();
});

init_db = ()=>{
    init_cluster();
    init_day_ratio();
};


init_cluster = () => {
    var topic_clusters = JSON.parse(Assets.getText("10000_clustering.json"));
    TopicCluster.remove({});
    for (var key in topic_clusters) {
        if (topic_clusters.hasOwnProperty(key)) {
            TopicCluster.insert({"Topic": key, "Neighbors": topic_clusters[key]});
        }
    } 
}


init_day_ratio = () => {
    var day_ratios = JSON.parse(Assets.getText("10000_topics_day_ratio_by_date.json"));
    DayRatio.remove({});
    for (var key in day_ratios) {
        if (day_ratios.hasOwnProperty(key)) {
            DayRatio.insert({"Topic": key, "DailyRatio": day_ratios[key]});
        }
    } 
}