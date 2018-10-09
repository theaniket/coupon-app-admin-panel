import { Component, OnInit } from '@angular/core';
import {UserService} from '../services/userservice/user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-admin-log-in',
  templateUrl: './admin-log-in.component.html',
  styleUrls: ['./admin-log-in.component.css']
})
export class AdminLogInComponent implements OnInit {

  submitted = false;
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {

  }



  onSubmit(data) {
    debugger;
    console.log(data);
    this.userService.verifyUser(data)
    .subscribe((res: any) => {
      if (res.success) {
        localStorage.setItem('token', res.token);
        this.router.navigate(['/product']);
      } else {
        alert(res.message);
      }
    });
    this.submitted = true;
  }
}
