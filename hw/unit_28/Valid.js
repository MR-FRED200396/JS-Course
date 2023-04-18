class Valid {
    constructor(email, password) {
        this.email = email;
        this.password = password;
        this.isValid = false;
    }
    validate() {
        this.isValid = false;
        if (this.password.length > 6) {
            return (this.isValid = true);
        } else {
            return (this.isValid = false);
        }
    }
}
