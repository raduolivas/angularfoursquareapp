import { Component, OnInit, Input } from '@angular/core';
import { NavigationItem } from './navigation.model';
import { NAVIGATION_ITENS } from './navigation.constant';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  @Input() public title: string;
  @Input() public displayMenu: boolean;

  public navigationItens: NavigationItem[] = NAVIGATION_ITENS;

  constructor( private readonly router: Router ) {}

  public ngOnInit(): void {
  }

  public redirectToHome(): void {
    this.router.navigate(['/']);
  }

}
