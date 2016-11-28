var app = angular.module('formContatos', []);

app.controller('ContatoController', function($scope,$rootScope) {
	$rootScope.nomevalido = false;
	$rootScope.emailvalido = false;
	$rootScope.telefonevalido = false;

	$scope.saved = localStorage.getItem('lista');
	$scope.lista = (localStorage.getItem('lista')!==null) ? JSON.parse($scope.saved) : [];
	localStorage.setItem('lista', JSON.stringify($scope.lista));

	$scope.adicionaContato = function() {
		if(($rootScope.nomevalido) && ($rootScope.emailvalido) && ($rootScope.telefonevalido)){
			$scope.lista.push({
				nome: $scope.nome,
				email: $scope.email,
				telefone: $scope.telefone
			});
			$scope.limpar();
			localStorage.setItem('lista', JSON.stringify($scope.lista));
		}else{
			alert("Preencha o formulário completo!");
		}
	};
	$scope.limpar = function() {
		$scope.nome = '';
		$scope.email = '';
		$scope.telefone = '';
	};
	$scope.validaNome = function(){
		if(($scope.nome == "") || ($scope.nome == null) ){
			$rootScope.nomevalido = false;
			$scope.mensagemNome = true;
		}else{
			$rootScope.nomevalido = true;
			$scope.mensagemNome = false;
		}
	}
	$scope.validaEmail = function(){
		var email = document.getElementById('email');
  		var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  		
		if (!filter.test(email.value)) {
			email.focus;
			$scope.mensagemEmail = true;
		}else{
			$scope.mensagemEmail = false;
			$rootScope.emailvalido = true;
		}
	}
	$scope.validaTelefone = function(){
		if(($scope.telefone == "") || ($scope.telefone == null) ){
			$rootScope.telefonevalido = false;
			$scope.mensagemTelefone = true;
		}else{
			$rootScope.telefonevalido = true;
			$scope.mensagemTelefone = false;
		}
	}
});

//mascara telefone e nome
function mascara(o,f){
	v_obj=o
	v_fun=f
	setTimeout("verificaMascara()",1)
}
function verificaMascara(){
	v_obj.value=v_fun(v_obj.value)
}
function regexTel(v){
	v=v.replace(/\D/g,"");             //Remove tudo o que não é dígito
	v=v.replace(/^(\d{2})(\d)/g,"($1) $2"); //Coloca parênteses em volta dos dois primeiros dígitos
	v=v.replace(/(\d)(\d{4})$/,"$1-$2");    //Coloca hífen entre o quarto e o quinto dígitos
	return v;
}
function regexSoLetras(v){
	return v.replace(/\d/g,"") //Remove tudo o que não é Letra
}
window.onload = function(){
	document.getElementById('telefone').onkeypress = function(){
		mascara( this, regexTel );
	}
	document.getElementById('nome').onkeypress = function(){
		mascara( this, regexSoLetras );
	}
}