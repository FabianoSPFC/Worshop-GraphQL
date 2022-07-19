const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLList, GraphQLSchema } = graphql;

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        status: {
            type: GraphQLString,
            resolve(parent, args){
                return "Hello World to GraphQL"
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery
});
