import { FormComponent, Styles } from "@nikonov-alex/components.v2";
import { State as DropdownState, dropdown } from "./dropdown";

class Dropdown extends FormComponent<DropdownState, { value: string }> {

    constructor( styles?: Styles ) {
        super( dropdown, styles );
    }

}

export default Dropdown;