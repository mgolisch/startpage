
import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Rx';

@Component({
    selector: 'clock',
    template: `<h3>{{time | date:'y-MM-dd HH:mm:ss'}}</h3>`
})
export class ClockComponent implements OnInit{
    time 

    ngOnInit(){
        let timer = Observable.timer(500,10000)
        timer.subscribe(t=>this.time = Date.now())
    }
}