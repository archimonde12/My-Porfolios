var inputs = document.querySelectorAll('.inputfile');
Array.prototype.forEach.call(inputs, function (input) {
    var label = input.nextElementSibling,
        labelVal = label.innerHTML;

    input.addEventListener('change', function (e) {
        var fileName = '';
        if (this.files && this.files.length > 1)
            fileName = (this.getAttribute('data-multiple-caption') || '').replace('{count}', this.files.length);
        else
            fileName = e.target.value.split('\\').pop();

        if (fileName)
            label.querySelector('strong').innerHTML = fileName;
        else
            label.innerHTML = labelVal;
        console.log(e.target.files[0])
        changeImage(this);
    });
});

var fileTag = document.getElementById("file"),
    preview = document.getElementById("preview"),
    background=document.querySelector(".background");


function changeImage(input) {
  var reader;

  if (input.files && input.files[0]) {
    reader = new FileReader();

    reader.onload = function(e) {
      preview.setAttribute('src', e.target.result);
      preview.style.border=`2px solid black;`
      background.style.backgroundImage=`url(${e.target.result})`;
      background.style.backgroundRepeat=`no-repeat`;
      background.style.backgroundSize=`cover`;
      background.style.backgroundPosition=`center center`;
      background.style.filter=`blur(5px)`;
    }

    reader.readAsDataURL(input.files[0]);
  }
}