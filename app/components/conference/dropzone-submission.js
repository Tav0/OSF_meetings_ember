import Ember from 'ember';

export default Ember.Component.extend({
    _getDropzoneInstance() {
        let dropzoneInstance = Dropzone.instances[0];
        return dropzoneInstance ? dropzoneInstance : null;
    },

    actions: {
        uploadFiles() {
            let dropzoneInstance = this._getDropzoneInstance();

            if (dropzoneInstance) {
                dropzoneInstance.processQueue();
            }

            this.send("filesUpload", this);
        },
    }
});
