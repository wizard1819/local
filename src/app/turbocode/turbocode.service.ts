import { Injectable } from '@angular/core';
import { Toast } from 'bootstrap';


declare var bootstrap: any;
@Injectable({
  providedIn: 'root'
})
export class TurbocodeService {
  constructor() { }

  show(message:any): void {
    const toastElement = document.createElement('div');
    toastElement.className = 'toast align-items-center text-white bg-primary border-0 position-fixed bottom-0 end-0 m-3';
    toastElement.setAttribute('role', 'alert');
    toastElement.setAttribute('aria-live', 'assertive');
    toastElement.setAttribute('aria-atomic', 'true');

    const toastBody = document.createElement('div');
    toastBody.className = 'toast-body d-flex justify-content-between align-items-center';
    
    const messageElement = document.createElement('span');
    messageElement.textContent = message;

    const buttonElement = document.createElement('button');
    buttonElement.className = 'btn btn-sm btn-outline-light';
    buttonElement.textContent = 'Details';
    buttonElement.addEventListener('click', () => {
     
    });

    toastBody.appendChild(messageElement);
    toastBody.appendChild(buttonElement);

    toastElement.appendChild(toastBody);
    document.body.appendChild(toastElement);

    const bootstrapToast = new Toast(toastElement);
    bootstrapToast.show();

    setTimeout(() => {
      bootstrapToast.hide();
      document.body.removeChild(toastElement);
    }, 3000);
  } 
}
