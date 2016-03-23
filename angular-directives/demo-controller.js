app.controller('DemoCtrl', function () {
  var self = this;

  self.users = [
    { username: 'Kelly' },
    { username: 'Jasmine'},
    { username: 'Dana'},
    { username: 'Nicole'},
    { username: 'Mason'},
    { username: 'Bryce'},
    { username: 'Da-Me'},
    { username: 'Blake'}
  ];

  self.userToDelete = undefined;

  self.deleteUser = function (user) {
    self.userToDelete = user;
  };

  self.confirmDelete = function () {
    self.users = self.users.filter(function (user) {
      return user.username !== self.userToDelete.username;
    });

    self.userToDelete = undefined;
  };

  self.cancelDelete = function () {
    self.userToDelete = undefined;
  };
});
