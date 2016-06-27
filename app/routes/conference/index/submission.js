import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return this.store.createRecord('node', {
            conference: this.modelFor('conference.index'),
            tags: [],
        });
    },
    actions: {
        cancelSubmission(node) {
            let conferenceModel = this.modelFor('conference.index');
            node.setProperties({
                id: 0
            });
            node.destroyRecord();
            this.transitionTo('conference.index.index', conferenceModel.id);
        }
    }
});
