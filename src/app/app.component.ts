import { Component } from '@angular/core';
import "flowbite"
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'tested-route';
  ngOnInit(): void {
    initFlowbite();
  }
}
