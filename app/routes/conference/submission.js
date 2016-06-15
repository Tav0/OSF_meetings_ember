import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';


export default Ember.Route.extend(AuthenticatedRouteMixin, {

    model() {},


    actions: {
        saveNodeSubmission(title, contributors, description, keywords){
            if ((document.getElementById('title').value.length >= 3) &&
             (document.getElementById('contributors').value.length >= 3) &&
             (document.getElementById('description').value.length >= 6))  {
                let models = this.modelFor('conference.index');
                let newNode = this.store.createRecord('node', {
                    title : title,
                    description : description,
                    category: 'project',
                    meeting: models.meeting,
                });
                document.getElementById("fileSubmission").reset();
            
                newNode.save();
                this.transitionTo('conference.index', models.meeting.id);
            }

            else {
                var controlErrors = this.controllerFor('conference.submission');
                controlErrors.send('displayErrors');
            }
        },

        filesUpload(dropzone) {
            console.log(dropzone);
        },
        cancel()
        {
          let models = this.modelFor('conference.index');
          this.transitionTo('conference.index', models.meeting.id);
        }
    }
});
