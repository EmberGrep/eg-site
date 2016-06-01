import DS from 'ember-data';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';
import config from 'embergrep-site/config/environment';

export default DS.JSONAPIAdapter.extend(DataAdapterMixin, {
  authorizer: `authorizer:token`,
  host: config.apiUrl,

  handleResponse(status) {
    if (status === 401 && this.get('session.isAuthenticated')) {
      return console.log(`Error encountered`);
    }
    return this._super(...arguments);
  }
});
