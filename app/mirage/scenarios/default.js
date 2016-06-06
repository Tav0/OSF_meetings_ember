export default function(server) {
  server.createList('meeting');
  server.createList('node', 10);

  // Seed your development database using your factories. This
  // data will not be loaded in your tests.

  // server.createList('contact', 10);
}
