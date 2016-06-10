import { Factory } from 'ember-cli-mirage';
import Mirage, { faker } from 'ember-cli-mirage';

export default Factory.extend({
	title(){ return faker.company.catchPhrase(); },
	type: 'nodes',
	description(){return faker.lorem.sentences(3);},
	category(){return faker.company.bsNoun();},
  tags() {return [faker.random.word(), faker.random.word(),faker.random.word(),faker.random.word(),faker.random.word()]; },
	public: false,
	contributors(){return faker.name.findName();}
});
