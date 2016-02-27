(function(angular, undefined) {
  angular.module("memoryApp.constants", [])

.constant("appConfig", {
	"userRoles": [
		"guest",
		"user",
		"admin"
	]
})

;
})(angular);