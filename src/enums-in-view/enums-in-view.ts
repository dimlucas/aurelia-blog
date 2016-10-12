import { bindable } from 'aurelia-framework';
import { FormStatusEnum } from '../enums/form-status-enum';

export class TestEnums{

    @bindable status: FormStatusEnum;

    statusChanged(newValue, oldValue){
        console.log("Status changed from " + oldValue + " to " + newValue);
    }

    statusOkClicked(): void{
        this.status = FormStatusEnum.Ok;
    }

    statusWarningClicked(): void{
        this.status = FormStatusEnum.Warning;
    }

    statusErrorClicked(): void{
        this.status = FormStatusEnum.Error;
    }

}