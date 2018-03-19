
/* GENERATE FORM */
$(document).ready(function(){

    var $form = $('form');

    $form.submit(function(){

       $.post($(this).attr('action'), $(this).serialize(), function(response){
             
        $('#formInfo').append($form);

       },'json');

       return false;
       
    });

 });

// var data = $('#msrForm').serialize();


// $.ajax({
//     url:" ",
//     method: "POST",
//     data: data,
//     success: function(returnhtml) {
//         $('#formInfo').append(data);
//     }
// })
// var form_data = $(this).serialize();
// var form_url = $(this).attr("action");
// var form_method = $(this).attr("method").toUpperCase();


// $.ajax({
//     url: form_url, 
//     type: form_method,      
//     data: form_data,     
//     cache: false,
//     success: function(returnhtml){                          
//         $("#formInfo").html(returnhtml); 
                           
//     }           
 

// });



/*  var choice = document.getElementsByName('completed[]');

var value = "";

for (let i = 0; i < choice.length; i++) {

if(choice[i].checked) {
     value += choice[i].value 
}
}

$('#formInfo').append(value); 
*/


/* 	var choice = document.forms.msrForm.elements[ 'completed[]'];
*/ 
/*  for (let i = 0; i < choice.length; i++) {
if (choice.is(':checked')) {
alert(choice[i])
}

} */



/* for (let i = 0; i < choice.length; i++) {
choice[i].onclick = appendTo;
} */

/* function append() {
if (this.checked) {
alert(this.checked);
} else {

}


}
} */


/*  alert( choice.length ); */

/*  alert( choice[1].value ); */



/* 
var info = $('input').val(); */

/*  $.ajax({url: "#", success: function(result){
         $("#formInfo").append();
     }});  */

/* var values = $('input').is(':checked');

var info = $('input').attr('value');

if(values === true) {

$('#formInfo').append(info);

}  */



/*CLEAR TEXT BOX */
$('#resetForm').click(function() {
$('#formInfo').html('');

});

/* COPY TEXT */
$("#copy").click(function() {
$("#formInfo").select();
document.execCommand("Copy");
})




