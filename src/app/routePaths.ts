export enum Path {
  HOME = '/',
  DELIVERYLIST = '/list',
  DELIVERY = '/delivery/:id',
}

export type RoutesType = typeof Path[keyof typeof Path];
