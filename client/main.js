import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import {ShareJS} from 'meteor/mizzao:sharejs'
import '/imports/collections.js';
import './main.html';


Template.editor.helpers({
  doc_id : function(){
    if(Documents.findOne())
      return Documents.findOne()._id;
  },

  config: function(){
    return function(editor){
      editor.on('change', function(cm_editor,info){
          $('#viewer_content').contents().find('html').html(cm_editor.getValue());
      });
    }
   }
});

Template.editor.events({

});
