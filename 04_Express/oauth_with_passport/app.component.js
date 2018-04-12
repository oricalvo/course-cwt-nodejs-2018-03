class AppComponent {
    constructor($scope) {
        this.$scope = $scope;
        window.appRoot = this;
    }

    login() {
        window.open("/auth/google");
    }

    onAuthComplete(email) {
        this.$scope.$applyAsync(()=> {
            this.email = email;
        });
    }
}

appModule.component("appRoot", {
    controller: AppComponent,
    templateUrl: "app.component.html",
});

function onAuthComplete(email) {
    window.appRoot.onAuthComplete(email);
}
