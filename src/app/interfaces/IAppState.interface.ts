export interface IAppState {
  user: any;
  router: {
    state: {
      url: string;
      queryParams: any;
      params: any;
    },
    naviagationId: number;
  };
  myShelf: any;
}
