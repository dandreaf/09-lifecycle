import { Component, Input, OnInit, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'products-price',
  standalone: false,

  templateUrl: './price.component.html',
  styleUrl: './price.component.css'
})
export class PriceComponent implements OnInit, OnChanges, OnDestroy {

  @Input()
  public price: number = 0;

  public interval$?: Subscription;


  ngOnInit(): void {
    console.log('PriceComponent: ngOnInit');

    this.interval$ = interval(1000).subscribe( value  => console.log( `Tick: ${value}` ));

  };

  ngOnChanges(changes: SimpleChanges): void {
    console.log('PriceComponent: ngOnChanges');
    console.log({ changes });
  };

  ngOnDestroy(): void {
    console.log('PriceComponent: ngOnDestroy');
    this.interval$?.unsubscribe();

  };

}
