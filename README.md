TODO:

- insert a form into the index page and render it
- arrive at the proper body to include in the search API call in Postman.
- where do i put the logic for the API calls and how do I present it?
- connect the form to the API call and response.
- investigate which components from Origami might be helpful and plan for those if necessary.
- if there's time, write a function to list suggestions for the user to select depending on what they type into the search box on keyup.
- add a process env file and insert my api key in a way that doesn't utterly grass up my api key.
- probably need a partials folder to render. sort out final architecture soon

## Things to talk about in the final README - just a list for now

- why I chose to use an express scaffold and what I removed because I didn't need it

## Stuff to bare in mind

- shall I display the latest headlines on page load alongside the form for users to search for more specific headlines?
- how to make queryString of API call dynamic?
- what's the bin folder, why am I using that insead of the app.js entry point I've been using in tutorials
- do I need to keep users.js?
- do I need to use something like this for pagination? https://github.com/expressjs/express-paginate
- do I need to use something like this for form validation? https://github.com/express-validator/express-validator#express-validator
  - do I need form valdiation?!
- phrasing of the brief indicates they might want headlines already visible before search. think about this, ask people!!!

## Spec -- essentials

Build a server-rendered site that displays headlines. You may use our
Developer APIs to achieve this.

Additionally, provide a search box for users to search for headlines
containing specific words (i.e. searching for "brexit" should return a list of brexit-related headlines).

## Optional parts of the spec

✅ == things I plan to do

Be responsive ✅  
Be accessible
Have pagination
Not be reliant on client-side frameworks (i.e. Angular, React) or libraries like jQuery ✅  
Built using Javascript and node.js ✅  
Uses Origami Components ✅
Progressively enhanced
Deployed on Heroku ✅  
Have a similar look and feel as the original site ✅  
Perform well over 3G networks  
Work offline

search to return suggestions as user types?
