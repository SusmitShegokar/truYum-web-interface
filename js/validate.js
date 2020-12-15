function validate(){
			var name=document.getElementById("title").value;
			var n=name.trim().length;
			if(n<1 || n>65 ){
				alert("Invalid Name");
			}else{
			var price=document.getElementById("price").value;
			var active=document.getElementsByName("Active");
			var flag=0;
				for(var i=0;i<active.length;i++){
					if(active[i].checked){
						flag=1;
						console.log(active[i].value);
					}
				}
				console.log(flag);
				if(flag==0){
					alert("please choose an option");
				}
				
			var dateOfLaunch= document.getElementById("dateOfLaunch").value;
			var category= document.getElementById("category").value;
			var freeDelivery= document.getElementById("freeDelivery").checked;
				
			return false;
		}
			
	}