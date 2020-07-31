import { FormControl } from '@angular/forms';

export abstract class Model {
    getFormControls() {
        const controls: any = {};
        Object.getOwnPropertyNames(this).forEach((property) => {
            controls[property] = new FormControl(this[property], this.getRule(property));
        });
        return controls;
    }

    abstract rules() : any;

    private getRule(property: string) {
        return this.rules()[property] || [];
    }
}