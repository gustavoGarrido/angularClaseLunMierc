
import { AbstractControl } from "@angular/forms";

export class MyValidations {
    static numerImpar(control: AbstractControl){
        
        const campo = control.value
        if(campo%2 > 0){
            return {numeroImpar:true}
        }
        return null
        
    }

    static numeroDivisible(divisor: number){
        return (control:AbstractControl)=>{
            const campo = control.value;

            if(campo%divisor >0){
                return {numeroDivisible:true}
            }

            return null
        }
    }
}

