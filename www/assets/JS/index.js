
document.addEventListener("DOMContentLoaded",()=>{
    const notifications = document.querySelectorAll(".notification_div")
    notifications.forEach(element =>{
        const type = element.dataset.type
        const iframe = document.createElement("iframe")
        iframe.classList.add("notification")
        const now = new Date();
        const year = now.getFullYear()
        let url=""
        if (type == "YouTube") {
            url = `notification/${year}/YouTube.html`
        }  else {
            url = `notification/${year}/notification.html`
        } 
        iframe.src = url
        const a = document.createElement("a")
        a.href = url
        a.textContent = "別タブで開く"
        a.classList.add("link")
        a.target = "_blank"
        element.appendChild(a)
        element.appendChild(iframe)

    })
})//        <iframe src="notification/2025/YouTube.html" frameborder="0" class="notification"></iframe>
