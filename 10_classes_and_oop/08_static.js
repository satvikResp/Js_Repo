class User {
    static createUser() {
        console.log("User created");
    }

    static test() {
        User.createUser();  // ✅
    }
}

User.test();

const chai = new User();

chai.createUser();  // ❌

/*Conclusion

static method class ka hota hai, object ka nahi.

User.createUser();  // ✅
chai.createUser();  // ❌
Class ke bahar bhi call kar sakte ho.
Class ke andar bhi call kar sakte ho, but automatically nahi chalta.
Static method ko call karne ke liye ClassName.method() use karte hain.
 */