$(document).ready(

    function(){
        $('input[name="sexo"]').change(function() {
        console.log('fuck');
        console.log($('input[name="sexo"]:checked').val());
        });
        
        $('select').material_select();
        $('select').change(function() {
            getCities($('select').val());
        });

        $('input.autocomplete').autocomplete({
            data: {
              "Apple": null,
              "Microsoft": null,
              "Google": null,
            },
            limit: 20, // The max amount of results that can be shown at once. Default: Infinity.
            onAutocomplete: function(val) {
              // Callback function when value is autcompleted.
            },
            minLength: 3, // The minimum length of the input for the autocomplete to start. Default: 1.
          });
                
    }
)


{

    $('.pickadate').pickadate({
        selectMonths: true,
        selectYears: 100, 
        format: 'dd/mm/yyyy'
    });
    console.log('gotcha!2');

    function getCities(uf) {

        jQuery.ajax({
            type: "GET",
            url: "https://servicodados.ibge.gov.br/api/v1/localidades/estados/"+uf+"/municipios",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (data, status, jqXHR) {
                //console.log(data)
                result = {};

                $.each(data, function(i, item) {
                    result[item.nome] = null
                });
               
                $('input.autocomplete').autocomplete({
                    data : result,
                    limit: 6,
                    minLength: 3
    
                });
            },

            error: function (jqXHR, status) {
                console.log('falhou')
            }
        });
    }

}


