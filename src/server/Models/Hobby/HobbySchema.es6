import mongoose from 'mongoose';

const HobbySchema = new mongoose.Schema({
	id: {
		type: String,
		required: true,
		unique: true,
		index: true,
		default: mongoose.Types.ObjectId,
	},
	title: String,
	description: String,
	type: String,
});

const Hobby = mongoose.model('Hobby', HobbySchema);

export default Hobby;

export function getHobbyByPosition(root, {id}) {
	return new Promise((resolve, reject) => {
		Hobby.find({}).exec((err, res) => {
			err ? reject(err) : resolve(res[id]);
		});
	});
}

export function getListOfHobbies() {
	return new Promise((resolve, reject) => {
		Hobby.find({}).exec((err, res) => {
			err ? reject(err) : resolve(res);
		});
	});
}
