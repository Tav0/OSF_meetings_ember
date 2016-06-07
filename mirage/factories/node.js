import { Factory } from 'ember-cli-mirage';

export default Factory.extend({
	title(i){ return `Project ${i}`; },
	type: 'nodes',
	description:'this is a description of a project',
	category: 'project',
	tags() { return [`tag1`,`tag2`]; },
	public: false,
	contributors: 'bill_wilson'
});
