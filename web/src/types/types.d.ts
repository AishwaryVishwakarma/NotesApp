declare interface QueryParams {
  userId: string | null;
}

declare interface PageProps {
  searchParams: {
    [key: string]: string | undefined;
  };
}
