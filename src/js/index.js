import 'bootstrap';
import '../scss/index.scss';

$('#alert').on('click', () => {
  alert('jQuery works!');
});
// Your jQuery code

$('#toggle').click(function() {
  $(this).toggleClass('active');
  $('#overlay').toggleClass('open');
});

