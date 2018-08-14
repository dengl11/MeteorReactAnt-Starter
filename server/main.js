import { Meteor } from 'meteor/meteor';
import { Stdout } from '/imports/db/collections.js'

Meteor.methods({
  'add'(){
      Stdout.insert({
          data : 999
      });
  },
});