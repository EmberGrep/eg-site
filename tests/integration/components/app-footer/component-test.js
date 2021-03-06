import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('app-footer', 'Integration | Component | app footer', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{app-footer}}`);

  assert.equal(this.$().text().trim().replace(/[\s\n]+/g, ' '),
    '© 2016 Ember Grep - License a Ryan Tablada project');
});
