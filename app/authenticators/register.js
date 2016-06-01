import Registration from 'ember-simple-auth-registration/authenticators/oauth2-password-registration';
import config from 'embergrep-site/config/environment';

export default Registration.extend({
  registrationEndpoint: `${config.apiUrl}/register`,
});
