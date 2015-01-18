
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* This test loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
         it('have URLs defined', function(){
            for(var i in allFeeds){ 
                expect(allFeeds[i].url).toBeDefined(); 
                expect(allFeeds[i].url.length).not.toBe(0);
            }
         });


        /* This test loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
         it('have names defined',function(){
            for(var i in allFeeds){
                expect(allFeeds[i].name).toBeDefined();
                expect(allFeeds[i].name.length).not.toBe(0);
            }
         });
    });


    /* A new test suite named "The menu" */

    describe('The menu', function(){

        /* A test that ensures the menu element is
         * hidden by default. 
         */
         it('is hidden', function(){
            expect($('body').hasClass('menu-hidden')).toBe(true) // For the menu to be hidden body must have the 'menu-hiddden' class.


         });

         /* A test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * displays the menu when clicked and hides it when clicked again.
          */
        describe('icon is clicked',function(){
            beforeEach(function(){
            $('.menu-icon-link').trigger('click'); //triggers click event on menu-icon-link 
            });
            // When the icon in clicked menu should be displayed hence body must not have the 'menu-hidden' class.
            it('displays correctly', function(){
            expect($('body').hasClass('menu-hidden')).toBe(false) 
            });
            // When the icon in clicked again menu should be hidden hence body must have the 'menu-hidden' class.
            it('hides correctly', function(){
            expect($('body').hasClass('menu-hidden')).toBe(true)
            });

        });
    });
    /* A new test suite named "Initial Entries" */

        /* A test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         */
    describe('Intial Entries', function(done){
        beforeEach(function(done){
            loadFeed(0,done);
        });

        it('has atleast one entry', function(done){
            // If there is a .entry element within the .feed container the length of the selector will be greater than 0
            expect($('.entry-link').length).toBeGreaterThan(0);
            done();
        });

    });

    /* A new test suite named "New Feed Selection" */

        /* A test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         */

    describe('New Feed Selection', function(done){
        var beforeLoadFeed;
        beforeEach(function(done){
            loadFeed(1,done);
            beforeLoadFeed = $('.feed').find('.entry');
        });
        it('has changed',function(){
            // The value of the feed after load must not be equal to beforeLoadFeed for the content to actually change
            expect($('.feed').find('.entry')).not.toEqual(beforeLoadFeed);
            loadFeed(0,done);
        });
         
    });
}());
