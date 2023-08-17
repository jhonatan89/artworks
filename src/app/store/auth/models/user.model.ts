export interface User {
  id?: string;
  username: string | undefined;
  name?: string;
  password?: string;
  token?: string | null;
  avatar?: string;
}
