
import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  title: faker.list.cycle('Analyzing patients records','Repeatability and Benefaction in Computer Systems Research','Social Network Analysis using Genetic Algorithms'),
  conference: faker.list.cycle('ASONAM 2016','ASEE 2015','ICCT 2016'),
  reviewdeadline:faker.list.cycle('5/5/2016','2/27/2015','6/30/2016'),
  reviewer: faker.list.cycle('Tom Adams','Chris David','Rana Jumail','Dan Lewis'),
  status:   faker.list.cycle('Saved Draft','Completed','Not Started')

});
