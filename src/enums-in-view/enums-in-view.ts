import { FormStatusEnum } from '../enums/form-status-enum';

export class TestEnums{

    status: FormStatusEnum = FormStatusEnum.Ok;

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