import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Injectable()
export class AppService {
  constructor(private db: AngularFireDatabase) { this.SaveEntryToDatabase(2, "g"); }

  m_BASE64: string;
  m_BLOB: Blob;
  m_Age: number;

  m_Pictures: Picture[] = [];



  SaveBASE64(_imgDataBASE64: string) {
    this.m_BASE64 = _imgDataBASE64;
  }

  GetBASE64(): string {
    return this.m_BASE64;
  }

  SaveBlob(_imgDataBlob: Blob) {
    this.m_BLOB = _imgDataBlob;
  }

  SaveAge(_ageGuess: number) {
    this.m_Age = _ageGuess;
    this.SaveEntryToDatabase(this.m_Age, this.m_BASE64);
  }

  GetAgeGuess() {
    return this.m_Age;
  }

  SaveEntryToDatabase(_age: number, _base64: string) {

    var _tempConnection = this.db.list('Pictures');
    let v = {
      Picture: "test",
      Base64: "test",
      Age: 39
    }
    console.log("yay");
    _tempConnection.snapshotChanges().subscribe(item => {
      console.log("g");
      item.forEach(element => {
        var y = element.payload.toJSON();
        y["$key"] = element.key;
      });
    });
    //_tempConnection.push(v);
    // _tempConnection.snapshotChanges().subscribe(item => {
    //   item.forEach(element => {
    //     let y = element.payload.toJSON();
    //     //y["$key"] = element.key;
    //     //this.m_Pictures.push(y as Picture);
    //     console.log(y);
    //   });
    // });

  }

}

interface Picture {
  BASE64: string;
  AGE: number;
}
