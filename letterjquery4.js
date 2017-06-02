(function($){
	$(document).ready(function(){

		//on clicking the start button
		$(".start").click(function() {
			$(".container").show();
			$(".c").show();
			$(this).hide();
			$(".icon").hide();
			$(".heading").addClass("shift");

			c();

			setTimeout(game1, 800)
			setTimeout(game2, 3000);			
			setTimeout(game3, 6000);
			setTimeout(game4, 9000);
			setTimeout(game5, 12000);
			setTimeout(game6, 15000);

		});

		$(".restart").click(function() {
			location.reload();
		});

		//function for setting a timer
		function c(){
	    	var n=$('.c').attr('id');
		    var c=n;
		    $('.c').text(c);
		    setInterval(function(){			        
		    	c--;
			    if(c>=0){
		            $('.c').text(c);
		        }
			    if (c==0 && ($(".submit").data("clicked") == "no")) {
				    $(".container").hide();
					$(".heading").hide();
					$(".heading2").show();
					$(".icon").show().addClass("timeout");
					$(".t").show();
			    }
			},1000);
		}

		var fulltext = "";

		//function for div1
		function game1(){
			
			var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
			var text1 = "";

			var i = 0;
			
			while (i < 3) {
				text1 += possible.charAt(Math.floor(Math.random() * possible.length));
				i++;
			}
			$(".letter-1").fadeIn(18000);
			$(".letter-1").text(text1);
			fulltext += text1;
			// $(".letter-1").fadeOut(18000);
			$(".letter-1").animate({opacity: '0'}, 2500);
			
		}

		//function for div2
		function game2(){
			
			var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
			var text2 = "";

			var i = 0;
			
			while (i < 3) {
				text2 += possible.charAt(Math.floor(Math.random() * possible.length));
				i++;
			}
			$(".letter-2").fadeIn(15000);
			$(".letter-2").text(text2);
			fulltext += text2;
			// $(".letter-2").fadeOut(15000);
			$(".letter-2").animate({opacity: '0'}, 2500);
		}

		//function for div3
		function game3(){
			
			var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
			var text3 = "";

			var i = 0;
			
			while (i < 3) {
				text3 += possible.charAt(Math.floor(Math.random() * possible.length));
				i++;
			}
			$(".letter-3").fadeIn(12000);
			$(".letter-3").text(text3);
			fulltext += text3;
			// $(".letter-3").fadeOut(12000);
			$(".letter-3").animate({opacity: '0'}, 2500);
		}

		//function for div4
		function game4(){
			
			var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
			var text4 = "";

			var i = 0;
			
			while (i < 3) {
				text4 += possible.charAt(Math.floor(Math.random() * possible.length));
				i++;
			}
			$(".letter-4").fadeIn(9000);
			$(".letter-4").text(text4);
			fulltext += text4;
			// $(".letter-4").fadeOut(9000);
			$(".letter-4").animate({opacity: '0'}, 2500);
		}

		//function for div5
		function game5(){
			
			var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
			var text5 = "";

			var i = 0;
			
			while (i < 3) {
				text5 += possible.charAt(Math.floor(Math.random() * possible.length));
				i++;
			}
			$(".letter-5").fadeIn(6000);
			$(".letter-5").text(text5);
			fulltext += text5;
			// $(".letter-5").fadeOut(6000);
			$(".letter-5").animate({opacity: '0'}, 2500);
		}

		//function for div6
		function game6(){
			
			var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
			var text6 = "";

			var i = 0;
			
			while (i < 3) {
				text6 += possible.charAt(Math.floor(Math.random() * possible.length));
				i++;
			}
			$(".letter-6").fadeIn(3000);
			$(".letter-6").text(text6);
			fulltext += text6;
			// $(".letter-6").fadeOut(3000);
			$(".letter-6").animate({opacity: '0'}, 2500);
		}
	
		//submit on pressing the Enter key
		$(".textarea").bind('keypress', function(e) {
            if(e.keyCode==13){
                 $(".submit").trigger("click");
             }
        });


		$(".submit").click(function(){
			$(this).data("clicked", "yes");
			$(this).hide();
			$(".restart").css("margin-top", "310px");
			$(".textarea").hide();
			$(".letters").hide();
			$(".heading").hide();
			$(".heading2").show();
			$(".c").hide();

			var input = $(".textarea").val();

			if (input == fulltext){	
				$(".icon").show().addClass("woniconimage");
				$(".w").show();
				
			}
			else {
				$(".icon").show().addClass("losticonimage");
				$(".l").show();
			}

		});
	});
})(jQuery);

