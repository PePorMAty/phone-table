export interface phoneI {
  id: number;
  name: string;
  image: string;
  chars: charsI;
}

interface charsI {
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
