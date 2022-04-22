import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import tCourseTypeEnum from '../enums/i-i-s-course-registration-t-course-type';

export default FlexberryEnum.extend({
  enum: tCourseTypeEnum,
  sourceType: 'IIS.Course_Registration.tCourseType'
});
