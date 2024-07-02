import { FormComponent, Options } from "@nikonov-alex/components.v2";
import { State as DropdownState, dropdown } from "./dropdown";

class Dropdown extends FormComponent<DropdownState, { value: string }> {

    constructor( options: Options ) {
        super( dropdown, options );
    }

}

export default Dropdown;