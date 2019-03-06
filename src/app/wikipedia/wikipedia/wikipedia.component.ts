import {Component, OnInit} from '@angular/core';
import {WikipediaService} from './wikipedia.service';
import {FormControl} from '@angular/forms';
import {debounceTime, distinctUntilChanged, switchMap, tap} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Component({
    selector: 'app-wikipedia',
    templateUrl: './wikipedia.component.html',
    styleUrls: ['./wikipedia.component.scss']
})
export class WikipediaComponent implements OnInit {
    private loading = false;
    private results: Observable<any>;
    private searchField = new FormControl();

    constructor(private wikipediaService: WikipediaService) {}

    ngOnInit() {
        this.searchField = new FormControl();
        this.results = this.searchField.valueChanges
            .pipe(
                debounceTime(400),
                distinctUntilChanged(),
                tap(_ => this.loading = true),
                switchMap(term => this.wikipediaService.search(term)),
                tap(_ => this.loading = false)
            );
    }
}
