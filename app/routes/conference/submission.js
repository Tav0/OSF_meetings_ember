import Ember from 'ember';

export default Ember.Route.extend({

    model() {
//        return this.store.createRecord('node');
        //let meeting = this.store.find('meeting', params.id);
//        let meeting = this.modelFor('conference.index');
//        console.log(meeting.meeting);
//        return meeting;
//        return Ember.RSVP.hash({
//            meeting: meeting,
//            newNode: this.store.createRecord('node'),
//        });
    },

    actions: {
        //saveNodeSubmission(newNode){
        saveNodeSubmission(title, contributors, description, keywords){
            let newNode = this.store.createRecord('node', {
                title : title,
                contributors : contributors,
                description : description,
                keywords : keywords
            });
            let models = this.modelFor('conference.index');
            newNode.save();
            this.transitionTo('conference.index', models.meeting.id);
        },

        filesUpload(dropzone) {
            console.log(dropzone);
        }
    }
});
