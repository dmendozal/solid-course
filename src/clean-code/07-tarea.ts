(()=>{

    //* Aplicar el principio de responsabilidad única
    //* Priorizar la composición frente a la herencia

    type HtmlType = 'input'|'select'|'textarea'|'radio';
   
    class HtmlElement {
        constructor(
            public id: string,
            public type: HtmlType,
        ) {}
    }

    class InputAttributes{
        public value: string;
        public placeHolder: string;

        constructor(
            value: string,
            placeHolder: string,
        ) {
            this.value = value;
            this.placeHolder = placeHolder;
        }
    }

    class InputEvents {
        constructor() {}

        setFocus() {};
        getValue() {};
        isActive() {};
        removeValue() {};
    }

    interface InputElementProps { 
        htmlElement: HtmlElement;
        inputAttributes : InputAttributes;
    }

    class InputElement{
        public html: HtmlElement;
        public attributes: InputAttributes;
        public events : InputEvents;

        constructor(value: string, placeHolder: string, id: string){
            this.html = new HtmlElement(id, 'input');
            this.attributes = new InputAttributes(value, placeHolder);
            this.events = new InputEvents();
        }
    }

    //? Idea para la nueva clase InputElement

    const nameField = new InputElement('Daniel', 'Enter first name', 'txtName');

    console.log({ nameField });

})()