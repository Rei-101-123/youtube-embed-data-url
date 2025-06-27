//<iframe width="560" height="315" src="https://www.youtube.com/embed/JPLhhGvLXGg?si=7Hz1HXb5gOSKpz64" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
const a = document.querySelector('input#url')
//JPLhhGvLXGg
const b=()=>{
    const data = `<iframe width="560" height="315" style="width: 100%;height: 100%;" src="https://www.youtube.com/embed/${a.value}?si=7Hz1HXb5gOSKpz64" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
    const encoded = btoa(data)
    document.querySelector("textarea#output").innerHTML=`data:text/html;base64,${encoded}`
}
a.addEventListener('change',b)
document.querySelector("button").addEventListener('click',b)
