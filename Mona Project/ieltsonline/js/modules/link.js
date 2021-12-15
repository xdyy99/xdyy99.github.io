export default function linkFormat() {
    let Num = document.querySelectorAll(".phoneFormat");
    if (Num) {
        for (let i = 0; i < Num.length; i++) {
            let numTxt = Num[i].textContent;
            let numSplit = numTxt.split("");
            let phone = "tel:";
            for (let n = 0; n < numSplit.length; n++) {
                if (!isNaN(numSplit[n]) && numSplit[n] != " ") {
                    phone += numSplit[n];
                }
            }
            Num[i].setAttribute("href", phone);
        }
    }
    let Mail = document.querySelectorAll(".mailFormat");
    if (Mail) {
        for (let i = 0; i < Mail.length; i++) {
            let mailTxt = Mail[i].textContent;
            let mailSplit = mailTxt.split(" ");
            let email = "mailto:";
            for (let m = 0; m < mailSplit.length; m++) {
                email += mailSplit[m];
            }
            Mail[i].setAttribute("href", email);
        }
    }
}
