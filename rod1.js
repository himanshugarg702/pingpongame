const left=document.querySelector('body')
        const rod1=document.getElementById('div1')
        const rod2=document.getElementById('div2')
console.log(left)
// left.addEventListener()
document.addEventListener('keydown', function(e) {
switch (e.key) {

case 'ArrowLeft':
    
         rod1.style.left+=10+'px';
    // alert('left');
    break;
case 'ArrowRight':
    // alert('right');
    break;

    default:
        console.log(e.key);
        

}
});