beforeEach(function() {
    this.addMatchers({
        hasClass : function () {
            return {
                compare : function (actual, expected) {
                    return {
                        pass : actual.getAttribute('class').then(function (classes) {
                            return classes.split(' ').indexOf(expected) !== -1;
                        })
                    };
                }
            };
        }
    });
});
