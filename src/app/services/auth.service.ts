import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth} from "@angular/fire/compat/auth";
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user:any

  constructor(private fbAuth: AngularFireAuth,
    private ngZone: NgZone, private router: Router) {
      this.fbAuth.authState.subscribe(user=>{
        if(user){
          console.log('user logged in ', user);
          this.user = user.email;
          localStorage.setItem('user', this.user);
        }
      })

    }
    singIn(email: string, password: string){
      return this.fbAuth.signInWithEmailAndPassword(email, password)
      .then((result)=>{
        this.ngZone.run(()=>{
          this.router.navigate(['/checkout'])

        })

      }).catch((error)=>{
        window.alert(error.message)
      })
    }
    SignUp(email: string, password: string){
      return this.fbAuth.createUserWithEmailAndPassword(email, password)
      .then((result)=>{
        this.router.navigate(['/login'])
      }).catch((error)=>{
        window.alert(error.message)
      })
    }
      logOut(){
    console.log('log out')
    return this.fbAuth.signOut().then(()=>{
      localStorage.removeItem('user');
      this.router.navigate(['login'])
    })
  }

  isLoggedIn(){
    const user  = localStorage.getItem('user')
    return user? true:false
  }
  getUser(){
    const user = localStorage.getItem('user');
    return user? user:null;

  }


}
