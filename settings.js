var langs = {
    'fr':'French',
    'en':'English',
    'de':'German',
    'it':'Italian',
    'es':'Spanish'
};

jQuery(document).ready(function () {
    add_languages_options();
    $("#source").val( get_current_lang("source") );
    $("#dest").val( get_current_lang("dest") );
} );

function add_languages_options() 
{
    $.each(["source","dest"], function(optionkey,optionid) {
        $.each(langs, function(key,value) {
            $('#'+optionid).append($('<option>', {value: key,text: value}));
        });
    });
}

function get_current_lang(type) 
{
    if (type == "source"  || type == "dest"){
        if (localStorage[type] in langs){
            return localStorage[type];
        }else{
            return get_default(type);
        }
    }
}

function get_default(type)
{
    if (type == "source") return "en";
    else  return "es";
}

function get_lang_value(keytc) {
    var valuetc = "";
    $.each(langs, function(key,value) {
        if (keytc == key) valuetc=value;
    });
    return valuetc;
}

$(document).on('click', '#save', function(){
    localStorage["source"]  = $("#source").val();
    localStorage["dest"]    = $("#dest").val();
    $("#userstatus").html("<b>Options saved</b>: From "  + get_lang_value( $("#source").val() ) + " into " + get_lang_value( $("#dest").val() ) );
});

