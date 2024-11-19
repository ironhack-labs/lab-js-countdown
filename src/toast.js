class Toast {
    constructor(message) {
        this.message = message
        this.toast = document.createElement("div");
        this.toast.id = "toast"
        this.toast.innerHTML = `<p>${this.message}</p>`
        this.closeToast = document.createElement("span");
        this.closeToast.id = "close-toast";
        this.closeToast.innerHTML="x";
        this.toast.appendChild(this.closeToast);
        this.closeToast.addEventListener('click', e=>{
            this.toast.classList.remove("show");
            this.toast.classList.add("hide");
        });
        document.body.appendChild(this.toast);
        this.show();
    }
    show() {
        this.toast.classList.add("show");
        setTimeout(() => {
            this.toast.classList.remove("show");
        }, 4000) // Hide after 3 seconds
    }
}
