if (Posts.find().count() === 0) {
    Posts.insert({
        title: 'Welcome to microscope',
        author: 'Albert',
        url: 'http://alberthbyang.com'
    });

    Posts.insert({
        title: 'Meteor',
        author: 'Tom Coleman',
        url: 'http://meteor.com'
    });

    Posts.insert({
        title: 'The Meteor Book',
        author: 'Tom Coleman',
        url: 'http://themeteorbook.com'
    });
}