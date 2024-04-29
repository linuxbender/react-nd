import { createServer, Model, RestSerializer } from "miragejs";

export function makeServer({ environment = "test" } = {}) {
  let server = createServer({
    environment,

    serializers: {
      application: RestSerializer,
    },

    models: {
      user: Model,
    },

    seeds(server) {
      server.create("user", { name: "Bob", id: 1 });
      server.create("user", { name: "Alice", id: 2 });
      server.create("user", { name: "Dani", id: 3 });
      server.create("user", { name: "Moo", id: 4 });
    },

    routes() {
      this.namespace = "api";

      this.get("/v1/users", async (schema) => {
        await new Promise(r => setTimeout(r, 3000))
        return await schema.users.all().models;
      });

      this.get("/v1/users/:id", async (schema, request) => {
        await new Promise(r => setTimeout(r, 1000))
        const id = request.params.id;
        return await schema.users.find(id).attrs;
      });
    },
  });

  return server;
}
