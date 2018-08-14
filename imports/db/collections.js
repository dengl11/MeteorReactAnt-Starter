import { Meteor } from 'meteor/meteor'

export const Stdout = new Mongo.Collection('stdout');
export const TopicCluster = new Mongo.Collection('topicCluster');
export const DayRatio = new Mongo.Collection('dayRatio');

