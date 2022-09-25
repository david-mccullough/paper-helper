import { supabase } from "../lib/initSupabase";
import { Auth } from "@supabase/ui";
import Link from "next/link";

export default function Header({ title }) {
  const { user } = Auth.useUser();

  return (
    <div className="flex justify-between items-center">
      <h1 className="text-2xl font-bold py-4">{title}</h1>
      {!user ? (
        <Link href="/auth" passHref>
          <a>Login</a>
        </Link>
      ) : (
        <div className="flex flex-col items-end">
          <button
            className="w-fit"
            onClick={async () => {
              const { error } = await supabase.auth.signOut();
              if (error) console.log("Error logging out:", error.message);
            }}
          >
            Logout
          </button>
          <p className="text-gray-500">{supabase.auth.user().email}</p>
        </div>
      )}
    </div>
  );
}
