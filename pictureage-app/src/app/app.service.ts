import { Injectable } from '@angular/core';
// import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class AppService {
  constructor(
    // private db: AngularFireDatabase
  ) { }

  m_BASE64: string;
  m_ImgPath: string;
  m_Age: number;

  // m_Pictures: Picture[] = [];

  SaveBASE64(_imgDataBASE64: string) {
    this.m_BASE64 = _imgDataBASE64;
  }

  GetBASE64() {
    return this.m_BASE64;
  }

  SaveLocalPath(_imgPath: string) {
    this.m_ImgPath = _imgPath;
  }

  GetLocalPath() {
    return this.m_ImgPath;
  }

  SaveAge(_ageGuess: number) {
    this.m_Age = _ageGuess;
  }

  GetAgeGuess() {
    return this.m_Age;
  }

  MakeAndGetBlob(): Blob {
    let BASE64_MARKER = ';base64,';
    if (this.m_BASE64.indexOf(BASE64_MARKER) == -1) {
      let parts = this.m_BASE64.split(',');
      let contentType = parts[0].split(':')[1];
      let raw = decodeURIComponent(parts[1]);
      return new Blob([raw], { type: contentType });
    }
    let parts = this.m_BASE64.split(BASE64_MARKER);
    let contentType = parts[0].split(':')[1];
    let raw = window.atob(parts[1]);
    let rawLength = raw.length;
    let uInt8Array = new Uint8Array(rawLength);

    for (let i = 0; i < rawLength; ++i) {
      uInt8Array[i] = raw.charCodeAt(i);
    }
    return new Blob([uInt8Array], { type: contentType });
  }

  // SaveEntryToDatabase(_age: number, _base64: string) {

  //   var _tempConnection = this.db.list('Pictures');
  //   let v = {
  //     Picture: "test",
  //     Base64: "test",
  //     Age: 39
  //   }
  //   console.log("yay");
  //   _tempConnection.snapshotChanges().subscribe(item => {
  //     console.log("g");
  //     item.forEach(element => {
  //       var y = element.payload.toJSON();
  //       y["$key"] = element.key;
  //     });
  //   });
  //   //_tempConnection.push(v);
  //   // _tempConnection.snapshotChanges().subscribe(item => {
  //   //   item.forEach(element => {
  //   //     let y = element.payload.toJSON();
  //   //     //y["$key"] = element.key;
  //   //     //this.m_Pictures.push(y as Picture);
  //   //     console.log(y);
  //   //   });
  //   // });

  // }

}

// interface Picture {
//   BASE64: string;
//   AGE: number;
// }
