import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  name: DS.attr('string'),
  dateOfBirth: DS.attr('date'),
  gener: DS.attr('i-i-s-course-registration-t-gender-type'),
  surname: DS.attr('string'),
  age: DS.attr('number'),
  course: DS.belongsTo('i-i-s-course-registration-course', { inverse: null, async: false })
});

export let ValidationRules = {
  name: {
    descriptionKey: 'models.i-i-s-course-registration-students.validations.name.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  dateOfBirth: {
    descriptionKey: 'models.i-i-s-course-registration-students.validations.dateOfBirth.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  gener: {
    descriptionKey: 'models.i-i-s-course-registration-students.validations.gener.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  surname: {
    descriptionKey: 'models.i-i-s-course-registration-students.validations.surname.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  age: {
    descriptionKey: 'models.i-i-s-course-registration-students.validations.age.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  course: {
    descriptionKey: 'models.i-i-s-course-registration-students.validations.course.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('StudentsE', 'i-i-s-course-registration-students', {
    name: attr('Name', { index: 0 }),
    surname: attr('Surname', { index: 1 }),
    dateOfBirth: attr('Date of birth', { index: 2 }),
    age: attr('Age', { index: 3 }),
    gener: attr('Gener', { index: 4 }),
    course: belongsTo('i-i-s-course-registration-course', 'Course', {
      courseType: attr('Course type', { index: 6, hidden: true })
    }, { index: 5, displayMemberPath: 'courseType' })
  });

  modelClass.defineProjection('StudentsL', 'i-i-s-course-registration-students', {
    name: attr('Name', { index: 0 }),
    surname: attr('Surname', { index: 1 }),
    dateOfBirth: attr('Date of birth', { index: 2 }),
    age: attr('Age', { index: 3 }),
    gener: attr('Gener', { index: 4 }),
    course: belongsTo('i-i-s-course-registration-course', 'Course type', {
      courseType: attr('Course type', { index: 5 })
    }, { index: -1, hidden: true })
  });
};
