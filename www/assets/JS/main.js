const sleep = (sec) => new Promise(resolve => setTimeout(resolve, sec * 1000));
const sleepAndExecute = (callback, sec) => {
  return new Promise(resolve => {
    setTimeout(() => {
      callback(); // 指定された関数を実行
      resolve(); // Promiseを解決
    }, sec * 1000);
  });
};


document.addEventListener("DOMContentLoaded", async() => {
    const footer_under_ele = document.getElementsByTagName("footer")[0].querySelectorAll("*")
    //const footer_under_ele = document.querySelectorAll("*")
     footer_under_ele.forEach(ele=>{
            ele.classList.add("fade")
    })

const menu = document.getElementById("menu").getElementsByTagName("ul")[0]
    const pagelist = [
        {"name":"トップページ","url":["/","/index.html"]},
        {"name":"ご連絡","url":["/contact","/contact/index.html"]},
        {"name":"SNS","url":["/sns","/sns/index.html"]}
    ]
    pagelist.forEach(value =>{
        const li = document.createElement("li")
        const a = document.createElement("a")
        a.textContent = value.name
        a.href = value.url[0]
        //a.target = "_blank"
        value.url.forEach(url =>{
            console.log(url == location.pathname)
        if (url == location.pathname) {
            a.href = "#top"
            a.target = ""
        }
        })

        a.classList.add("link")
        li.classList.add("menu_li")
        menu.appendChild(li)
        li.appendChild(a)
    })
    menu.style.visibility = "hidden"
    sleepAndExecute(()=>{
        menu.style.visibility = "visible"
    },1 )

    //fade
    const fadeElems = document.querySelectorAll('.fade');
    const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
        entry.target.classList.add('show');
    }
    });
    }, {
    rootMargin: "-10px 0px", // ←ここを追加！
    });


    fadeElems.forEach(elem => observer.observe(elem));
})