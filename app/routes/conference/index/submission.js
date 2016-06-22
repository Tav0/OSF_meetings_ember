import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return Ember.RSVP.hash({
            conference: this.modelFor('conference.index'),
            node: this.store.createRecord('node', {
                title: '',
                description: '',
                tags: [],
                category: 'project',
            }),
        });
    },
    actions: {
        saveNodeSubmission(newNode){
            var newNodeTitle = newNode.get('title');
            var newNodeDescription = newNode.get('description');
            if ((newNodeTitle.length >= 3) &&
                (newNodeDescription.length >= 6))  
            {
                let conferenceModel = this.get('model.conference');
                newNode.setProperties({
                    conference: conferenceModel,
                });
                newNode.save();
                this.transitionTo('conference.index.index', conferenceModel.id);
            }

            else {
                var controlErrors = this.controllerFor('conference.index.submission');
                controlErrors.send('displayErrors');
            }
        },

        cancel()
        {
            let models = this.modelFor('conference.index.index');
            this.transitionTo('conference.index.index', models.id);
        }
    }
});
