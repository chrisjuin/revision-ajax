$("#send").click(function(){

$.ajax({
    url : 'http://127.0.0.1/private/revision.php',
    type: 'POST' ,
    date : {name :'juin', surname:'chris' },
    datatype : 'html' ,
sucess : function(data){
    $('#alert').html(data)
},
    error: function(){
        $('#alert').html('double ciao')
    },

});

});
