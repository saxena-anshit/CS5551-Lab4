import { Component } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {Router} from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  usrIcp4;
  passIcp4;
  constructor(private routerIcp4: Router,
              private firebaseIcp4: AngularFireAuth) {
  }

  LogInIcp4(e) {
    try {
      this.firebaseIcp4.auth.signInWithEmailAndPassword(this.usrIcp4, this.passIcp4).then(() => {
        this.routerIcp4.navigate(['/tab3']);
        // tslint:disable-next-line:no-shadowed-variable
      }).catch((e) => {
        alert(e);
      });
    } catch (e) {
      console.error(e);
    }
  }
}
