
interface Body {
  status: number;
  data: any[];
  msg: string;

}

export interface UmagalResponse {
  error: string;
  body: Body;
}
