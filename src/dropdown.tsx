import { Option, Options, maybe_select_prev, maybe_select_next } from "./types";
import * as OptionsComponent from "./options";


const CONTAINER_STYLES = {
    position: "relative",
    textAlign: "left",
    cursor: "pointer"
};

const VALUE_STYLES = {
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    width: "100%",
    boxSizing: "border-box"
}

const VALID: [ValidityStateFlags, string] = [ {}, "" ];




type HasOptions = { options: Options };
type NoOptions = { options?: undefined };

const has_options = <T extends { }>( data: T ): data is T & HasOptions =>
    "options" in data && typeof data.options === "object";

const set_options = <T extends {}>( data: T, options: Options ): T & HasOptions =>
    has_options( data ) && data.options === options
        ? data
    : ( { ... data, options } );

const remove_options = <T extends {}>( data: T & HasOptions ): T & NoOptions =>
    ( { ... data, options: undefined } );






type HasFocused = { focused: true };
type NoFocused = { focused?: undefined };

const has_focused = <T extends {}>( data: T ): data is T & HasFocused =>
    "focused" in data && true === data.focused;

const set_focused = <T extends {}>( data: T ): T & HasFocused =>
    ( { ... data, focused: true } );

const unset_focused = <T extends {}>( data: T & HasFocused ): T & NoFocused =>
    ( { ... data, focused: undefined } );






type HasOpened = { opened: OptionsComponent.State };
type NoOpened = { opened?: undefined };

const has_opened = <T extends {}>( data: T ): data is T & HasOpened =>
    "opened" in data && typeof data.opened === "object";

const set_opened = <T extends {}>( data: T, opened: OptionsComponent.State ): T & HasOpened =>
    has_opened( data ) && data.opened === opened
        ? data
    : ( { ... data, opened } );

const remove_opened = <T extends {}>( data: T & HasOpened ): T & NoOpened =>
    ( { ... data, opened: undefined } );






type HasRequired = { required: true };
type NoRequired = { required?: undefined };

const has_required = <T extends {}>( data: T ): data is T & HasRequired =>
    "required" in data && data.required === true;

const add_required = <T extends {}>( data: T ): T & HasRequired =>
    ( { ... data, required: true } );

const remove_required = <T extends {}>( data: T & HasRequired ): T & NoRequired =>
    ( { ... data, required: undefined } );





type HasClass = { class: string };
type NoClass = { class?: undefined };

const has_class = <T extends {}>( data: T ): data is T & HasClass =>
    "class" in data && typeof data.class === "string";

const set_class = <T extends {}>( data: T, className: string ): T & HasClass =>
    ( { ... data, class: className } );

const remove_class = <T extends {}>( data: T & HasClass ): T & NoClass =>
    ( { ... data, class: undefined } );






type Empty = { };
type Focused = HasOptions & HasFocused;
type Opened = HasOptions & HasFocused & HasOpened;

type OptionsState = Empty | HasOptions | Focused | Opened;

type NoValidation = { };
type Required = HasRequired;

type ValidationState = NoValidation | Required;

type ClassState = {} | HasClass;

type State = OptionsState & ValidationState & ClassState;

const is_focused = <S extends {}>( state: S ): state is S & Focused =>
    has_options( state ) && has_focused( state );

const is_opened = <S extends {}>( state: S ): state is S & Opened =>
    is_focused( state ) && has_opened( state );

const focus = <S extends HasOptions>( state: S & NoFocused ): S & Focused =>
    set_focused( state );

const leave = <S extends {}>( state: S & Focused & NoOpened ): S & HasOptions =>
    unset_focused( state );

const open = <S extends  Focused>( state: S & NoOpened ): S & Opened =>
    set_opened( state,
        OptionsComponent.create_initial_state( state.options ) );

const close = <S extends {}>( state: S & Opened ): S & Focused =>
    remove_opened( set_options( state, OptionsComponent.getOptions( state.opened ) ) );

const maybeClose = <S extends {}>( state: S & Opened ): S & Focused | S & Opened =>
    !OptionsComponent.is_opened( state.opened )
        ? close( state )
        : state;





const Value = ( state: HasOptions): HTMLElement =>
    <div className="dropdown-value"
        //@ts-ignore
         style={ VALUE_STYLES }>{
             is_opened( state )
                ? OptionsComponent.getValue( state.opened ).label
                : state.options.value.label
    }</div> as HTMLElement;

const Dropdown = (state: HasOptions): HTMLElement =>
    <div className={ "dropdown"
            + (has_class( state ) ? ` ${state.class}` : "")
            + (is_opened( state ) ? " opened" : "")
         }
         tabIndex={ 0 }
         //@ts-ignore
         style={ CONTAINER_STYLES }>
        <Value { ... state } />
        { is_opened( state )
            ? <OptionsComponent.Render { ... state.opened } />
            : <span /> }
    </div> as HTMLElement;
const EmptyDropdown = (): HTMLElement =>
    <span className="dropdown-empty" /> as HTMLElement;

const render = (state: State): HTMLElement =>
    !has_options( state )
        ? <EmptyDropdown /> as HTMLElement
        : <Dropdown {...state} /> as HTMLElement;

