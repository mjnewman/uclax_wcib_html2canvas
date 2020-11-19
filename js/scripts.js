const button = document.getElementById('saveDIV');

button.addEventListener( 'click', saveDIV );

function saveDIV () {
  html2canvas(document.querySelector('#capture')).then(function(canvas) {
    saveAs(canvas.toDataURL(), 'my_download_file.png');
  });
}

function saveAs(uri, filename) {
  var link = document.createElement('a');
  if (typeof link.download === 'string') {
    link.href = uri;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  } else {
    window.open(uri);
  }
}
