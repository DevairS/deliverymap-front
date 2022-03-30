export enum Path {
  HOME = '/',
  CUSTOMERS = '/customers',
}

export type RoutesType = typeof Path[keyof typeof Path];
