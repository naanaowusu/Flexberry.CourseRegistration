import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISCourse_RegistrationCourseLForm from './forms/i-i-s-course-registration-course-l';
import IISCourse_RegistrationStudentsLForm from './forms/i-i-s-course-registration-students-l';
import IISCourse_RegistrationCourseEForm from './forms/i-i-s-course-registration-course-e';
import IISCourse_RegistrationStudentsEForm from './forms/i-i-s-course-registration-students-e';
import IISCourse_RegistrationCourseModel from './models/i-i-s-course-registration-course';
import IISCourse_RegistrationStudentsModel from './models/i-i-s-course-registration-students';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-course-registration-course': IISCourse_RegistrationCourseModel,
    'i-i-s-course-registration-students': IISCourse_RegistrationStudentsModel
  },

  'application-name': 'Course  registration',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Course  registration',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Course  registration',
          title: 'Course  registration'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        'course-registration': {
          caption: 'Course Registration',
          title: 'Course Registration',
          'i-i-s-course-registration-students-l': {
            caption: 'Student',
            title: 'Students'
          },
          'i-i-s-course-registration-course-l': {
            caption: 'Course ',
            title: 'Course'
          },
          students: {
            caption: 'Students',
            title: 'Students'
          },
          course: {
            caption: 'Course',
            title: 'Course'
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-course-registration-course-l': IISCourse_RegistrationCourseLForm,
    'i-i-s-course-registration-students-l': IISCourse_RegistrationStudentsLForm,
    'i-i-s-course-registration-course-e': IISCourse_RegistrationCourseEForm,
    'i-i-s-course-registration-students-e': IISCourse_RegistrationStudentsEForm
  },

});

export default translations;
