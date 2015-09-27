import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
	id: {
		type: String,
		required: true,
		unique: true,
		index: true,
		default: mongoose.Types.ObjectId,
	},
	name: String,
	surname: String,
	age: Number,
	hobbies: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Hobby',
	}],
	friends: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User',
	}],
	type: String,
});

UserSchema.set('toJSON', { getters: true });

const User = mongoose.model('User', UserSchema);

export default User;

export function getUserByPosition(root, {id}) {
	return new Promise((resolve, reject) => {
		User.find({}).exec((err, res) => {
			err ? reject(err) : resolve(res[id]);
		});
	});
}

export function updateUser(user) {
	return new Promise((resolve, reject) => {
		user.save((err, res) => {
			err ? reject(err) : resolve(res);
		});
	});
}

export function getListOfUsers() {
	return new Promise((resolve, reject) => {
		User.find({}).populate('hobbies friends').exec((err, res) => {
			err ? reject(err) : resolve(res);
		});
	});
}
