import { Auth } from "@supabase/ui";
import { supabase } from "../lib/initSupabase";
import "styles/globals.css";

const Noop = ({ children }) => <>{children}</>;

function Application({ Component, pageProps }) {
  const PageLayout = Component.Layout || Noop;
  return (
    <Auth.UserContextProvider supabaseClient={supabase}>
      <PageLayout>
        <Component {...pageProps} />
      </PageLayout>
    </Auth.UserContextProvider>
  );
}

export default Application;
