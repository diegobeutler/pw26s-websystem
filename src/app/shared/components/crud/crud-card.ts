import { FormGroup } from "@angular/forms";

// TODO: Desenvolver uma classe abstrata que implemente CrudCard
// - Extender da classe abstrata nos painéis
// - Validar pela interface CrudCard no CrudComponent
// - Criar interface do CrudComponent
// - Implementar interface no CrudComponent
export interface CrudCard<T> {

    form: FormGroup;
    
    criarForm(): FormGroup;

    setForm(registro: T): void;

    setRegistro(registro: T): void;

}