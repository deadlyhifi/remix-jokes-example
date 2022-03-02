import type { ActionFunction, LoaderFunction } from "remix";
import { redirect } from "remix";

import { logout } from "~/utils/session.server";

export const action: ActionFunction = async ({ request }) => {
  console.log(request.headers);
  return logout(request);
};

export const loader: LoaderFunction = async () => {
  return redirect("/");
};
