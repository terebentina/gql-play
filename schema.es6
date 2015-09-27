// schema.js
import {
	GraphQLObjectType,
	GraphQLSchema,
	//GraphQLString,
	//GraphQLInt,
	//GraphQLNonNull,
	//GraphQLList,
	//GraphQLID
} from 'graphql';

//import mongoose from 'mongoose';

import {
	UserQueries,
	UserMutations,
} from './Models/User/UserQL.es6';

import {
	HobbyQueries,
	HobbyMutations,
} from './Models/Hobby/HobbyQL.es6';


const RootQuery = new GraphQLObjectType({
	name: 'Query',      // Return this type of object
	fields: () => ({
		user: UserQueries.user,
		users: UserQueries.users,
		hobby: HobbyQueries.hobby,
		hobbies: HobbyQueries.hobbies,
	}),
});


const RootMutation = new GraphQLObjectType({
	name: 'Mutation',
	fields: () => ({
		addUser: UserMutations.addUser,
		addHobby: HobbyMutations.addHobby,
	}),
});


const schema = new GraphQLSchema({
	query: RootQuery,
	mutation: RootMutation,
});

export default schema;
