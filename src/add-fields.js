const graphqlFields = require('graphql-fields');

function handleFields(fields) {
  let fieldsStrsArray = [];
  for (const fieldName in fields) {
    const subFields = fields[fieldName];
    const subFieldsStr = handleFields(subFields);
    let fieldStr = fieldName;
    if (subFieldsStr) {
      fieldStr += `(${subFieldsStr})`;
    }
    fieldsStrsArray.push(fieldStr);
  }
  return fieldsStrsArray.join(',');
}

console.log('Initialize add-fields. Should be called once.');

// This function gets requested fields from GraphQLResolveInfo
// And passes them through `fields` parameter
module.exports = next => (root, args, context, info) => {
  console.log('add-fields. Should be called on request.');
  throw new Error('Should throw on request!');
  const fields = graphqlFields(info);
  const updatedArgs = { ...args, fields: [] };
  return next(root, updatedArgs, context, info);
};
