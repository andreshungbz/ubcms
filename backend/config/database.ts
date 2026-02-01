export default ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'strapiDB'),
      port: env.int('DATABASE_PORT', 5433),
      database: env('DATABASE_NAME', 'ubcms'),
      user: env('DATABASE_USERNAME', 'ubcms_user'),
      password: env('DATABASE_PASSWORD', 'ubcms_password'),
      ssl: env.bool('DATABASE_SSL', false),
    },
    pool: {
      min: 2,
      max: 10,
    },
  },
});
