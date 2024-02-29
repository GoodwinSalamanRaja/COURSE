AOS.init({
    duration: 1000,
    offset: 300,
    // easing: 'ease',
    // once: true
})
var range=document.getElementById("range")
var w1=document.getElementById("web")
var j1=document.getElementById("java")
var p1=document.getElementById("python")
var a1=document.getElementById("analyst")
var s1=document.getElementById("science")
var d1=document.getElementById("design")
var f1=document.getElementById("full")
function rangefn(x){
    if(x==1){
        w1.style.color="rgb(0,117,255)"
        j1.style.color=null
        p1.style.color=null
        a1.style.color=null
        s1.style.color=null
        d1.style.color=null
        f1.style.color=null 
        range.value=1
    }
    if(x==2)
    {
        j1.style.color="rgb(0,117,255)"
        w1.style.color=null
        p1.style.color=null
        a1.style.color=null
        s1.style.color=null
        d1.style.color=null
        f1.style.color=null
        range.value=2
    }
    if(x==3)
    {
        p1.style.color="rgb(0,117,255)"
        j1.style.color=null
        w1.style.color=null
        a1.style.color=null
        s1.style.color=null
        d1.style.color=null
        f1.style.color=null
        range.value=3
    }
    if(x==4)
    {
        a1.style.color="rgb(0,117,255)"
        j1.style.color=null
        p1.style.color=null
        w1.style.color=null
        s1.style.color=null
        d1.style.color=null
        f1.style.color=null
        range.value=4
    }
    if(x==5)
    {
        s1.style.color="rgb(0,117,255)"
        j1.style.color=null
        p1.style.color=null
        w1.style.color=null
        a1.style.color=null
        d1.style.color=null
        f1.style.color=null
        range.value=5
    }
    if(x==6)
    {
        d1.style.color="rgb(0,117,255)"
        j1.style.color=null
        p1.style.color=null
        w1.style.color=null
        s1.style.color=null
        a1.style.color=null 
        f1.style.color=null
        range.value=6
    } 
    if(x==7)
    {
        f1.style.color="rgb(0,117,255)"
        j1.style.color=null
        p1.style.color=null
        w1.style.color=null
        s1.style.color=null
        d1.style.color=null
        a1.style.color=null
        range.value=7
    }
}



