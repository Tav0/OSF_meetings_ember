
  import Ember from 'ember';

export default Ember.Controller.extend({
  isshowingInvite: false,
  isshowingBio: false,
  reviewerInfo: '',
  msgtemplate: '' +
  ' Dear Prof. Tom,\n\n' +
    'I am writing to invite you to review a manuscript for ASONAM 2016 entitled Analyzing patients health records (AS-213).\n'+
    'If you accept this assignment, you are confirming that you have no competing interests that may affect your ability to provide an objective evaluation. Our Competing Interests policy can be found at here.\n'+
    'By agreeing to review, you are also committing to a confidential review process.\n'+
    'Please do not share this manuscript with anyone who is not directly involved in the review process, including colleagues and other experts in the field.\n'+
    'Reviewers may not share or act upon any confidential information gained in the review process.\n'+
    'After publication, reviewers may only use publicly published data (i.e. the contents of the published article) and not information from any earlier drafts, unless they have obtained permission from the authors.\n'+
    'If you ACCEPT to review this paper, please click the following link: I would appreciate receiving your review within 7 calendar days of your acceptance.\n'+
    'If you decline to review this paper, please click the following link Decline to Review\n'+
     'If you have any questions or concerns, please contact us at reviews@osf.io\n\n'+
     'Academic Editor',
     actions: {
    showdata() {
      this.set('isshowingInvite', true);
    },

    hidedata()  {
      this.set('isshowingInvite', false);
    },

    storereviewerInfo(id){
      this.set('isshowingBio',true);
      this.set('reviewerInfo',this.store.findRecord('reviewer', id));


    }
  }
});
