import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import tGenderTypeEnum from '../enums/i-i-s-course-registration-t-gender-type';

export default FlexberryEnum.extend({
  enum: tGenderTypeEnum,
  sourceType: 'IIS.Course_Registration.tGenderType'
});
