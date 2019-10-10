function validateEmail() {
    let e = [document.forms.contactForm.name.value, document.forms.contactForm.email.value, document.forms.contactForm.subject.value, document.forms.contactForm.message.value],
        a = !0,
        t = [];
    if (e.forEach(function(e, o) {
            if ("" == e || null == e) switch (a = !1, o) {
                case 0:
                    t.push("name");
                    break;
                case 1:
                    t.push("email");
                    break;
                case 2:
                    t.push("subject");
                    break;
                case 3:
                    t.push("message")
            }
        }), !a) return 2 == t.length ? (t[0] = `${t[0]} and ${t[1]}`, t.pop()) : t.forEach(function(e, a) {
        0 != a && a != t.length - 1 && (t[a] = ` ${t[a]}`), a == t.length - 1 && 1 != t.length && (t[a] = ` and ${t[a]}`)
    }), alert(`Please fill in your ${t}!`), !1;
    $(".sent").removeClass("fadeOut"), $(".sent").addClass("fadeIn"), $(".sent").show(), setTimeout(function() {
        document.forms.contactForm.name.value = "", document.forms.contactForm.phone.value = "", document.forms.contactForm.email.value = "", document.forms.contactForm.subject.value = "", document.forms.contactForm.message.value = ""
    }, 1e3), setTimeout(function() {
        $(".sent").removeClass("fadeIn"), $(".sent").addClass("fadeOut")
    }, 2e3)
}
