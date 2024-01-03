declare interface QueryParams {
  userId: string | undefined;
}

declare interface PageProps {
  searchParams: {
    [key: string]: string | undefined;
  };
}
