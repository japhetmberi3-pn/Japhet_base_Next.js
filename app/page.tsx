import { getUser } from "./services/user";

export default async function Home() {

  const users = await getUser();

  return (  
    <div>
      {users.map(user =>(<p key={user.id}>{user.first_name} {user.last_name} {user.email}</p>))}
    </div>
  );
}
