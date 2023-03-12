export interface CarType {
  id: string;
  name: string;
  floorPrice: number;
  monthly: number;
  variants: number;
  vender: VenderType;
  isWithCOE: boolean;
  vehicleType: string;
  status: string;
  image: string;
}
export interface VenderType {
  name: string;
  logo: string;
}
