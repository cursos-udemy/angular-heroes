import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService, Heroe } from '../../services/heroes.service';


@Component({
  selector: 'app-find',
  templateUrl: './find.component.html',
  styles: []
})
export class FindComponent implements OnInit {
  public heroesResult: Heroe[];

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _router: Router,
    private _heroesService: HeroesService) {
  }

  ngOnInit() {
    this._activatedRoute.params.subscribe((params) => {
      this.heroesResult = this._heroesService.searchHeroe(params['texto']);
    });
  }

  verHeroe(index: number): void {
    this._router.navigate(['/heroe',index]);
  }
}
