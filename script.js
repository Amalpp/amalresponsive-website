$(document).ready(function(){
		$("#inputName").blur(function(){
			var text=$(this).val();
			if(text.length<4)
				{
					$("#name1").show();
				}
			else{
				$("#name1").hide();
			}
		});
		
			$("#inputNumber").blur(function(){
			var num=$(this).val();
			if(num.length!==10)
				{
					$("#number1").show();
				}
			else{
				$("#number1").hide();
			}
		});
		
		$("#inputmail").blur(function(){
			var place=$(this).val();
			if(place.length<4)
				{
					$("#mail4").show();
				}
			else{
				$("#mail4").hide();
			}
		});
			$("#Comments").blur(function(){
			var comment=$(this).val();
			if(comment.length<=0)
				{
					$("#comment1").show();
				}
			else{
				$("#comment1").hide();
			}
		});
	});22