$(document).ready(function() {

    $('#cep').inputmask('99999-999', { clearMaskOnLostFocus: false });

    $("#buscar-cep").click(function(event) {
        event.preventDefault();

        var cep = $("#cep").val().replace();

        if (cep != null) {
            $.get("https://viacep.com.br/ws/"+cep+"/json/", function(dados) {
                if (!dados.erro) {
                    $("#endereco-modal").find("#logradouro").val(dados.logradouro);
                    $("#endereco-modal").find("#bairro").val(dados.bairro);
                    $("#endereco-modal").find("#uf").val(dados.uf);
                    $("#endereco-modal").find("#complemento").val(dados.complemento);   
                    $("#endereco-modal").find("#localidade").val(dados.localidade);
                    $("#endereco-modal").find("#ddd").val(dados.ddd);

                    $("#endereco-modal").modal("show");
                } 
                else {
                    $("#erro-modal").modal("show");
                }
            })
        }
        else {
            $("#erro-modal").modal("show");
        }
    })
})