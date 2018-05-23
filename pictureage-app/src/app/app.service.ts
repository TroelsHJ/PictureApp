import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
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
