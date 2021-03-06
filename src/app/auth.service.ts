import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {AngularFireAuth} from '@angular/fire/auth';
import {auth} from 'firebase/app';
import * as firebase from 'firebase';

declare var gapi: any;

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    user$: Observable<firebase.User>;
    calendarItems: any[];

    constructor(public afAuth: AngularFireAuth) {
        this.initClient();
        this.user$ = afAuth.authState;
    }

    // Initialize the Google API client with desired scopes
    initClient() {
        gapi.load('client', () => {
            console.log('loaded client');

            // It's OK to expose these credentials, they are client safe.
            gapi.client.init({
                apiKey: 'AIzaSyDXgNajvG4uKt7tbsvvD4yUTzAJnI-rICc', // 'YOUR_FIREBASE_API_KEY',
                clientId: '697704073656-q95d09c0bfjd6gcmqb9p05ndncomc2ag.apps.googleusercontent.com', // 'YOUR_OAUTH2_CLIENTID',
                discoveryDocs: ['https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest'],
                scope: 'https://www.googleapis.com/auth/calendar'
            });

            gapi.client.load('calendar', 'v3', () => console.log('loaded calendar'));

        });
    }

    async login() {
        const googleAuth = gapi.auth2.getAuthInstance();
        const googleUser = await googleAuth.signIn();

        const token = googleUser.getAuthResponse().id_token;

        console.log(googleUser);

        const credential = auth.GoogleAuthProvider.credential(token);

        await this.afAuth.auth.signInAndRetrieveDataWithCredential(credential);

        // Alternative approach, use the Firebase login with scopes and make RESTful API calls
        // const provider = new auth.GoogleAuthProvider()
        // provider.addScope('https://www.googleapis.com/auth/calendar');
        // this.afAuth.auth.signInWithPopup(provider)
    }

    logout() {
        this.afAuth.auth.signOut();
    }

    async getCalendar() {
        const events = await gapi.client.calendar.events.list({
            calendarId: 'primary',
            timeMin: new Date().toISOString(),
            showDeleted: false,
            singleEvents: true,
            maxResults: 10,
            orderBy: 'startTime'
        });

        console.log(events);

        this.calendarItems = events.result.items;

    }

    getCalendarItems() {
        return this.calendarItems;
    }

    // async insertEvent() {
    //     const insert = await gapi.client.calendar.events.insert({
    //         calendarId: 'primary',
    //         start: {
    //             dateTime: hoursFromNow(2),
    //             timeZone: 'America/Los_Angeles'
    //         },
    //         end: {
    //             dateTime: hoursFromNow(3),
    //             timeZone: 'America/Los_Angeles'
    //         },
    //         summary: 'Have Fun!!!',
    //         description: 'Do some cool stuff and have a fun time doing it'
    //     });
    //
    //     await this.getCalendar();
    // }

    async insertEvent(event) {
        const insert = await gapi.client.calendar.events.insert(event);
        await this.getCalendar();
    }


}

const hoursFromNow = (n) => new Date(Date.now() + n * 1000 * 60 * 60).toISOString();
