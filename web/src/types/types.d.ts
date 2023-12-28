interface QueryParams {
  userId: string | undefined;
}

interface PageProps {
  searchParams: {
    [key: string]: string | undefined;
  };
}
