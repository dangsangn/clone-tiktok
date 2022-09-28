export type ParamsProps = {
  q: string;
  type?: "less" | "more";
};

export type ResponseType<T> = {
  data: T[];
};
