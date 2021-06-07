 $(document).ready(function() 
        {        
          $("#hasPrimaryInsurance").on('click', function()
          {         
            if($(this).is(":checked"))
            {          
              $("#primaryInsurance").removeClass('invisible');
            }
            else
            {
              $("#primaryInsurance").addClass('invisible');
              //Have to also hide Secondary Insurance if they uncheck Primary, since they can't have Secondary without Primary
              //Also want to uncheck the "Secondary Insurance Checkbox"
              $("#hasSecondaryInsurance").prop("checked", false);
              $("#secondaryInsurance").addClass('invisible');
            }
          });

          $("#hasSecondaryInsurance").on('click', function()
          {        
            if($(this).is(":checked"))
            {      
              $("#secondaryInsurance").removeClass('invisible');
            }
            else
            {
              $("#secondaryInsurance").addClass('invisible');
            }
          });

          $("#optInTextAlerts").on('click', function()
          {        
            if($(this).is(":checked"))
            {      
              $("#textAlerts").removeClass('invisible');
            }
            else
            {
              $("#textAlerts").addClass('invisible');
            }
          });

          $("#btn").on('click', submitInformation);

          function submitInformation()
          {
            var patientName = $("#name").val();
            alert('Patient Information for ' + patientName + ' submitted successfully.'); 
            //Now clear all the textboxes by looking for everything with a class of "text"
            $(".text").val('');
            //Uncheck all the checkboxes by finding the checkbox class I added to all the checkboxes
            $(".checkbox").prop("checked",false);
            //Hide all the appropriate Divs by finding the "hiddenDiv" class I added to the Divs that should hide
            $(".hiddenDiv").addClass('invisible');
          }
            
        });