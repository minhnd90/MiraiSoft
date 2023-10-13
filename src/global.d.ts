declare interface ItemT {
  [key: string]: any
  id: number
  name: string
  children?: ItemT[]
}
