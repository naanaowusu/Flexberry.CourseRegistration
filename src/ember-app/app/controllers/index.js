import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.course-registration.caption'),
          title: i18n.t('forms.application.sitemap.course-registration.title'),
          children: [{
            link: null,
            caption: i18n.t('forms.application.sitemap.course-registration.students.caption'),
            title: i18n.t('forms.application.sitemap.course-registration.students.title'),
            children: null
          }, {
            link: null,
            caption: i18n.t('forms.application.sitemap.course-registration.course.caption'),
            title: i18n.t('forms.application.sitemap.course-registration.course.title'),
            children: null
          }]
        }
      ]
    };
  }),
})