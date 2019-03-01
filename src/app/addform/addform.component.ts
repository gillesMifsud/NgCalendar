import {Component, OnInit} from '@angular/core';
import {AuthService} from '../auth.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
    selector: 'app-addform',
    templateUrl: './addform.component.html',
    styleUrls: ['./addform.component.scss']
})
export class AddformComponent implements OnInit {
    addEventForm: FormGroup;

    constructor(private auth: AuthService) {}

    ngOnInit() {
        this.initForm();
    }

    private initForm() {
        const summary = '';
        const description = '';

        this.addEventForm = new FormGroup({
            summary: new FormControl(summary, Validators.required),
            description: new FormControl(description, Validators.required),
        });
    }

    onSubmit() {
        const newEv = {
            calendarId: 'primary',
            start: {
                dateTime: hoursFromNow(2),
                timeZone: 'Europe/Paris'
            },
            end: {
                dateTime: hoursFromNow(2),
                timeZone: 'Europe/Paris'
            },
            summary: this.addEventForm.value['summary'],
            description: this.addEventForm.value['description']
        };
        this.auth.insertEvent(newEv);
        this.addEventForm.reset();
    }

    onCancel() {
        this.addEventForm.reset();
    }
}

const hoursFromNow = (n) => new Date(Date.now() + n * 1000 * 60 * 60).toISOString();
