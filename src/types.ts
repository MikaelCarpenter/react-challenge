export type Page = "list" | "detail";

export interface Todo {
  /** UUID */
  id: string;
  description: string;
  isComplete: boolean;
  /** Unix timestamp in milliseconds */
  createdAt: number;
}
