const e=document.querySelector(".feedback-form"),l="feedback-form-state",t=JSON.parse(localStorage.getItem(l))??{email:"",message:""};e.elements.email.value=t.email;e.elements.message.value=t.message;e.addEventListener("input",a=>{a.target===e.elements.email&&(t.email=a.target.value),a.target===e.elements.message&&(t.message=a.target.value),localStorage.setItem(l,JSON.stringify(t))});e.addEventListener("submit",a=>{if(a.preventDefault(),e.elements.email.value==""||e.elements.message.value==""){alert("Fill please all fields");return}console.log(t),localStorage.removeItem(l),e.reset()});
//# sourceMappingURL=2-form-d4ca56a6.js.map
