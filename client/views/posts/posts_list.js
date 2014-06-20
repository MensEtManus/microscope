var postData = [
	{
		title: 'Introducing Telescope',
		author: 'Albert Yang',
		url: 'http://alberthbyang.com'	
	},
	{
		title: 'Meteor',
		author: 'Tom Coleman',
		url: 'http://meteor.com'
	},
	{
		title: 'The Meteor Book',
		author: 'Tome Coleman',
		url: 'http://themeteorbook.com'
	}
];
Template.postsList.helpers({
	posts: postData
});