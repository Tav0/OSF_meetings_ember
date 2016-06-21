import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return Ember.RSVP.hash({
            node: this.store.createRecord('node', {
                title: '',
                description: '',
                tags: '',
                category: 'project',
            }),
            conference: this.modelFor('conference.index'),
        });
    },
    actions: {
        saveNodeSubmission(newNode){
            var newNodeTitle = newNode.get('title');
            var newNodeDescription = newNode.get('description');
            var newNodeTags = newNode.get('tags');

            if ((newNodeTitle.length >= 3) &&
                (newNodeDescription.length >= 6))  
            {
                newNode.save();
                let conference = this.modelFor('conference.index');
                this.transitionTo('conference.index.index', conference.id);
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
