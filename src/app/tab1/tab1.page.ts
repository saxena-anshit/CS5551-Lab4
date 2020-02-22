import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {AngularFireAuth} from '@angular/fire/auth';
import {AngularFireDatabase} from '@angular/fire/database';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  FnameIcp4;
  LnameIcp4;
  usrIcp4;
  passIcp4;
  CpassIcp4;

  constructor(private  routerIcp4: Router, private firebaseAIcp4: AngularFireAuth) {
  }


  signUpIcp4() {
    try {
      this.firebaseAIcp4.auth.createUserWithEmailAndPassword(this.usrIcp4, this.passIcp4).then(() => {
        this.firebaseAIcp4.authState.subscribe(auth => {
          // @ts-ignore
          this.FirebaseDB.object(`Profile/${auth.uid}`).set({
            First_Name: this.FnameIcp4,
            Last_Name: this.LnameIcp4
          }).then();
        });
        alert('Registration Done!');
        this.routerIcp4.navigate(['/tab2']);
      }).catch((e) => {
        alert(e);
      });
    } catch (e) {
      console.error(e);
    }
  }

  registerIcp4() {
    if (this.passIcp4 === this.CpassIcp4) {

      if ((this.FnameIcp4 != null) && (this.LnameIcp4 != null) && (this.usrIcp4 != null) && (this.passIcp4 != null)) {
        this.signUpIcp4();
      } else {
        alert('Please fill the information');
      }

    } else {
      alert('The password you entered is not matched');
    }
  }

}
