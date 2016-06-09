import { Factory } from 'ember-cli-mirage';
import Mirage, { faker } from 'ember-cli-mirage';

export default Factory.extend({
  title() { return  faker.company.companyName(); },
  website() {return faker.internet.url();},
  city() {return faker.address.city();},
  state(){ return faker.address.state();},
  country(){return faker.address.country();},
  keywords() {return [faker.random.word(), faker.random.word(),faker.random.word(),faker.random.word(),faker.random.word()]; },
  description() {return faker.lorem.paragraphs(2);},
  startDate() {return faker.date.past();},
  endDate() {return faker.date.future();},
  logo() {return faker.random.image();}//Dates need to be added later on

});
