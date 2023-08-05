import { Component,HostListener } from '@angular/core';

@Component({
  selector: 'app-sb',
  templateUrl: './sb.component.html',
  styleUrls: ['./sb.component.css']
})
export class SbComponent {

  contentHeight!: string;
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.updateContentHeight();
  }

  private updateContentHeight() {
    if (window.innerWidth >= 768) {
      this.contentHeight = 'calc(100vh - 64px)';
    } else {
      this.contentHeight = 'calc(100vh - 56px)'; 
    }
  }

}
