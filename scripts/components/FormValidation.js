export class FormValidation {
    constructor(validForm) {
        this._validForm = validForm;
        this._group = this._validForm.querySelector('.form__group');
        this._formBtn = this._group.querySelector('.form__btn');
        this._inputs = [...this._group.querySelectorAll('.form__input')]
    }
    disablingButtonOn() {
        this._formBtn.classList.add('form__btn_status_inactive')
        this._formBtn.classList.remove('form__btn_status_active')
    }
    _disablingButtonOff() {
        this._formBtn.classList.add('form__btn_status_active');
        this._formBtn.classList.remove('form__btn_status_inactive')
    }
    _regulateButtons() {
        const isFormValid = this._inputs.every(input => {
            return input.validity.valid;

        })
        if (!isFormValid) {
            this.disablingButtonOn()
            console.log(isFormValid)
        } else {
            this._disablingButtonOff()
            console.log(isFormValid)
        }
    }
    _setEventListeners() {
        this._validForm.addEventListener('input', () => {
            this._regulateButtons()
        })
    }
    enableValidation() {
        this._setEventListeners()
    }
}