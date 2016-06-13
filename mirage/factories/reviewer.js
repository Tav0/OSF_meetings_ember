
import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  name: faker.list.cycle('Tom Adams','Chris David','Rana Jumail','Dan Lewis'),
  email:faker.list.cycle('tadams@mit.edu','chris@vt.edu','rioj@uva.edu','dan@google.com'),
  affiliation: faker.list.cycle('Prof. at MIT','Research Scientist at Virginia Tech','Prof. at University of Virginia','Data Scientist at Google Inc.'),
  bio: faker.list.cycle('Dr. Tom Adams holds a Ph.D. and M.S. in Computer Science from Duke University, and a B.S. from Virginia Tech. Since 1991 he has ' +
    'been at MIT, where he serves as Professor of Computer Science. He directs the Information Visualization Lab. Has was the Chair of the ACM InfoViz Steering ' +
    'Committee. He has been (co)PI on over 50 research and development projects. In addition to his courses at MIT, Dr. Adams has taught over 15 courses. ' +
    'He has over 100 refereed conference/workshop papers, and over 22 additional presentations.','Chris is a research scientist at Virginia Tech. He is interested in finding' +
    'patters in Big data, specially biomedical data','Dr. Rana is adjunct Professor at University of Virginia, also affiliated with University of Lebanon. She has more than 30 publications' +
    'in the area of software reliability and testing.','Dan is a senior software engineer and data analyst at google. He worked on several data mining projects, including project lunar'),
  research: ('Info Visualization, Data compression','Big data analysis, clustering','Testing, security and Data encryption','Data analysis and mining'),
  osfreviews: faker.list.cycle(1,2,4,0),
  avatar(i) { return faker.internet.avatar(); }

});
