import { Component, OnInit } from '@angular/core';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook/ngx';

@Component({
  selector: 'custom-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  constructor(
      private facebook:Facebook
  ) {

  }

  ngOnInit() {}

  connectFacebook(){
    this.facebook.login(["public_profile"])
        .then((res: FacebookLoginResponse) =>{
          console.log("Logged in Facebook!", res)

    }).catch(e =>{
      console.log("Error logging into facebook", e)})
  }

}
