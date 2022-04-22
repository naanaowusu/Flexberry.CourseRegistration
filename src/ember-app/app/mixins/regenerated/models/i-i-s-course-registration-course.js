import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  courseType: DS.attr('i-i-s-course-registration-t-course-type'),
  name: DS.attr('string')
});

export let ValidationRules = {
  courseType: {
    descriptionKey: 'models.i-i-s-course-registration-course.validations.courseType.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  name: {
    descriptionKey: 'models.i-i-s-course-registration-course.validations.name.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('CourseE', 'i-i-s-course-registration-course', {
    courseType: attr('Course type', { index: 0 })
  });

  modelClass.defineProjection('CourseL', 'i-i-s-course-registration-course', {
    courseType: attr('Course type', { index: 0 })
  });
};
