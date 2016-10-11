import { ViewEngineHooks } from 'aurelia-framework';

//Import any enums here
import { FormStatusEnum } from '../enums/form-status-enum';


export class EnumsViewEngineHooks implements ViewEngineHooks{
    beforeBind(view){
        view.overrideContext.FormStatusEnum = FormStatusEnum;
    }
}