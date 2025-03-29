import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  username = '';
  profilePictureUrl = '';

  constructor(private authService: AuthenticationService) {}

  ngOnInit() {
    // Fetch user data from the authentication service
    // this.authService.getUserData().subscribe(
  //    (userData) => {
    //    this.username = userData.username;
      //  this.profilePictureUrl = userData.profilePictureUrl;
      //},
      //(error) => {
       // console.error('Error fetching user data', error);
     // }
    //);
  }
}