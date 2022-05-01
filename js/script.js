function nav_hide(){
    document.getElementById("nav").style.left = "-350px";
}

function nav_show(){
    document.getElementById("nav").style.left = "0px";
}

function chapters_toggle(){

    const element = document.getElementById("chapters");

    if (element.classList.contains('hidden')){
        element.classList.remove("hidden");
        element.classList.add("visible");
        element.style.height = "320px";
    } else if (element.classList.contains("visible")){
        element.classList.remove("visible");
        element.classList.add("hidden");
        element.style.height = "0px";
    }
}


// pdf navigation javascript start
const pdfSrc = "assets/Misir Ali Omnibus 1.pdf";
const pdfViewer = document.getElementById("pdfviewer");

function pdfNav(id){

    var pageNum = document.getElementById(id).getAttribute("pageNum");
    
    var finalSrc = pdfSrc.concat("#page=",pageNum)

    pdfViewer.src = finalSrc
    pdfViewer.contentWindow.location.reload();
    
}
// pdf navigation javascript end