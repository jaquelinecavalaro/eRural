import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-menu-cliente',
  templateUrl: './menu-cliente.component.html',
  styleUrls: ['./menu-cliente.component.css']
})
export class MenuClienteComponent implements OnInit {

  constructor(
    public auth: AuthService,
    public router: Router
    
  ) { }

  ngOnInit() {
    this.desce() 
  }

desce(){
  window.addEventListener("scroll", ()=>{ 
    let header = document.querySelector('.header1');
    if (header != null){
      header.classList.toggle("stick", window.scrollY > 0);
    } 
})
  
} 

sair(){
  this.router.navigate(['/login'])
  localStorage.removeItem('token') //environment.token = ''
  environment.id = 0
  environment.nome = ''
}
}
