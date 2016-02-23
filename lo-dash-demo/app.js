var greeting = _.template('<h1>Hello, <%- m.name %>!</h1>', { variable: 'm' });
var renderedHtml = greeting({ name: 'Jasmine Baik' });
$('#main').html(renderedHtml);
