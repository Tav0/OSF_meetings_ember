import Ember from 'ember';

export default Ember.Controller.extend({
  items: Ember.A([


    ]),
    actions:{
        addItem: function () {
            let fileName = this.get('gridItemFileName');
            let fileType = this.get('gridItemFileType');
            let fileAuthor = this.get('gridItemAuthor');
            this.get('items').pushObject(
                {
                    name: fileName,
                    type: fileType,
                    author: fileAuthor
                }
            );
        }
    }
});
