import { Injectable } from '@angular/core';

@Injectable()
export class AppService {

  constructor() { }

  BASE64: string;
  BLOB: Blob;
  Age: number;

  SaveBASE64(_imgDataBASE64: string) {
    this.BASE64 = _imgDataBASE64;
  }

  GetBASE64(): string {
    return this.BASE64;
  }

  SaveBlob(_imgDataBlob: Blob) {
    this.BLOB = _imgDataBlob;
  }

  SaveAge(_ageGuess: number) {
    this.Age = _ageGuess;
  }

  GetAgeGuess() {
    return this.Age;
  }

}
