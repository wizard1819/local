import { Component ,OnInit} from '@angular/core';
import { ThemeService } from './theme.service';
@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.css']
})
export class ThemeComponent implements OnInit{
  public currentTheme!: string;

  constructor(private themeService: ThemeService) {}

  public ngOnInit(): void {
  }

  
}
