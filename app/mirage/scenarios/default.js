export default function(server) {

	server.createList('submission-eval', 10);

  server.createList('meeting', 5);
  server.createList('node', 10);

  server.createList('reviewer',4);
  server.createList('reviewslist',3);

  // Seed your development database using your factories. This
  // data will not be loaded in your tests.

  // server.createList('contact', 10);
}
