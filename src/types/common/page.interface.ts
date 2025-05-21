export type IPageProps<ParamsType = void> = {
  params: Promise<ParamsType>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};
