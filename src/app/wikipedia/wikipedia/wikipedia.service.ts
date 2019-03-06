import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable()
export class WikipediaService {
    apiRoot = 'http://en.wikipedia.org/w/api.php?';

    constructor(private http: HttpClient) {}

    search(term: string) {
        const search = new URLSearchParams();
        search.set('action', 'opensearch');
        search.set('search', term);
        search.set('format', 'json');

        const apiURL = `${this.apiRoot}${search}`;

        return this.http.jsonp(apiURL, 'callback')
            .pipe(
                map(
                    (response) => response)
            );
    }
}

// https://en.wikipedia.org/w/api.php?
// action=query&
// list=search&
// srsearch=Nelson%20Mandela&utf8=
// &format=json
