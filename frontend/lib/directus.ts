import type { Schema } from './schema';
import { createDirectus, rest } from '@directus/sdk';

const directus = createDirectus<Schema>(`${process.env.DIRECTUS_API_URL}`).with(
  rest({
    onRequest: (options) => ({ ...options, cache: 'no-store' }),
  }),
);

export default directus;
