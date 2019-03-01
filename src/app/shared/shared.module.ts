import {NgModule} from '@angular/core';
import {DropdownDirective} from './dropdown.directive';
import {CommonModule} from '@angular/common';
import {MatButtonModule, MatCardModule, MatFormFieldModule, MatIconModule, MatInputModule, MatMenuModule} from '@angular/material';

@NgModule({
    declarations: [
        DropdownDirective
    ],
    imports: [
        MatMenuModule,
        MatIconModule,
        MatButtonModule,
        MatIconModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule
    ],
    exports: [
        CommonModule,
        DropdownDirective,
        MatMenuModule,
        MatIconModule,
        MatButtonModule,
        MatIconModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule
    ]
})
export class SharedModule {
}
