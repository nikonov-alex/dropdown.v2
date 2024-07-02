import { FormComponent } from "@nikonov-alex/components.v2";
import { State as DropdownState, dropdown } from "./dropdown";

type Options = {
    dommode?: "light" | "shadow",
    styles?: CSSStyleSheet
}

class Dropdown extends FormComponent<DropdownState, { value: string }> {

    constructor( options: Options ) {
        super( {
            ... dropdown,
            dommode: options.dommode || "shadow"
        }, options.styles );
    }

}

export default Dropdown;