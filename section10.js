//id format=coumn.row_no




//ADT Table
var adtTableCtr=0 ;
$("#addrow").click(function()
{
	adtTableCtr++;


	rowString = `
	<table class="ui celled table black unstackable" >
				
						<thead>
			              <th class="two wide"><center>Issue #</center></th>
			              <th class="one wide"><center>Date/Time Reported</center></th>
			              <th class="one wide"><center>Issue Identified By</center></th>
			              <th class="one wide"><center>Priority</center></th>
			              <th class="three wide"><center>Issue Description</center></th>
			              <th class="one wide"><center>Assigned To</center></th>
			              <th class="three wide"><center>Comments/Resolution</center></th>
			              <th class="two wide"><center>Resolved By</center></th>
			              <th class="one wide"><center>Closed Date</center></th>
			              <th class="one wide"><center>Status</center></th>

					</thead>

						<tbody>
						<tr>
						<td>
						  <div class="ui form">
						    <input type="text" id="Issues.${adtTableCtr}.1" name="Issues.${adtTableCtr}.1" />
						  </div>
						</td>

						<td>
						  <div class="ui form">
						    <input type="text" id="Date_Time_Reported.${adtTableCtr}.1" name="Date_Time_Reported.${adtTableCtr}.1" />
						  </div>
						</td>

						<td>
						<div class="ui form">
						  <input type="text" id="Issue_Identified_By.${adtTableCtr}.1" name="Issue_Identified_By.${adtTableCtr}.1" />
						</div>
						</td>

						<td>
							<div class="ui form">
							<input type="text" id="priority.${adtTableCtr}.1" name="priority.${adtTableCtr}.1" />
							</div>
						</td>

						<td>
							<div class="ui form">
								<input type="text" id="Issue_Description.${adtTableCtr}.1" name="Issue_Description.${adtTableCtr}.1" />
							</div>
						</td>

						<td>
							<div class="ui form">
							  <input type="text" id="Assigned_To.${adtTableCtr}.1" name="Assigned_To.${adtTableCtr}.1" />
							</div>
						</td>

						<td>
							<div class="ui form">
							  <input type="text" id="Comments_Resolution.${adtTableCtr}.1" name="Comments_Resolution.${adtTableCtr}.1" />
							</div>
						</td>

						<td>
						<div class="ui form">
						  <input type="text" id="Resolved_By.${adtTableCtr}.1" name="Resolved_By.${adtTableCtr}.1" />
						</div>
						</td>

						<td>
							<div class="ui form">
							  <input type="text" id="Closed_Date.${adtTableCtr}.1" name="Closed_Date.${adtTableCtr}.1" />
							</div>
						</td>
						<td>
						<div class="ui form">
						  <input type="text" id="Status.${adtTableCtr}.1" name="Status.${adtTableCtr}.1" />
						</div>
						</td>
				</tr>
				</tbody>
				</table>`
	$('#adtTable tbody:last').before(rowString);
	$('#adtTableCtr').val($adtTableCtr);
	$('.editField').prop('readOnly', false);
});






