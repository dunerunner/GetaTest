import {Component, OnInit} from '@angular/core';
import {ApiDataService} from '../api-data.service';
import {Track} from '../track';

@Component({
    selector: 'app-data-display',
    templateUrl: './data-display.component.html',
    styleUrls: ['./data-display.component.scss']
})
export class DataDisplayComponent implements OnInit {
    tracks: Track[];

    constructor(private apiDataService: ApiDataService) {
    }

    ngOnInit() {
        console.log('init');
        this.apiDataService.getData()
            .subscribe((data: any) => {
                this.tracks = data.tracks.track;
            });

    }

}
