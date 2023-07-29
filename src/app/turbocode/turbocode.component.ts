import { Component, ViewChild, ComponentFactoryResolver, HostBinding } from '@angular/core';
import { HostDirective } from '../directive/host.directive';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';
import { HeroesComponent } from '../heroes/heroes.component';
@Component({
  selector: 'app-turbocode',
  templateUrl: './turbocode.component.html',
  styleUrls: ['./turbocode.component.css'],
})

export class TurbocodeComponent {

  @ViewChild(HostDirective, { static: true }) childRef!: HostDirective;
  @HostBinding('style.color') color = 'green';
  component = [HeroDetailComponent]
  constructor(
    public factory: ComponentFactoryResolver) { }

  load(id?: any) {
    this.childRef.viewRef.clear();
    const factory= this.factory.resolveComponentFactory(this.component[id]);
   const comp= this.childRef.viewRef.createComponent(factory);
   console.log(comp,'comp');
   comp.instance.data = "Turbocode";
  }
} 

