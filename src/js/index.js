import 'bootstrap';
import '../scss/index.scss';

$('#alert').on('click', () => {
  alert('jQuery works!');
});
// Your jQuery code

var elem = document.querySelector('.main-carousel');
var flkty = new Flickity( elem, {
  // options
  cellAlign: 'left',
  contain: true
});

// element argument can be a selector string
//   for an individual element
var flkty = new Flickity( '.main-carousel', {
  // options
});
