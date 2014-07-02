if (Posts.find().count() === 0) {
    Posts.insert({
        title: 'A Hacker, an entrepreneur, a photographer',
        author: 'Albert',
        url: 'http://alberthbyang.com'
    });

    Posts.insert({
        title: 'Grooveshark is the new age of music streaming',
        author: 'Albert',
        url: 'http://grooveshark.com'
    });

    Posts.insert({
        title: 'Slashdot Seriously?',
        author: 'Albert',
        url: 'http://slashdot.org/stories/cloud'
    });
}