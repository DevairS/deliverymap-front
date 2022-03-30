export enum Path {
  HOME = '/',
  DELIVERYLIST = '/list',
}

export type RoutesType = typeof Path[keyof typeof Path];
