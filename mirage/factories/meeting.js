import { Factory } from 'ember-cli-mirage';

export default Factory.extend({
  title(i) { return  `Conference ${i}` },
  website: 'meetingWebsite',
  city: 'meetingCity',
  state: 'meetingState',
  country: 'meetingCountry',
  keywords() { return ['key1', 'key2']; },
  description: 'meetingDescription'
  //Dates need to be added later on

});
