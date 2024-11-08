export interface InitialStatePhonesI {
  phones: PhoneI[];
}

export interface PhoneI {
  id: number;
  name: string;
  image: string;
  chars: CharsI;
}

interface CharsI {
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
