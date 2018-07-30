$(document).ready(

    function(){

        $('select').material_select();
        $('select').change(function() {
            getCities($('select').val());
        });

        $('input.autocomplete').autocomplete({
            
            limit: 20, // The max amount of results that can be shown at once. Default: Infinity.
            onAutocomplete: function(val) {
              // Callback function when value is autcompleted.
            },
            minLength: 3, // The minimum length of the input for the autocomplete to start. Default: 1.
          });

          $("#password").on("focusout", function (e) {
            if ($(this).val() != $("#password_conf").val()) {
                $("#password_conf").removeClass("valid").addClass("invalid");
            } else {
                $("#password_conf").removeClass("invalid").addClass("valid");
            }
        });
        
        $("#password_conf").on("keyup", function (e) {
            if ($("#password").val() != $(this).val()) {
                $(this).removeClass("valid").addClass("invalid");
            } else {
                $(this).removeClass("invalid").addClass("valid");
            }
        });

        

        
                
    }

    

    
)




{
    console.log("Date picker!");
    $('.pickadate').pickadate({
        selectMonths: true,
        selectYears: true, 
        format: 'yyyy-mm-dd'
    });

  

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

            }
        });
    }

}


