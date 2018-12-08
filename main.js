$(document).ready(() => {

  const colors = ['Aquamarine', 'CadetBlue', 'DarkOrange', 'LightBlue', 'LightCoral'];
  const quotes = [
    'Remember no one can make you feel inferior without your consent.',
    'Life is what happens to you while you\'re busy making other plans.',
    'Change your thoughts and you change your world.',
    'The only way to do great work is to love what you do.',
    'Nothing is impossible, the word itself says, "I\'m possible!"',
    'The best revenge is massive success.'
  ];
  const authors = [
    'Eleanor Roosevelt',
    'John Lennon',
    'Norman Vincent Peale',
    'Steve Jobs',
    'Audrey Helpburn',
    'Frank Sinatra'
  ];

  const changeQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    $('#text').html("<i class=\"fa fa-quote-left\"></i> " + quotes[randomIndex]);
    $('#author').html("-- " + authors[randomIndex]);
  }

  const changeColor = () => {
    const randomIndex = Math.floor(Math.random() * colors.length);
    const color = colors[randomIndex];
    $('body').css('backgroundColor', color);
    $('#quote-text').css('color', color);
    $('.button').css('backgroundColor', color);
  }

  changeQuote();
  changeColor();

  $('#new-quote').on('click', ()=> {
    changeQuote();
    changeColor();
  })

})
