import directus from '@/lib/directus';
import { readSingleton } from '@directus/sdk';

async function getGlobal() {
  return directus.request(readSingleton('global'));
}

export default async function HomePage() {
  const global = await getGlobal();
  return (
    <div>
      <h1>{global.title}</h1>
      <p>{global.description}</p>
    </div>
  );
}
