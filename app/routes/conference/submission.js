import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {

    model() {
        return this.store.createRecord('node', {
            tags: [],
        });
    },

    actions: {
        saveNodeSubmission(newNode, title, contributors, description, tags){
            if ((document.getElementById('title').value.length >= 3) &&
                    (document.getElementById('contributors').value.length >= 3) &&
                    (document.getElementById('description').value.length >= 6))  {

                let models = this.modelFor('conference.index');
                console.log(tags);
                newNode.setProperties({
                    title: title,
                    description: description,
                    category: 'project',
                    meeting: models.meeting,
                    tags: tags.toString(),
                });

                document.getElementById("fileSubmission").reset();
                newNode.save().then(function(nodeSaved){

                });;
                this.transitionTo('conference.index', models.meeting.id);
            }

            else {
                var controlErrors = this.controllerFor('conference.submission');
                controlErrors.send('displayErrors');
            }
        },

        cancel()
        {
            let models = this.modelFor('conference.index');
            this.transitionTo('conference.index', models.meeting.id);
        },
    }
});
