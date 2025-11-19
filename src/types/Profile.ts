export interface UserData {
  id: number;
  name: string;
  email: string;
}

export interface ProfileData {
  id: number;
  user_id: number;
  age: number;
  sex: string;
  phone: string;
}

export interface CombinedProfile {
  id: number;
  name: string;
  email: string;
  age: number | null;
  sex: string | null;
  phone: string | null;
}
