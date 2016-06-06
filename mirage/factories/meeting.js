import { Factory } from 'ember-cli-mirage';

export default Factory.extend({
  title(i) { return  `Conference ${i}` },
  website: 'meetingWebsite',
  city: 'meetingCity',
  state: 'meetingState',
  country: 'meetingCountry',
  logo: 'Logo?',
  description: 'meetingDescription'
  //Dates need to be added later on

});
