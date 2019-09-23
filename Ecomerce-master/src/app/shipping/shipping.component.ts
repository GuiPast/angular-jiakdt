import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup,FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {

  constructor(private router: Router,private toastr: ToastrService,
    private fb: FormBuilder) { }

  ngOnInit() {
  }

  goBack(){
    this.router.navigateByUrl('/home');
  }

  onSubmit(){
    console.log(this.toastr.success('Submitted!'));
  }

  profileForm = this.fb.group({  
    name: ['',Validators.required],
    email: [''],
    address: [''],
    city:[''],
    cardname:['',Validators.required],
    cardnumber:['',Validators.required]
  });


}
