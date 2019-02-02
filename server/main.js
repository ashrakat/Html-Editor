import { Meteor } from 'meteor/meteor';
import '/imports/collections.js';

Meteor.startup(() => {
 if(!Documents.findOne()){
   Documents.insert({
     title: "doc 1",
     content: ""
   });
 }
});
