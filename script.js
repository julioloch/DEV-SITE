var faqs = document.getElementsByClassName("faq-question");
var i;

for (i = 0; i < faqs.length; i++) {
    faqs[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var answer = this.nextElementSibling;
        if (answer.style.display === "block") {
            answer.style.display = "none";
            this.querySelector('.arrow').classList.remove('down');
        } else {
            answer.style.display = "block";
            this.querySelector('.arrow').classList.add('down');
        } 
    });
}
