
  import Ember from 'ember';

export default Ember.Controller.extend({


  isshowingInvite: false,
  isshowingBio: false,
  ptitle : null,
  cname : null,
  reviewerInfo: '',
  msgtemplate: '' +
  ' Dear {rname},\n\n' +
    'I am writing to invite you to review a manuscript for {cname} entitled {ptitle}.\n'+
    'If you accept this assignment, you are confirming that you have no competing interests that may affect your ability to provide an objective evaluation. Our Competing Interests policy can be found at here.\n'+
    'By agreeing to review, you are also committing to a confidential review process.\n'+
    'Please do not share this manuscript with anyone who is not directly involved in the review process, including colleagues and other experts in the field.\n'+
    'Reviewers may not share or act upon any confidential information gained in the review process.\n'+
    'After publication, reviewers may only use publicly published data (i.e. the contents of the published article) and not information from any earlier drafts, unless they have obtained permission from the authors.\n'+
    'If you ACCEPT to review this paper, please click the following link: I would appreciate receiving your review within 7 calendar days of your acceptance.\n'+
    'If you decline to review this paper, please click the following link Decline to Review\n'+
     'If you have any questions or concerns, please contact us at reviews@osf.io\n\n'+
     'Academic Editor',
   emailbody: '',

     actions: {

       sendemail(){
         let emailrecord =  this.store.createRecord('email');
         emailrecord.from_email = 'sherif_hany@hotmail.com';
         emailrecord.to_email = 'sherief@vbi.vt.edu';
         emailrecord.message = this.get('emailbody');
         emailrecord.subject  = 'Review Invitation';
         var self = this;
         emailrecord.save().then(function() {

           self.set('isshowingInvite', false);
           document.getElementById('submitAlert').className = "alert-success alert fade in";

           setTimeout(function() {

             self.transitionToRoute('peerdashboard');
           }, 2000);
         });

       },

    showdata(name) {
       var self = this;
      this.store.findRecord('reviewslist', this.get('submission_id')).then(function(tyrion) {
         console.log(name);
         self.set('ptitle',tyrion.get('title'));
        self.set('cname',tyrion.get('conference'));
        console.log(self.get('cname'));
        self.set('isshowingInvite', true);
        self.set('emailbody',self.get('msgtemplate'));
        self.set('emailbody',self.get('msgtemplate').replace("{cname}",self.get('cname')).replace('{ptitle}',self.get('ptitle')).replace('{rname}',name));
      });



    },

    hidedata()  {
      this.set('isshowingInvite', false);
    },

       gotodashboard(){

         this.transitionToRoute('peerdashboard');
       },

    storereviewerInfo(id){
      this.set('isshowingBio',true);
      this.set('reviewerInfo',this.store.findRecord('reviewer', id));


    }
  }
});
