export type ResultState =
  | "form"
  | "loading"
  | "pass"
  | "fail"
  | "notfound"
  | "error";

export interface UserFormData {
  username: string;
  phoneNumber: string;
}

export interface UserData {
  name: string;
  phone: string;
}

export interface LookupResponse {
  status: "PASS" | "FAIL";
}

export interface ResponseDtoLookupResponse {
  status: string;
  message: string;
  data: LookupResponse;
  timestamp: number;
}

export interface ResultStateTransition {
  from: ResultState;
  to: ResultState;
  action: string;
}

export interface UseResultQueryReturn {
  state: ResultState;
  userData: UserData | null;
  error: string | null;
  isLoading: boolean;
  submitQuery: (data: UserFormData) => Promise<void>;
  resetState: () => void;
  retryQuery: () => Promise<void>;
}
