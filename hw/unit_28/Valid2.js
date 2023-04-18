class Valid2 extends Valid {
    constructor(email, password) {
        super(email, password);
        this.error_message = '';
    }
    validate() {
        const a = super.validate();
        if (this.isValid == false) {
            this.error_message = 'password error';
            return this.isValid;
        } else {
            if (this.email == '') {
                this.error_message = 'email error';
                return this.isValid;
            }
        }
    }
}
