import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('meeting-masonry', 'Integration | Component | meeting masonry', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{meeting-masonry}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#meeting-masonry}}
      template block text
    {{/meeting-masonry}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
