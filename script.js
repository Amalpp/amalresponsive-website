$(document).ready(function(){
    $("#submit-form").validate({
        rules:{
            Name:{
            required:true,
            minlength:4,
                maxlenth:12
            },
            email:{
             required:true,
             email:true
            },
            Mobile:{
		required:true,
	        digit:true
		minlength:10
            },
		messages:{
                mobile_number: {required: "Please Enter Your Mobile Number",number:"Please enter numbers Only"}
	    },
            comment:{
                required:true,
                minlength:6
            }
        }
	
    })
})
