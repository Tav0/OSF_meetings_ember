import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return this.store.createRecord('node', {
            conference: this.modelFor('conference.index'),
            tags: [],
        });
    },
    actions: {
        saveNodeSubmission(newNode, title, contributors, description, tags){
            this.get('controller').send('resetErrorMessages');
            if ((title.length >= 3) &&
                    (title.length >= 3) &&
                    (title.length >= 6))  {

                let conferenceModel = this.modelFor('conference.index');
                    newNode.setProperties({
                    title: title,
                    description: description,
                    category: 'project',
                    conference: conferenceModel,
                    tags: tags.toString(),
                });
                document.getElementById("fileSubmission").reset();
                newNode.save();
                this.transitionTo('conference.index.index', conferenceModel.id);
            }

            else {
                var controlErrors = this.controllerFor('conference.index.submission');
                controlErrors.send('displayErrors');
            }
        },

        cancelSubmission(node)
        {
            let conferenceModel = this.modelFor('conference.index');
            node.setProperties({
                id: 0
            });
            node.destroyRecord();
            this.transitionTo('conference.index.index', conferenceModel.id);
        }
    }
});
