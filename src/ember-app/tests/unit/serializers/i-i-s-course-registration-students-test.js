import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-course-registration-students', 'Unit | Serializer | i-i-s-course-registration-students', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-course-registration-students',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-course-registration-t-course-type',
    'transform:i-i-s-course-registration-t-gender-type',

    'model:i-i-s-course-registration-course',
    'model:i-i-s-course-registration-students',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