const is_options_event = ( event: Event ): boolean =>
    event.target instanceof HTMLElement &&
    event.target.matches( ".dropdown-options, .dropdown-options *" );





const maybeFocus = (state: State, event: Event): State =>
    has_options( state ) && !is_focused( state )
        ? focus( state )
    : state;

const maybeLeave = (state: State, event: Event): State =>
    is_focused( state )
        ? leave( is_opened( state )
            ? close( state )
            : state )
    : state;

const clicked = ( state: State, event: Event ): State =>
    has_options( state )
        ? has_focused( state )
            ? has_opened( state )
                ? maybeClose(
                    set_opened(
                        state,
                        OptionsComponent.clicked( state.opened, event )
                    )
                )
            : open( state )
        : open( focus( state ) )
    : state;

const mouseMoved = ( state: State, event: Event ): State =>
    !is_opened( state ) || !is_options_event( event )
        ? state
    : set_opened( state,
        OptionsComponent.mouseMoved( state.opened, event ) )

const focusedKeydown = <S extends {}>( state: S & Focused & NoOpened, event: Event ): S =>
    (event as KeyboardEvent).ctrlKey
        ? state
    : (event as KeyboardEvent).altKey
        ? [ "ArrowDown", "ArrowUp" ].includes( (event as KeyboardEvent).code )
            ? open( state )
            : state
    : [ "Enter", "Space" ].includes( (event as KeyboardEvent).code )
        ? open( state )
    : "ArrowDown" === (event as KeyboardEvent).code
        ? set_options( state, maybe_select_next( state.options ) )
    : "ArrowLeft" === (event as KeyboardEvent).code
        ? set_options( state, maybe_select_prev( state.options ) )
    : "ArrowUp" === (event as KeyboardEvent).code
        ? set_options( state, maybe_select_prev( state.options ) )
    : "ArrowRight" === (event as KeyboardEvent).code
        ? set_options( state, maybe_select_next( state.options ) )
    : state;

const keydown = ( state: State, event: Event ): State =>
    !is_focused( state )
        ? state
    : has_opened( state )
        ? maybeClose(
            set_opened( state, OptionsComponent.keydown( state.opened, event ) ))
        : focusedKeydown( state, event );




const valueChanged = ( oldState: State, newState: State ): boolean =>
    has_options( oldState ) && has_options( newState ) &&
        !is_opened( newState ) && getValue( oldState ) !== getValue( newState );
const inputEvent = ( state: State ): Event => new InputEvent( "input" );
const changeEvent = ( state: State ): Event => new Event( "change" );




const getValue = <S extends {}>( state: S ): string =>
    !has_options( state )
        ? ""
        : state.options.value.value ?? "";



const hasValue = ( state: State ): [ValidityStateFlags, string] =>
    getValue( state ) === ""
        ? [ { valueMissing: true }, "This field is required" ]
        : VALID;

const validate = ( state: State ): [ValidityStateFlags, string] =>
    has_required( state )
        ? hasValue( state )
    : VALID;



const findOptions = (elem: HTMLElement): NodeListOf<HTMLOptionElement> =>
    elem.querySelectorAll("option");

const findSelectedOption = (elem: HTMLElement): HTMLOptionElement | null =>
    elem.querySelector("option[selected]")

const toOption = (elem: HTMLOptionElement): Option =>
    ({
        label: elem.innerHTML,
        value: elem.value,
        disabled: elem.disabled,
        class: elem.className ?? undefined
    });

const toOptions = (nodes: NodeListOf<HTMLOptionElement>, selected: HTMLOptionElement | null): Options =>
    ((options, selectedIndex) => ({
        left: options.slice(0, selectedIndex),
        value: options[selectedIndex],
        right: options.slice(selectedIndex + 1),
    }))
    (Array.prototype.map.call(nodes, toOption) as Option[],
        selected ? Array.prototype.indexOf.call(selected.parentElement!.children, selected) : 0);

const maybeAppendOptions = <T extends {}>(object: T, elem: HTMLElement): T & OptionsState =>
    ((nodes, selected) => 0 === nodes.length
            ? {...object, options: undefined}
            : {...object, options: toOptions(nodes, selected)}
    )(findOptions(elem), findSelectedOption(elem));

const maybeAppendRequired = <T extends {}>(object: T, elem: HTMLElement): T & ValidationState =>
    elem.hasAttribute( "required" )
        ? add_required( object )
    : object;

const maybeAppendClass = <T extends {}>(object: T, elem: HTMLElement): T & ClassState =>
    elem.className !== ""
        ? set_class( object, elem.className )
    : object;

const domchanged = (state: State, elem: HTMLElement): State =>
    maybeAppendClass(
        maybeAppendRequired(
            maybeAppendOptions({}, elem),
            elem ),
        elem )






const dropdown = {
    initialState: { options: undefined },
    render,
    formValue: getValue,
    domchange: domchanged,
    events: {
        focus: maybeFocus,
        blur: maybeLeave,
        click: clicked,
        mouseover: mouseMoved,
        keydown
    },
    emit: [
        {
            when: valueChanged,
            emit: [ inputEvent, changeEvent ]
        }
    ],
    props: {
        value: {
            get: getValue
        }
    },
    validate
}

export { State, dropdown };