import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('auto-scroll', 'Integration | Component | auto scroll', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{auto-scroll}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#auto-scroll}}
      template block text
    {{/auto-scroll}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
