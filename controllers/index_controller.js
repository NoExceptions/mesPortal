exports.new_index = function(request, response) {
    response.render('index',{scripts: [
        '/jquery/dist/jquery.js', 
        '/materialize/dist/js/materialize.js',
        '/javascripts/mynav.js'
        ]}
    )
};
