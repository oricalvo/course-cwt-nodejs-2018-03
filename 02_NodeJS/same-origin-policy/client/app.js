const appModule = angular.module("myApp", []);

class AppComponent {
    constructor($http) {
        this.$http = $http;
    }

    getData() {
        this.$http.get("/api/data").then(res => {
            this.data = res.data.data;
        });
    }
}

appModule.component("appRoot", {
    controller: AppComponent,
    template: `
    <h1>Hello Angular</h1>
    <button ng-click="$ctrl.getData()">Get Data</button>
    <div>Data is: {{$ctrl.data}}</div>
`
});

angular.bootstrap(document, [appModule.name]);
