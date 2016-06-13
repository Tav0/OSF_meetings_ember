
import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  title: faker.list.cycle('Analyzing patients records','Social Network Analysis using Genetic Algorithms','Reproducibility Issues in Computer Science'),
  conference: faker.list.cycle('ASONAM 2016','ASEE 2015','ICCT 2016'),
  reviewdeadline:faker.list.cycle('5-5-2016','1-8-2015','9-5-2016'),
  reviewer: faker.list.cycle('Tom Adams','Chris David','Rana Jumail','Dan Lewis'),
  status:   faker.list.cycle('Saved Draft','Completed','Not Started')

});
