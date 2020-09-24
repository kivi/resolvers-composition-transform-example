# Composer function is being not executed.

Modified example from: https://graphql-mesh.com/docs/transforms/resolvers-composition

    transforms:
       -  resolversComposition:
       -  resolver:  Query.* composer:  ./src/add-fields

The composer file:

    console.log('Initialize add-fields. Should be called once.');

    module.exports  =  next  =>  (root,  args,  context,  info)  =>  {
    console.log('add-fields. Should be called on request.');
    throw  new  Error('Should throw on request!');
    ....
    return  next(root, updatedArgs, context, info);

    };

Logs are not printed.
But it should `throw` an error if the default function is called.

Start with
`npm start`

Query example:

    query {
      count {
        confirmed
      }
    }
