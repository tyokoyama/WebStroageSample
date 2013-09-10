function storageCtrl($scope) {
	if(window.localStorage) {
		$scope.error = false;
		$scope.errorMessage = "";
	} else {
		$scope.errorMessage = "WebStorageに対応していません。";
		$scope.error = true;
		return;
	}

	$scope.load = function() {
		var storage = getStorage();

		$scope.save_value = storage.getItem("save_value");
	}

	$scope.save = function() {
		var storage = getStorage();

		storage.setItem("save_value", $scope.save_value);
	}

	$scope.save_value = "";
}

function getStorage() {
	return window.localStorage;
}