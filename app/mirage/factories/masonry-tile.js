import { Factory } from 'ember-cli-mirage';
import faker from 'ember-cli-mirage';

export default Factory.extend({

  filename()
  {
    return faker.lorem.words();
  },
  filetype(i)
  {
    return faker.list.random('Poster', 'Dataset', 'Talk', 'Photo', 'Lecture')(i);
  },
  author()
  {
    return faker.name.findName();
  }

});
