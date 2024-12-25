
export interface PhoneType {
  id: number;
  name: string;
  image: string;
  chars: CharsType;
}

export interface TableRowsType {
  rowName: string;
  rowTitle: string;
  rowChars: CharsType[];
}

interface CharsType {
  model: string;
  releaseDate: number;
  screenDiagonal: number;
  countryOfOrigin: string;
  memory: number;
  screenRefreshRate: number;
  nfc: boolean;
  esim: boolean;
  wirelessСharging: boolean;
  price: number;
}
