// JavaScript Document

//Task 03
function validateEmployeeNumber()
{
	var empno = document.getElementById("txtEmployeeNumber").value;
	
	var p1 = empno.substring(0,3);
	var n1 = empno.substring(3,5);
	var arr = empno.split('_');
	
	if((p1 == "EMP") && (!isNaN(n1)) && (!isNaN(arr[1])) && (!isNaN(arr[2])) && (arr[1].length == 2) && (arr[2].length == 2) )
		{
			alert("correct");
			return true;
		}
	alert("Plese enter valid format");
	return false;
}
	
//Taks 04
function validateDepartment()
{
		if((document.getElementById("rdoDepartment_0").checked) || (document.getElementById("rdoDepartment_1").checked))
			{
				return true;
			}
		alert("Please select department");
		return false;
}
	
//Task 5
function validateLeveType()
{
	var type = document.getElementById("lstType").value;
	if(type == "……………………")
		{
			alert("select correct level type");
			return false;
		}
	return true;
}
	// Task 6
	function validateContact()
	{
		var contact = document.getElementById("txtContact").value;
		if((isNaN(contact)) || (contact.length!=10))
			{
				alert("plese enter valind number");
				return false;
			}
				return true;
	}
	
	//Task 7
	function ValidateAll()
	{
		if(validateEmployeeNumber() && validateDepartment() && validateLeveType() && validateContact())
		{
				alert("Leave applid sucess");
		}
		else
		{
			event.preventDefault();
		}
	}
	
	
