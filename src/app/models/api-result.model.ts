export interface ApiResult<T = any> {
  count: number;
  next: string;
  previous: string;
  results: T[];
}
