import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-course-registration-course-l');
  this.route('i-i-s-course-registration-course-e',
  { path: 'i-i-s-course-registration-course-e/:id' });
  this.route('i-i-s-course-registration-course-e.new',
  { path: 'i-i-s-course-registration-course-e/new' });
  this.route('i-i-s-course-registration-students-l');
  this.route('i-i-s-course-registration-students-e',
  { path: 'i-i-s-course-registration-students-e/:id' });
  this.route('i-i-s-course-registration-students-e.new',
  { path: 'i-i-s-course-registration-students-e/new' });
});

export default Router;
