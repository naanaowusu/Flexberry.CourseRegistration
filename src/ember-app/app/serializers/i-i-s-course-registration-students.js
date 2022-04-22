import { Serializer as StudentsSerializer } from
  '../mixins/regenerated/serializers/i-i-s-course-registration-students';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(StudentsSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
