import {NgModule} from '@angular/core';
import {DropdownDirective} from './dropdown.directive';
import {CommonModule} from '@angular/common';
import {MatButtonModule, MatIconModule} from '@angular/material';

@NgModule({
    declarations: [
        DropdownDirective
    ],
    imports: [
        MatButtonModule,
        MatIconModule
    ],
    exports: [
        CommonModule,
        DropdownDirective,
        MatButtonModule,
        MatIconModule
    ]
})
export class SharedModule {
}
