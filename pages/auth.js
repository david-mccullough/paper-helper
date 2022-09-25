import { supabase } from "../lib/initSupabase";
import { Auth } from "@supabase/ui";

export default function AuthPage() {
  const { user } = Auth.useUser();

  return (
    <div className="w-full h-full">
      {!user ? (
        <div className="w-full h-full flex justify-center items-center p-4">
          <div>
            <Auth
              supabaseClient={supabase}
              providers={["github"]}
              socialLayout="horizontal"
              socialButtonSize="xlarge"
            />
          </div>
        </div>
      ) : (
        <div
          className="w-full h-full flex flex-col justify-center items-center p-4"
          style={{ minWidth: 250, maxWidth: 600, margin: "auto" }}
        >
          <p>{supabase.auth.user().email}</p>
          <button
            className="btn-black w-full mt-12"
            onClick={async () => {
              const { error } = await supabase.auth.signOut();
              if (error) console.log("Error logging out:", error.message);
            }}
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
}
