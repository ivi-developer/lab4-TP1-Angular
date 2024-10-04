import { Component } from '@angular/core';

@Component({
  selector: 'app-client',
  standalone: true,
  imports: [],
  templateUrl: './client.component.html',
  styleUrl: './client.component.css'
})
export class ClientComponent {
  clientId: number= 0;
  firstName: string= '';
  lastName: string= '';
  dni: number= 0;
  email: string= '';
  addres: string= '';
}
