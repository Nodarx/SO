import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  AbstractControl,
} from '@angular/forms';
import { UserService } from 'src/app/Services/user.service';
import { Router } from '@angular/router';
import { User } from 'src/app/Model/user';
import { ActivatedRoute } from '@angular/router';
import { NavPageService } from '../Services/nav-page.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  public registerForm: FormGroup;
  public ajax: Boolean = false;
  public tituloForm: string;
  public switchForm: Boolean = false;
  private usuario: User;
  public actualizarOk: Boolean = false;

  constructor(
    public tools: NavPageService,
    private formBuilder: FormBuilder,
    private usrService: UserService,
    private router: Router,
    private newUser: User,
    private rutaActiva: ActivatedRoute
  ) {}

  ngOnInit() {
    let ruta =
      this.rutaActiva.url['value'][0] === undefined
        ? ''
        : this.rutaActiva.url['value'][0].path;
    this.switchForm = ruta == 'Home';
    this.tituloForm = this.switchForm ? 'Actualiza tus datos' : 'Regístrate';
    if (this.switchForm) {
      this.registerForm = this.formBuilder.group({
        Name: ['', [Validators.required, Validators.minLength(3)]],
        Email: [
          '',
          [Validators.required, Validators.minLength(6), Validators.email],
        ],
      });
    } else {
      this.registerForm = this.formBuilder.group({
        Name: ['', [Validators.required, Validators.minLength(3)]],
        Password: ['', [Validators.required, Validators.minLength(8)]],
        passwordRepeat: ['', [Validators.required, Validators.minLength(8)]],
      });
    }
    /* this.fillFormToEdit(); */
  }

  public validatePasword(control: AbstractControl) {
    const password = this.registerForm.get('passwordUser').value;
    let error = null;
    if (password != control.value) {
      error = { notEqual: true };
    }
    return error;
  }

  async registerValidate() {
    this.ajax = true;
    delete this.registerForm.value.passwordRepeat;
    let user = this.registerForm.value;
    user.Rol = 'Student';
    this.newUser.username = user.Name;
    this.newUser.password = user.Password;
    let response = <User>await this.usrService.add(this.newUser).toPromise();
    /*  this.menuUser = <Menu>(
      await this.usrService.getRolMenuRest(response.Rol).toPromise()
    );*/
    this.usrService.setLoginInfo(response);
    alert('usuario Registrado Correctamente');
    this.router.navigate(['/login']);
  }
}
