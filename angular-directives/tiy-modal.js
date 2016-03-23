app.directive('tiyModal', function () {

  return {

    // transclude specifies that we are going to allow
    // inner content (e.g. our directive will wrap
    // some other content)
    transclude: true,

    // If replace is true, then the <tiy-modal>... element in
    // the calling HTML will be replaced with the HTML of our
    // tiy-modal.html template. If replace is false (the default)
    // then the <tiy-modal> element will simply contain/wrap
    // the content of tiy-modal.html
    replace: true,

    scope: {
      onclose: '='
    },

    templateUrl: 'tiy-modal.html',

    controller: ['$scope', function ($scope) {
      var self = this;

      self.close = $scope.onclose;
    }],

    controllerAs: 'mo',

    link: function ($scope, element, attrs, ctrl) {

      function closeModal () {

        // This is how we tell Angular that we're about
        // to change something. Since this event comes from
        // a non-Angular source, we need to do this...
        $scope.$apply(function() {
          ctrl.close();
        });
      }

      // We don't want to close the modal if we clicked
      // inside the modal...
      element[0].addEventListener('click', function (e) {
        e.stopPropagation();
      });

      setTimeout(function () {
        // We do want to close the modal if we click the document
        document.addEventListener('click', closeModal);

        // When the directive is destroyed, remove the
        // click handler from document
        $scope.$on('$destroy', function () {
          document.removeEventListener('click', closeModal);
        });
      });
    }
  }
});
