import { FormComponent } from "@nikonov-alex/components.v2";
import { State as DropdownState, dropdown } from "./dropdown";

class Dropdown extends FormComponent<DropdownState, { value: string }> {

    constructor( stylesheet?: string ) {
        super( dropdown, stylesheet );
    }

}

export default Dropdown;