import {client} from '@repo/db/client';
import { use } from 'react';

export default async function Home() {
   const user=await client.users.findFirst();

  return (
    <div>
      hello world
      {user?.name}
      {user?.email}
    </div>
  );
}
