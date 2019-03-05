


//Order Table

var TableCtr=0 ;
$("#addrow").click(function()
{
	
	TableCtr++;


	rowString = `	<table class="ui celled table black unstackable" ">
				
						<thead>
								<th colspan="2"><center>Test</center></th>
								<th colspan="2"><center>Expected Results</center></th>
								<th colspan="6"><center>Test Results</center></th>


							<tr>
								<th class="two wide"><center>Message</center></th>
								<th class="two wide"><center>ISCV Test Steps</center></th>
								<th class="three wide"><center>ISCV IBE</center></th>
								<th class="two wide"><center>HIS</center></th>
								<th class="one wide"><center>Date</center></th>
								<th class="one wide"><center>Pass/fail</center></th>
								<th class="one wide"><center>Expected Result</center></th>
								<th class="one wide"><center>Actual Result</center></th>
								<th class="two wide"><center>Comments</center></th>
								<th class="two wide"><center>Sign_off</center></th>
							</tr>
			              
			              	 

						</thead>

						<tbody>

								    <tr>
							    <td>
										ORU^R01
							    </td>
							    <td>
										Finalize a study in ISCV. Complete representative parts of the report and all patient/study info.  If orders interface present, use exams with HL7 orders.
							    </td>
							    <td>
										Verify message created and sent to HIS.
							    </td>
							    <td>
										Verify report transaction received and posted in HIS.
							    </td>
							    <td>
							      <div class="ui form">
							        <input type="text" id="Test_Date.${TableCtr}.1" name="Test_Date.${TableCtr}.1" />
							      </div>
							    </td>
							    <td>
							      <div class="ui form">
							        <input type="text" id="Pass_fail.${TableCtr}.1" name="Pass_fail.${TableCtr}.1" />
							      </div>
							    </td>
									<td>
							      <div class="ui form">
							        <input type="text" id="Expected_Result" />
							      </div>
							    </td>
									<td>
							      <div class="ui form">
							        <input type="text" id="Actual_Result" />
							      </div>
							    </td>
							  <td>
							    <div class="ui form">
							      <input type="text" id="Comments.${TableCtr}.1" name="Comments.${TableCtr}.1" />
							    </div>
							  </td>
							  <td>
							    <div class="ui form">
							      <input type="text" id="Sign_off.${TableCtr}.1" name="Sign_off.${TableCtr}.1" />
							    </div>
							  </td>
							  </tr>


							  <tr>
							  <td>
									ORU^R01   <br>
								Amended
							  </td>
							  <td>
									Amend the study in ISCV.  Change or add some data to the report and finalize.
							  </td>
							  <td>
									Verify message created and sent to HIS.
							<br>
							Verify version 2.
							  </td>
							  <td>
									Verify amended report is received and posted in HIS.
							  </td>
							  <td>
							    <div class="ui form">
							      <input type="text" id="Test_Date.${TableCtr}.2" name="Test_Date.${TableCtr}.2" />
							    </div>
							  </td>
							  <td>
							    <div class="ui form">
							      <input type="text" id="Pass_fail.${TableCtr}.2" name="Pass_fail.${TableCtr}.2" />
							    </div>
							  </td>
								<td>
									<div class="ui form">
										<input type="text" id="Expected_Result" />
									</div>
								</td>
								<td>
									<div class="ui form">
										<input type="text" id="Actual_Result" />
									</div>
								</td>
							  <td>
							  <div class="ui form">
							    <input type="text" id="Comments.${TableCtr}.2" name="Comments.${TableCtr}.2" />
							  </div>
							  </td>
							  <td>
							  <div class="ui form">
							    <input type="text" id="Sign_off.${TableCtr}.2" name="Sign_off.${TableCtr}.2" />
							  </div>
							  </td>
							  </tr>

							  <tr>
							  <td>ORU^R01 <br>
							2nd Amended

							  </td>
							  <td>
									Amend the study in ISCV.  Change or add some data to the report and finalize.

							  </td>
							  <td>
									Verify message created and sent to HIS.  <br>
							Verify version 3.
							  </td>
							  <td>
									Verify amended report is received and posted in HIS.
							  </td>
							  <td>
							    <div class="ui form">
							      <input type="text" id="Test_Date.${TableCtr}.3" name="Test_Date.${TableCtr}.3" />
							    </div>
							  </td>
							  <td>
							    <div class="ui form">
							      <input type="text" id="Pass_fail.${TableCtr}.3" name="Pass_fail.${TableCtr}.3" />
							    </div>
							  </td>
								<td>
									<div class="ui form">
										<input type="text" id="Expected_Result" />
									</div>
								</td>
								<td>
									<div class="ui form">
										<input type="text" id="Actual_Result" />
									</div>
								</td>
							<td>
							  <div class="ui form">
							    <input type="text" id="Comments.${TableCtr}.3" name="Comments.${TableCtr}.3" />
							  </div>
							</td>
							<td>
							  <div class="ui form">
							    <input type="text" id="Sign_off.${TableCtr}.3" name="Sign_off.${TableCtr}.3" />
							  </div>
							</td>
							</tr>

							<td colspan="10"> <b>HL7 Mapping Validation - Insert HIS required fields below if not in list </b></td>

							<tr>
							<td> <b> <center>HL7 Element Name</center> </b>
							</td>
							<td>
							<b>	<center> ISCV IBE Parsing (Default) </center></b>
							</td>
							<td>
							<b>	<center>ISCV IBE Value (Default)</center> </b>
							</td>
							<td>
							<b>	<center> Expected HL7 Parsing </center></b>
							</td>
							<td> <b> <center>Expected Value</center> </b>
							</td>
							<td colspan="2"> <b> <center>Actual Value</center> </b>
							</td>
							<td>
							<b><center>	Pass_fail</center></b>
							</td>
							<td>
								<b><center>Comments</center></b>
							</td>
							<td>
							<b><center>	Sign_off</center></b>
							</td>
							</tr>
							<td colspan="10"> <b>MSH </b></td>

							<tr>
							<td>Field Separator
							</td>
							<td>
								MSH-1
							</td>
							<td>
								<div class="ui form">
										<input type="text" id="ISCV_IBE_Parsing.${TableCtr}.1" name="ISCV_IBE_Parsing.${TableCtr}.1" placeholder="|"/>
									</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_HL7_Parsing.${TableCtr}.1" name="Expected_HL7_Parsing.${TableCtr}.1" />
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_Value.${TableCtr}.1" name="Expected_Value.${TableCtr}.1" />
								</div>
							</td>
							<td colspan="2">
								<div class="ui form">
									<input type="text" id="Actual_Value.${TableCtr}.1" name="Actual_Value.${TableCtr}.1" />
								</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Pass_fail.${TableCtr}.4" name="Pass_fail.${TableCtr}.4" />
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Comments.${TableCtr}.4" name="Comments.${TableCtr}.4" />
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Sign_off.${TableCtr}.4" name="Sign_off.${TableCtr}.4" />
							</div>
							</td>
							</tr>

							<tr>
							<td>Encoding Characters
							</td>
							<td>
								MSH-2
							</td>
							<td>	<div class="ui form">
									<input type="text" id="ISCV_IBE_Parsing.${TableCtr}.2" name="ISCV_IBE_Parsing.${TableCtr}.2" placeholder="^~\&"/>
								</div>

							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_HL7_Parsing.${TableCtr}.2" name="Expected_HL7_Parsing.${TableCtr}.2" />
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_Value.${TableCtr}.2" name="Expected_Value.${TableCtr}.2" />
								</div>
							</td>
							<td colspan="2">
								<div class="ui form">
									<input type="text" id="Actual_Value.${TableCtr}.2" name="Actual_Value.${TableCtr}.2" />
								</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Pass_fail.${TableCtr}.5" name="Pass_fail.${TableCtr}.5" />
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Comments.${TableCtr}.5" name="Comments.${TableCtr}.5" />
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Sign_off.${TableCtr}.5" name="Sign_off.${TableCtr}.5" />
							</div>
							</td>
							</tr>

							<tr>
							<td>Sending Application
							</td>
							<td>
								MSH-3
							</td>
							<td>	<div class="ui form">
									<input type="text" id="ISCV_IBE_Parsing.${TableCtr}.3" name="ISCV_IBE_Parsing.${TableCtr}.3" placeholder="Xcelera"/>
								</div>

							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_HL7_Parsing.${TableCtr}.3" name="Expected_HL7_Parsing.${TableCtr}.3" />
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_Value.${TableCtr}.3" name="Expected_Value.${TableCtr}.3" />
								</div>
							</td>
							<td colspan="2">
								<div class="ui form">
									<input type="text" id="Actual_Value.${TableCtr}.3" name="Actual_Value.${TableCtr}.3" />
								</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Pass_fail.${TableCtr}.6" name="Pass_fail.${TableCtr}.6" />
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Comments.${TableCtr}.6" name="Comments.${TableCtr}.6" />
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Sign_off.${TableCtr}.6" name="Sign_off.${TableCtr}.6" />
							</div>
							</td>
							</tr>

							<tr>
							<td>Sending Facility
							</td>
							<td>
								MSH-4
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="ISCV_IBE_Parsing.${TableCtr}.4" name="ISCV_IBE_Parsing.${TableCtr}.4"/>
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_HL7_Parsing.${TableCtr}.4" name="Expected_HL7_Parsing.${TableCtr}.4" />
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_Value.${TableCtr}.4" name="Expected_Value.${TableCtr}.4" />
								</div>
							</td>
							<td colspan="2">
								<div class="ui form">
									<input type="text" id="Actual_Value.${TableCtr}.4" name="Actual_Value.${TableCtr}.4" />
								</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Pass_fail.${TableCtr}.7" name="Pass_fail.${TableCtr}.7" />
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Comments.${TableCtr}.7" name="Comments.${TableCtr}.7" />
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Sign_off.${TableCtr}.7" name="Sign_off.${TableCtr}.7" />
							</div>
							</td>
							</tr>

							<tr>
							<td>Receiving Application
							</td>
							<td>
								MSH-5
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="ISCV_IBE_Parsing.${TableCtr}.5" name="ISCV_IBE_Parsing.${TableCtr}.5"/>
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_HL7_Parsing.${TableCtr}.5" name="Expected_HL7_Parsing.${TableCtr}.5" />
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_Value.${TableCtr}.5" name="Expected_Value.${TableCtr}.5" />
								</div>
							</td>
							<td colspan="2">
								<div class="ui form">
									<input type="text" id="Actual_Value.${TableCtr}.5" name="Actual_Value.${TableCtr}.5" />
								</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Pass_fail.${TableCtr}.8" name="Pass_fail.${TableCtr}.8" />
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Comments.${TableCtr}.8" name="Comments.${TableCtr}.8" />
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Sign_off.${TableCtr}.8" name="Sign_off.${TableCtr}.8" />
							</div>
							</td>
							</tr>

							<tr>
							<td>Receiving Facility
							</td>
							<td>
								MSH-6
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="ISCV_IBE_Parsing.${TableCtr}.6" name="ISCV_IBE_Parsing.${TableCtr}.6"/>
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_HL7_Parsing.${TableCtr}.6" name="Expected_HL7_Parsing.${TableCtr}.6" />
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_Value.${TableCtr}.6" name="Expected_Value.${TableCtr}.6" />
								</div>
							</td>
							<td colspan="2">
								<div class="ui form">
									<input type="text" id="Actual_Value.${TableCtr}.6" name="Actual_Value.${TableCtr}.6" />
								</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Pass_fail.${TableCtr}.9" name="Pass_fail.${TableCtr}.9" />
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Comments.${TableCtr}.9" name="Comments.${TableCtr}.9" />
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Sign_off.${TableCtr}.9" name="Sign_off.${TableCtr}.9" />
							</div>
							</td>
							</tr>

							<tr>
							<td>Date Time of Message
							</td>
							<td>
								MSH-7
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="ISCV_IBE_Parsing.${TableCtr}.7" name="ISCV_IBE_Parsing.${TableCtr}.7"/>
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_HL7_Parsing.${TableCtr}.7" name="Expected_HL7_Parsing.${TableCtr}.7" />
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_Value.${TableCtr}.7" name="Expected_Value.${TableCtr}.7" />
								</div>
							</td>
							<td colspan="2">
								<div class="ui form">
									<input type="text" id="Actual_Value.${TableCtr}.7" name="Actual_Value.${TableCtr}.7" />
								</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Pass_fail.${TableCtr}.10" name="Pass_fail.${TableCtr}.10" />
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Comments.${TableCtr}.10" name="Comments.${TableCtr}.10" />
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Sign_off.${TableCtr}.10" name="Sign_off.${TableCtr}.10" />
							</div>
							</td>
							</tr>

							<tr>
							<td><b>Message Type</b>

							</td>
							<td>
							<b>	MSH-9 </b>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="ISCV_IBE_Parsing.${TableCtr}.8" name="ISCV_IBE_Parsing.${TableCtr}.8"/>
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_HL7_Parsing.${TableCtr}.8" name="Expected_HL7_Parsing.${TableCtr}.8" />
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_Value.${TableCtr}.8" name="Expected_Value.${TableCtr}.8" />
								</div>
							</td>
							<td colspan="2">
								<div class="ui form">
									<input type="text" id="Actual_Value.${TableCtr}.8" name="Actual_Value.${TableCtr}.8" />
								</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Pass_fail.${TableCtr}.11" name="Pass_fail.${TableCtr}.11" />
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Comments.${TableCtr}.11" name="Comments.${TableCtr}.11" />
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Sign_off.${TableCtr}.11" name="Sign_off.${TableCtr}.11" />
							</div>
							</td>
							</tr>

							<tr>
							<td>  Message Type
							</td>
							<td>
								MSH-9.1
							</td>
							<td>	<div class="ui form">
									<input type="text" id="ISCV_IBE_Parsing.${TableCtr}.9" name="ISCV_IBE_Parsing.${TableCtr}.9" placeholder="ORU"/>
								</div>

							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_HL7_Parsing.${TableCtr}.9" name="Expected_HL7_Parsing.${TableCtr}.9" />
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_Value.${TableCtr}.9" name="Expected_Value.${TableCtr}.9" />
								</div>
							</td>
							<td colspan="2">
								<div class="ui form">
									<input type="text" id="Actual_Value.${TableCtr}.9" name="Actual_Value.${TableCtr}.9" />
								</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Pass_fail.${TableCtr}.12" name="Pass_fail.${TableCtr}.12" />
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Comments.${TableCtr}.12" name="Comments.${TableCtr}.12" />
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Sign_off.${TableCtr}.12" name="Sign_off.${TableCtr}.12" />
							</div>
							</td>
							</tr>


							<tr>
							<td>  Trigger Event
							</td>
							<td>
								MSH-9.2
							</td>
							<td>	<div class="ui form">
									<input type="text" id="ISCV_IBE_Parsing.${TableCtr}.10" name="ISCV_IBE_Parsing.${TableCtr}.10" placeholder="R01"/>
								</div>

							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_HL7_Parsing.${TableCtr}.10" name="Expected_HL7_Parsing.${TableCtr}.10" />
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_Value.${TableCtr}.10" name="Expected_Value.${TableCtr}.10" />
								</div>
							</td>
							<td colspan="2">
								<div class="ui form">
									<input type="text" id="Actual_Value.${TableCtr}.10" name="Actual_Value.${TableCtr}.10" />
								</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Pass_fail.${TableCtr}.13" name="Pass_fail.${TableCtr}.13" />
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Comments.${TableCtr}.13" name="Comments.${TableCtr}.13" />
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Sign_off.${TableCtr}.13" name="Sign_off.${TableCtr}.13" />
							</div>
							</td>
							</tr>

							<tr>
							<td>Message Control ID
							</td>
							<td>
								MSH-10
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="ISCV_IBE_Parsing.${TableCtr}.11" name="ISCV_IBE_Parsing.${TableCtr}.11"/>
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_HL7_Parsing.${TableCtr}.11" name="Expected_HL7_Parsing.${TableCtr}.11" />
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_Value.${TableCtr}.11" name="Expected_Value.${TableCtr}.11" />
								</div>
							</td>
							<td colspan="2">
								<div class="ui form">
									<input type="text" id="Actual_Value.${TableCtr}.11" name="Actual_Value.${TableCtr}.11" />
								</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Pass_fail.${TableCtr}.14" name="Pass_fail.${TableCtr}.14" />
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Comments.${TableCtr}.14" name="Comments.${TableCtr}.14" />
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Sign_off.${TableCtr}.14" name="Sign_off.${TableCtr}.14" />
							</div>
							</td>
							</tr>

							<tr>
							<td>Processing ID
							</td>
							<td>
								MSH-11
							</td>
							<td>	<div class="ui form">
									<input type="text" id="ISCV_IBE_Parsing.${TableCtr}.12" name="ISCV_IBE_Parsing.${TableCtr}.12" placeholder="p | T | D"/>
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_HL7_Parsing.${TableCtr}.12" name="Expected_HL7_Parsing.${TableCtr}.12" />
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_Value.${TableCtr}.12" name="Expected_Value.${TableCtr}.12" />
								</div>
							</td>
							<td colspan="2">
								<div class="ui form">
									<input type="text" id="Actual_Value.${TableCtr}.12" name="Actual_Value.${TableCtr}.12" />
								</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Pass_fail.${TableCtr}.15" name="Pass_fail.${TableCtr}.15" />
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Comments.${TableCtr}.15" name="Comments.${TableCtr}.15" />
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Sign_off.${TableCtr}.15" name="Sign_off.${TableCtr}.15" />
							</div>
							</td>
							</tr>

							<tr>
							<td>Version ID
							</td>
							<td>
								MSH-12
							</td>
							<td>	<div class="ui form">
									<input type="text" id="ISCV_IBE_Parsing.${TableCtr}.13" name="ISCV_IBE_Parsing.${TableCtr}.13" placeholder="2.4"/>
								</div>

							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_HL7_Parsing.${TableCtr}.13" name="Expected_HL7_Parsing.${TableCtr}.13" />
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Actual_Value.${TableCtr}.13" name="Actual_Value.${TableCtr}.13" />
								</div>
							</td>
							<td colspan="2">
								<div class="ui form">
									<input type="text" id="Expected_Value.${TableCtr}.13" name="Expected_Value.${TableCtr}.13" />
								</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Pass_fail.${TableCtr}.16" name="Pass_fail.${TableCtr}.16" />
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Comments.${TableCtr}.16" name="Comments.${TableCtr}.16" />
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Sign_off.${TableCtr}.16" name="Sign_off.${TableCtr}.16" />
							</div>
							</td>
							</tr>

							<td colspan="8"> <b>PID </b></td>
							<tr>
							<td><b>Patient Identifier </b>

							</td>
							<td>
							<b>	PID-3 </b>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="ISCV_IBE_Parsing.${TableCtr}.14" name="ISCV_IBE_Parsing.${TableCtr}.14"/>
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_HL7_Parsing.${TableCtr}.14" name="Expected_HL7_Parsing.${TableCtr}.14" />
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_Value.${TableCtr}.14" name="Expected_Value.${TableCtr}.14" />
								</div>
							</td>
							<td colspan="2">
								<div class="ui form">
									<input type="text" id="Actual_Value.${TableCtr}.14" name="Actual_Value.${TableCtr}.14" />
								</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Pass_fail.${TableCtr}.17" name="Pass_fail.${TableCtr}.17" />
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Comments.${TableCtr}.17" name="Comments.${TableCtr}.17" />
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Sign_off.${TableCtr}.17" name="Sign_off.${TableCtr}.17" />
							</div>
							</td>
							</tr>

							<tr>
							<td>  ID
							</td>
							<td>
								PID-3.1
							</td>
							<td>	<div class="ui form">
									<input type="text" id="ISCV_IBE_Parsing.${TableCtr}.15" name="ISCV_IBE_Parsing.${TableCtr}.15" placeholder="MRN"/>
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_HL7_Parsing.${TableCtr}.15" name="Expected_HL7_Parsing.${TableCtr}.15" />
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_Value.${TableCtr}.15" name="Expected_Value.${TableCtr}.15" />
								</div>
							</td>
							<td colspan="2">
								<div class="ui form">
									<input type="text" id="Actual_Value.${TableCtr}.15" name="Actual_Value.${TableCtr}.15" />
								</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Pass_fail.${TableCtr}.18" name="Pass_fail.${TableCtr}.18" />
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Comments.${TableCtr}.18" name="Comments.${TableCtr}.18" />
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Sign_off.${TableCtr}.18" name="Sign_off.${TableCtr}.18" />
							</div>
							</td>
							</tr>

							<tr>
							<td> Assigning  <br>
							  Authority
							</td>
							<td>
								PID-3.4

							</td>
							<td>
								<div class="ui form">
									<input type="text" id="ISCV_IBE_Parsing.${TableCtr}.16" name="ISCV_IBE_Parsing.${TableCtr}.16"/>
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_HL7_Parsing.${TableCtr}.16" name="Expected_HL7_Parsing.${TableCtr}.16" />
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_Value.${TableCtr}.16" name="Expected_Value.${TableCtr}.16" />
								</div>
							</td>
							<td colspan="2">
								<div class="ui form">
									<input type="text" id="Actual_Value.${TableCtr}.16" name="Actual_Value.${TableCtr}.16" />
								</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Pass_fail.${TableCtr}.19" name="Pass_fail.${TableCtr}.19" />
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Comments.${TableCtr}.19" name="Comments.${TableCtr}.19" />
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Sign_off.${TableCtr}.19" name="Sign_off.${TableCtr}.19" />
							</div>
							</td>
							</tr>

							<tr>
							<td><b>Patient Name</b>

							</td>
							<td>
							<b>	PID-5
							</b>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="ISCV_IBE_Parsing.${TableCtr}.17" name="ISCV_IBE_Parsing.${TableCtr}.17"/>
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_HL7_Parsing.${TableCtr}.17" name="Expected_HL7_Parsing.${TableCtr}.17" />
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_Value.${TableCtr}.17" name="Expected_Value.${TableCtr}.17" />
								</div>
							</td>
							<td colspan="2">
								<div class="ui form">
									<input type="text" id="Actual_Value.${TableCtr}.17" name="Actual_Value.${TableCtr}.17" />
								</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Pass_fail.${TableCtr}.20" name="Pass_fail.${TableCtr}.20" />
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Comments.${TableCtr}.20" name="Comments.${TableCtr}.20" />
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Sign_off.${TableCtr}.20" name="Sign_off.${TableCtr}.20" />
							</div>
							</td>
							</tr>

							<tr>
							<td>  Family Name

							</td>
							<td>
								PID-5.1

							</td>
							<td>
								<div class="ui form">
									<input type="text" id="ISCV_IBE_Parsing.${TableCtr}.18" name="ISCV_IBE_Parsing.${TableCtr}.18"/>
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_HL7_Parsing.${TableCtr}.18" name="Expected_HL7_Parsing.${TableCtr}.18" />
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_Value.${TableCtr}.18" name="Expected_Value.${TableCtr}.18" />
								</div>
							</td>
							<td colspan="2">
								<div class="ui form">
									<input type="text" id="Actual_Value.${TableCtr}.18" name="Actual_Value.${TableCtr}.18" />
								</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Pass_fail.${TableCtr}.21" name="Pass_fail.${TableCtr}.21" />
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Comments.${TableCtr}.21" name="Comments.${TableCtr}.21" />
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Sign_off.${TableCtr}.21" name="Sign_off.${TableCtr}.21" />
							</div>
							</td>
							</tr>

							<tr>
							<td>  Given Name

							</td>
							<td>
								PID-5.2

							</td>
							<td>
								<div class="ui form">
									<input type="text" id="ISCV_IBE_Parsing.${TableCtr}.19" name="ISCV_IBE_Parsing.${TableCtr}.19"/>
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_HL7_Parsing.${TableCtr}.19" name="Expected_HL7_Parsing.${TableCtr}.19" />
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_Value.${TableCtr}.19" name="Expected_Value.${TableCtr}.19" />
								</div>
							</td>
							<td colspan="2">
								<div class="ui form">
									<input type="text" id="Actual_Value.${TableCtr}.19" name="Actual_Value.${TableCtr}.19" />
								</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Pass_fail.${TableCtr}.22" name="Pass_fail.${TableCtr}.22" />
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Comments.${TableCtr}.22" name="Comments.${TableCtr}.22" />
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Sign_off.${TableCtr}.22" name="Sign_off.${TableCtr}.22" />
							</div>
							</td>
							</tr>

							<tr>
							<td>  Middle Name

							</td>
							<td>
								PID-5.3

							</td>
							<td>
								<div class="ui form">
									<input type="text" id="ISCV_IBE_Parsing.${TableCtr}.20" name="ISCV_IBE_Parsing.${TableCtr}.20"/>
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_HL7_Parsing.${TableCtr}.20" name="Expected_HL7_Parsing.${TableCtr}.20" />
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_Value.${TableCtr}.20" name="Expected_Value.${TableCtr}.20" />
								</div>
							</td>
							<td colspan="2">
								<div class="ui form">
									<input type="text" id="Actual_Value.${TableCtr}.20" name="Actual_Value.${TableCtr}.20" />
								</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Pass_fail.${TableCtr}.23" name="Pass_fail.${TableCtr}.23" />
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Comments.${TableCtr}.23" name="Comments.${TableCtr}.23" />
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Sign_off.${TableCtr}.23" name="Sign_off.${TableCtr}.23" />
							</div>
							</td>
							</tr>

							<tr>
							<td>DOB
							</td>
							<td>
								PID-7

							</td>
							<td>
								<div class="ui form">
									<input type="text" id="ISCV_IBE_Parsing.${TableCtr}.21" name="ISCV_IBE_Parsing.${TableCtr}.21" placeholder="Format: YYYMMDD"/>
								</div>

							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_HL7_Parsing.${TableCtr}.21" name="Expected_HL7_Parsing.${TableCtr}.21" />
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_Value.${TableCtr}.21" name="Expected_Value.${TableCtr}.21" />
								</div>
							</td>
							<td colspan="2">
								<div class="ui form">
									<input type="text" id="Actual_Value.${TableCtr}.21" name="Actual_Value.${TableCtr}.21" />
								</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Pass_fail.${TableCtr}.24" name="Pass_fail.${TableCtr}.24" />
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Comments.${TableCtr}.24" name="Comments.${TableCtr}.24" />
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Sign_off.${TableCtr}.24" name="Sign_off.${TableCtr}.24" />
							</div>
							</td>
							</tr>

							<tr>
							<td>Gender

							</td>
							<td>
								PID-8

							</td>
							<td>
								<div class="ui form">
									<input type="text" id="ISCV_IBE_Parsing.${TableCtr}.22" name="ISCV_IBE_Parsing.${TableCtr}.22" placeholder="F | M | U"/>
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_HL7_Parsing.${TableCtr}.22" name="Expected_HL7_Parsing.${TableCtr}.22" />
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_Value.${TableCtr}.22" name="Expected_Value.${TableCtr}.22" />
								</div>
							</td>
							<td colspan="2">
								<div class="ui form">
									<input type="text" id="Actual_Value.${TableCtr}.22" name="Actual_Value.${TableCtr}.22" />
								</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Pass_fail.${TableCtr}.25" name="Pass_fail.${TableCtr}.25" />
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Comments.${TableCtr}.25" name="Comments.${TableCtr}.25" />
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Sign_off.${TableCtr}.25" name="Sign_off.${TableCtr}.25" />
							</div>
							</td>
							</tr>

							<tr>
							<td>Race

							</td>
							<td>
							  PID-10
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="ISCV_IBE_Parsing.${TableCtr}.23" name="ISCV_IBE_Parsing.${TableCtr}.23" />
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_HL7_Parsing.${TableCtr}.23" name="Expected_HL7_Parsing.${TableCtr}.23" />
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_Value.${TableCtr}.23" name="Expected_Value.${TableCtr}.23" />
								</div>
							</td>
							<td colspan="2">
								<div class="ui form">
									<input type="text" id="Actual_Value.${TableCtr}.23" name="Actual_Value.${TableCtr}.23" />
								</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Pass_fail.${TableCtr}.26" name="Pass_fail.${TableCtr}.26" />
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Comments.${TableCtr}.26" name="Comments.${TableCtr}.26" />
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Sign_off.${TableCtr}.26" name="Sign_off.${TableCtr}.26" />
							</div>
							</td>
							</tr>

							<tr>
							<td><b>Patient Address</b>

							</td>
							<td>
							<b>	PID-11 </b>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="ISCV_IBE_Parsing.${TableCtr}.24" name="ISCV_IBE_Parsing.${TableCtr}.24" />
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_HL7_Parsing.${TableCtr}.24" name="Expected_HL7_Parsing.${TableCtr}.24" />
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_Value.${TableCtr}.24" name="Expected_Value.${TableCtr}.24" />
								</div>
							</td>
							<td colspan="2">
								<div class="ui form">
									<input type="text" id="Actual_Value.${TableCtr}.24" name="Actual_Value.${TableCtr}.24" />
								</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Pass_fail.${TableCtr}.27" name="Pass_fail.${TableCtr}.27" />
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Comments.${TableCtr}.27" name="Comments.${TableCtr}.27" />
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Sign_off.${TableCtr}.27" name="Sign_off.${TableCtr}.27" />
							</div>
							</td>
							</tr>

							<tr>
							<td>  Street Address

							</td>
							<td>
								PID-11.1
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="ISCV_IBE_Parsing.${TableCtr}.25" name="ISCV_IBE_Parsing.${TableCtr}.25" />
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_HL7_Parsing.${TableCtr}.25" name="Expected_HL7_Parsing.${TableCtr}.25" />
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_Value.${TableCtr}.25" name="Expected_Value.${TableCtr}.25" />
								</div>
							</td>
							<td colspan="2">
								<div class="ui form">
									<input type="text" id="Actual_Value.${TableCtr}.25" name="Actual_Value.${TableCtr}.25" />
								</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Pass_fail.${TableCtr}.28" name="Pass_fail.${TableCtr}.28" />
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Comments.${TableCtr}.28" name="Comments.${TableCtr}.28" />
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Sign_off.${TableCtr}.28" name="Sign_off.${TableCtr}.28" />
							</div>
							</td>
							</tr>

							<tr>
							<td>  Other
							  Designation

							</td>
							<td>
								PID-11.2
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="ISCV_IBE_Parsing.${TableCtr}.26" name="ISCV_IBE_Parsing.${TableCtr}.26" />
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_HL7_Parsing.${TableCtr}.26" name="Expected_HL7_Parsing.${TableCtr}.26" />
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_Value.${TableCtr}.26" name="Expected_Value.${TableCtr}.26" />
								</div>
							</td>
							<td colspan="2">
								<div class="ui form">
									<input type="text" id="Actual_Value.${TableCtr}.26" name="Actual_Value.${TableCtr}.26" />
								</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Pass_fail.${TableCtr}.29" name="Pass_fail.${TableCtr}.29" />
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Comments.${TableCtr}.29" name="Comments.${TableCtr}.29" />
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Sign_off.${TableCtr}.29" name="Sign_off.${TableCtr}.29" />
							</div>
							</td>
							</tr>


							<tr>
							<td>  City
							</td>
							<td>
								PID-11.3
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="ISCV_IBE_Parsing.${TableCtr}.27" name="ISCV_IBE_Parsing.${TableCtr}.27" />
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_HL7_Parsing.${TableCtr}.27" name="Expected_HL7_Parsing.${TableCtr}.27" />
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_Value.${TableCtr}.27" name="Expected_Value.${TableCtr}.27" />
								</div>
							</td>
							<td colspan="2">
								<div class="ui form">
									<input type="text" id="Actual_Value.${TableCtr}.27" name="Actual_Value.${TableCtr}.27" />
								</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Pass_fail.${TableCtr}.30" name="Pass_fail.${TableCtr}.30" />
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Comments.${TableCtr}.30" name="Comments.${TableCtr}.30" />
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Sign_off.${TableCtr}.30" name="Sign_off.${TableCtr}.30" />
							</div>
							</td>
							</tr>


							<tr>
							<td>  State
							</td>
							<td>
								PID-11.4
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="ISCV_IBE_Parsing.${TableCtr}.28" name="ISCV_IBE_Parsing.${TableCtr}.28" />
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_HL7_Parsing.${TableCtr}.28" name="Expected_HL7_Parsing.${TableCtr}.28" />
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_Value.${TableCtr}.28" name="Expected_Value.${TableCtr}.28" />
								</div>
							</td>
							<td colspan="2">
								<div class="ui form">
									<input type="text" id="Actual_Value.${TableCtr}.28" name="Actual_Value.${TableCtr}.28" />
								</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Pass_fail.${TableCtr}.31" name="Pass_fail.${TableCtr}.31" />
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Comments.${TableCtr}.31" name="Comments.${TableCtr}.31" />
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Sign_off.${TableCtr}.31" name="Sign_off.${TableCtr}.31" />
							</div>
							</td>
							</tr>


							<tr>
							<td>  Zip Code
							</td>
							<td>
								PID-11.5
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="ISCV_IBE_Parsing.${TableCtr}.29" name="ISCV_IBE_Parsing.${TableCtr}.29"  />
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_HL7_Parsing.${TableCtr}.29" name="Expected_HL7_Parsing.${TableCtr}.29" />
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_Value.${TableCtr}.29" name="Expected_Value.${TableCtr}.29" />
								</div>
							</td>
							<td colspan="2">
								<div class="ui form">
									<input type="text" id="Actual_Value.${TableCtr}.29" name="Actual_Value.${TableCtr}.29" />
								</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Pass_fail.${TableCtr}.32" name="Pass_fail.${TableCtr}.32" />
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Comments.${TableCtr}.32" name="Comments.${TableCtr}.32" />
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Sign_off.${TableCtr}.32" name="Sign_off.${TableCtr}.32" />
							</div>
							</td>
							</tr>


							<tr>
							<td>Home Phone
							</td>
							<td>
								PID-13
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="ISCV_IBE_Parsing.${TableCtr}.30" name="ISCV_IBE_Parsing.${TableCtr}.30"  />
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_HL7_Parsing.${TableCtr}.30" name="Expected_HL7_Parsing.${TableCtr}.30" />
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_Value.${TableCtr}.30" name="Expected_Value.${TableCtr}.30" />
								</div>
							</td>
							<td colspan="2">
								<div class="ui form">
									<input type="text" id="Actual_Value.${TableCtr}.30" name="Actual_Value.${TableCtr}.30" />
								</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Pass_fail.${TableCtr}.33" name="Pass_fail.${TableCtr}.33" />
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Comments.${TableCtr}.33" name="Comments.${TableCtr}.33" />
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Sign_off.${TableCtr}.33" name="Sign_off.${TableCtr}.33" />
							</div>
							</td>
							</tr>


							<tr>
							<td>Other Phone

							</td>
							<td>
								PID-14

							</td>
							<td>
								<div class="ui form">
									<input type="text" id="ISCV_IBE_Parsing.${TableCtr}.31" name="ISCV_IBE_Parsing.${TableCtr}.31" />
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_HL7_Parsing.${TableCtr}.31" name="Expected_HL7_Parsing.${TableCtr}.31" />
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_Value.${TableCtr}.31" name="Expected_Value.${TableCtr}.31" />
								</div>
							</td>
							<td colspan="2">
								<div class="ui form">
									<input type="text" id="Actual_Value.${TableCtr}.31" name="Actual_Value.${TableCtr}.31" />
								</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Pass_fail.${TableCtr}.34" name="Pass_fail.${TableCtr}.34" />
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Comments.${TableCtr}.34" name="Comments.${TableCtr}.34" />
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Sign_off.${TableCtr}.34" name="Sign_off.${TableCtr}.34" />
							</div>
							</td>
							</tr>


							<tr>
							<td>Patient Account

							</td>
							<td>
								PID-18
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="ISCV_IBE_Parsing.${TableCtr}.32" name="ISCV_IBE_Parsing.${TableCtr}.32" placeholder="	ISCV Study Config 4" />
								</div>

							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_HL7_Parsing.${TableCtr}.32" name="Expected_HL7_Parsing.${TableCtr}.32" />
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_Value.${TableCtr}.32" name="Expected_Value.${TableCtr}.32" />
								</div>
							</td>
							<td colspan="2">
								<div class="ui form">
									<input type="text" id="Actual_Value.${TableCtr}.32" name="Actual_Value.${TableCtr}.32" />
								</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Pass_fail.${TableCtr}.35" name="Pass_fail.${TableCtr}.35" />
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Comments.${TableCtr}.35" name="Comments.${TableCtr}.35" />
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Sign_off.${TableCtr}.35" name="Sign_off.${TableCtr}.35" />
							</div>
							</td>
							</tr>

							<td colspan="10"> <b>PV1 </b></td>

							<tr>
							<td>Patient Class
							</td>
							<td>
								PV1-2
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="ISCV_IBE_Parsing.${TableCtr}.33" name="ISCV_IBE_Parsing.${TableCtr}.33" placeholder="O| I | E" />
								</div>

							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_HL7_Parsing.${TableCtr}.33" name="Expected_HL7_Parsing.${TableCtr}.33" />
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_Value.${TableCtr}.33" name="Expected_Value.${TableCtr}.33" />
								</div>
							</td>
							<td colspan="2">
								<div class="ui form">
									<input type="text" id="Actual_Value.${TableCtr}.33" name="Actual_Value.${TableCtr}.33" />
								</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Pass_fail.${TableCtr}.36" name="Pass_fail.${TableCtr}.36" />
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Comments.${TableCtr}.36" name="Comments.${TableCtr}.36" />
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Sign_off.${TableCtr}.36" name="Sign_off.${TableCtr}.36" />
							</div>
							</td>
							</tr>

							<tr>
							<td>Patient Location
							</td>
							<td>
								PV1-3
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="ISCV_IBE_Parsing.${TableCtr}.34" name="ISCV_IBE_Parsing.${TableCtr}.34" />
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_HL7_Parsing.${TableCtr}.34" name="Expected_HL7_Parsing.${TableCtr}.34" />
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_Value.${TableCtr}.34" name="Expected_Value.${TableCtr}.34" />
								</div>
							</td>
							<td colspan="2">
								<div class="ui form">
									<input type="text" id="Actual_Value.${TableCtr}.34" name="Actual_Value.${TableCtr}.34" />
								</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Pass_fail.${TableCtr}.37" name="Pass_fail.${TableCtr}.37" />
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Comments.${TableCtr}.37" name="Comments.${TableCtr}.37" />
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Sign_off.${TableCtr}.37" name="Sign_off.${TableCtr}.37" />
							</div>
							</td>
							</tr>

							<tr>
							<td><b>ReferringDoctor</b>
							</td>
							<td>
								<b>PV1-8</b>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="ISCV_IBE_Parsing.${TableCtr}.35" name="ISCV_IBE_Parsing.${TableCtr}.35" />
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_HL7_Parsing.${TableCtr}.35" name="Expected_HL7_Parsing.${TableCtr}.35" />
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_Value.${TableCtr}.35" name="Expected_Value.${TableCtr}.35" />
								</div>
							</td>
							<td colspan="2">
								<div class="ui form">
									<input type="text" id="Actual_Value.${TableCtr}.35" name="Actual_Value.${TableCtr}.35" />
								</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Pass_fail.${TableCtr}.38" name="Pass_fail.${TableCtr}.38" />
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Comments.${TableCtr}.38" name="Comments.${TableCtr}.38" />
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Sign_off.${TableCtr}.38" name="Sign_off.${TableCtr}.38" />
							</div>
							</td>
							</tr>

							<tr>
							<td>  ID Number
							</td>
							<td>
								PV1-8.1

							</td>
							<td>
								<div class="ui form">
									<input type="text" id="ISCV_IBE_Parsing.${TableCtr}.36" name="ISCV_IBE_Parsing.${TableCtr}.36"  />
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_HL7_Parsing.${TableCtr}.36" name="Expected_HL7_Parsing.${TableCtr}.36" />
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_Value.${TableCtr}.36" name="Expected_Value.${TableCtr}.36" />
								</div>
							</td>
							<td colspan="2">
								<div class="ui form">
									<input type="text" id="Actual_Value.${TableCtr}.36" name="Actual_Value.${TableCtr}.36" />
								</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Pass_fail.${TableCtr}.39" name="Pass_fail.${TableCtr}.39" />
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Comments.${TableCtr}.39" name="Comments.${TableCtr}.39" />
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Sign_off.${TableCtr}.39" name="Sign_off.${TableCtr}.39" />
							</div>
							</td>
							</tr>

							<tr>
							<td>  Family Name
							</td>
							<td>
								PV1-8.2
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="ISCV_IBE_Parsing.${TableCtr}.37" name="ISCV_IBE_Parsing.${TableCtr}.37" />
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_HL7_Parsing.${TableCtr}.37" name="Expected_HL7_Parsing.${TableCtr}.37" />
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_Value.${TableCtr}.37" name="Expected_Value.${TableCtr}.37" />
								</div>
							</td>
							<td colspan="2">
								<div class="ui form">
									<input type="text" id="Actual_Value.${TableCtr}.37" name="Actual_Value.${TableCtr}.37" />
								</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Pass_fail.${TableCtr}.40" name="Pass_fail.${TableCtr}.40" />
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Comments.${TableCtr}.40" name="Comments.${TableCtr}.40" />
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Sign_off.${TableCtr}.40" name="Sign_off.${TableCtr}.40" />
							</div>
							</td>
							</tr>

							<td colspan="10"> <b>ORC </b></td>

							<tr>
							<td>Order Control
							</td>
							<td>
								ORC-1
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="ISCV_IBE_Parsing.${TableCtr}.38" name="ISCV_IBE_Parsing.${TableCtr}.38" placeholder="RE" />
								</div>

							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_HL7_Parsing.${TableCtr}.38" name="Expected_HL7_Parsing.${TableCtr}.38" />
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_Value.${TableCtr}.38" name="Expected_Value.${TableCtr}.38" />
								</div>
							</td>
							<td colspan="2">
								<div class="ui form">
									<input type="text" id="Actual_Value.${TableCtr}.38" name="Actual_Value.${TableCtr}.38" />
								</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Pass_fail.${TableCtr}.41" name="Pass_fail.${TableCtr}.41" />
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Comments.${TableCtr}.41" name="Comments.${TableCtr}.41" />
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Sign_off.${TableCtr}.41" name="Sign_off.${TableCtr}.41" />
							</div>
							</td>
							</tr>

							<tr>
							<td>Filler Order Number
							</td>
							<td>
								ORC-3
							</td>
							<td><div class="ui form">
								<input type="text" id="ISCV_IBE_Parsing.${TableCtr}.39" name="ISCV_IBE_Parsing.${TableCtr}.39" placeholder="ISCV Study ID"  />
							</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_HL7_Parsing.${TableCtr}.39" name="Expected_HL7_Parsing.${TableCtr}.39" />
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_Value.${TableCtr}.39" name="Expected_Value.${TableCtr}.39" />
								</div>
							</td>
							<td colspan="2">
								<div class="ui form">
									<input type="text" id="Actual_Value.${TableCtr}.39" name="Actual_Value.${TableCtr}.39" />
								</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Pass_fail.${TableCtr}.42" name="Pass_fail.${TableCtr}.42" />
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Comments.${TableCtr}.42" name="Comments.${TableCtr}.42" />
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Sign_off.${TableCtr}.42" name="Sign_off.${TableCtr}.42" />
							</div>
							</td>
							</tr>

							<tr>
							<td>Order Status
							</td>
							<td>
								 ORC-5

							</td>
							<td>
								<div class="ui form">
									<input type="text" id="ISCV_IBE_Parsing.${TableCtr}.40" name="ISCV_IBE_Parsing.${TableCtr}.40"  />
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_HL7_Parsing.${TableCtr}.40" name="Expected_HL7_Parsing.${TableCtr}.40" />
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_Value.${TableCtr}.40" name="Expected_Value.${TableCtr}.40" />
								</div>
							</td>
							<td colspan="2">
								<div class="ui form">
									<input type="text" id="Actual_Value.${TableCtr}.40" name="Actual_Value.${TableCtr}.40" />
								</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Pass_fail.${TableCtr}.43" name="Pass_fail.${TableCtr}.43" />
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Comments.${TableCtr}.43" name="Comments.${TableCtr}.43" />
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Sign_off.${TableCtr}.43" name="Sign_off.${TableCtr}.43" />
							</div>
							</td>
							</tr>

							<td colspan="10"> <b>OBR </b></td>

							<tr>
							<td>Set ID
							</td>
							<td>
								OBR-1
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="ISCV_IBE_Parsing.${TableCtr}.41" name="ISCV_IBE_Parsing.${TableCtr}.41" />
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_HL7_Parsing.${TableCtr}.41" name="Expected_HL7_Parsing.${TableCtr}.41" />
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_Value.${TableCtr}.41" name="Expected_Value.${TableCtr}.41" />
								</div>
							</td>
							<td colspan="2">
								<div class="ui form">
									<input type="text" id="Actual_Value.${TableCtr}.41" name="Actual_Value.${TableCtr}.41" />
								</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Pass_fail.${TableCtr}.44" name="Pass_fail.${TableCtr}.44" />
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Comments.${TableCtr}.44" name="Comments.${TableCtr}.44" />
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Sign_off.${TableCtr}.44" name="Sign_off.${TableCtr}.44" />
							</div>
							</td>
							</tr>

							<tr>
							<td>Placer Order Number
							</td>
							<td>
								OBR-1
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="ISCV_IBE_Parsing.${TableCtr}.42" name="ISCV_IBE_Parsing.${TableCtr}.42" placeholder="HIS Order ID" />
								</div>

							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_HL7_Parsing.${TableCtr}.42" name="Expected_HL7_Parsing.${TableCtr}.42" />
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_Value.${TableCtr}.42" name="Expected_Value.${TableCtr}.42" />
								</div>
							</td>
							<td colspan="2">
								<div class="ui form">
									<input type="text" id="Actual_Value.${TableCtr}.42" name="Actual_Value.${TableCtr}.42" />
								</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Pass_fail.${TableCtr}.45" name="Pass_fail.${TableCtr}.45" />
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Comments.${TableCtr}.45" name="Comments.${TableCtr}.45" />
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Sign_off.${TableCtr}.45" name="Sign_off.${TableCtr}.45" />
							</div>
							</td>
							</tr>

							<tr>
							<td>Filler Order Number
							</td>
							<td>
								OBR-3
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="ISCV_IBE_Parsing.${TableCtr}.43" name="ISCV_IBE_Parsing.${TableCtr}.43" placeholder="ISCV Study ID" />
								</div>

							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_HL7_Parsing.${TableCtr}.43" name="Expected_HL7_Parsing.${TableCtr}.43" />
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_Value.${TableCtr}.43" name="Expected_Value.${TableCtr}.43" />
								</div>
							</td>
							<td colspan="2">
								<div class="ui form">
									<input type="text" id="Actual_Value.${TableCtr}.43" name="Actual_Value.${TableCtr}.43" />
								</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Pass_fail.${TableCtr}.46" name="Pass_fail.${TableCtr}.46" />
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Comments.${TableCtr}.46" name="Comments.${TableCtr}.46" />
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Sign_off.${TableCtr}.46" name="Sign_off.${TableCtr}.46" />
							</div>
							</td>
							</tr>

							<tr>
							<td> <b>Universal Service ID</b>
							</td>
							<td>
							<b>	OBR-4 </b>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="ISCV_IBE_Parsing.${TableCtr}.44" name="ISCV_IBE_Parsing.${TableCtr}.44" />
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_HL7_Parsing.${TableCtr}.44" name="Expected_HL7_Parsing.${TableCtr}.44" />
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_Value.${TableCtr}.44" name="Expected_Value.${TableCtr}.44" />
								</div>
							</td>
							<td colspan="2">
								<div class="ui form">
									<input type="text" id="Actual_Value.${TableCtr}.44" name="Actual_Value.${TableCtr}.44" />
								</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Pass_fail.${TableCtr}.47" name="Pass_fail.${TableCtr}.47" />
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Comments.${TableCtr}.47" name="Comments.${TableCtr}.47" />
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Sign_off.${TableCtr}.47" name="Sign_off.${TableCtr}.47" />
							</div>
							</td>
							</tr>

							<tr>
							<td>  Procedure ID
							</td>
							<td>
								OBR-4.1
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="ISCV_IBE_Parsing.${TableCtr}.45" name="ISCV_IBE_Parsing.${TableCtr}.45" />
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_HL7_Parsing.${TableCtr}.45" name="Expected_HL7_Parsing.${TableCtr}.45" />
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_Value.${TableCtr}.45" name="Expected_Value.${TableCtr}.45" />
								</div>
							</td>
							<td colspan="2">
								<div class="ui form">
									<input type="text" id="Actual_Value.${TableCtr}.45" name="Actual_Value.${TableCtr}.45" />
								</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Pass_fail.${TableCtr}.48" name="Pass_fail.${TableCtr}.48" />
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Comments.${TableCtr}.48" name="Comments.${TableCtr}.48" />
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Sign_off.${TableCtr}.48" name="Sign_off.${TableCtr}.48" />
							</div>
							</td>
							</tr>

							<tr>
							<td> Procedure
							  Description
							</td>
							<td>
								OBR-4.2
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_HL7_Parsing.${TableCtr}.46" name="Expected_HL7_Parsing.${TableCtr}.46" placeholder="ISCV Study Type" />
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_Value.${TableCtr}.46" name="Expected_Value.${TableCtr}.46" />
								</div>
							</td>
							<td colspan="2">
								<div class="ui form">
									<input type="text" id="Actual_Value.${TableCtr}.46" name="Actual_Value.${TableCtr}.46" />
								</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Pass_fail.${TableCtr}.49" name="Pass_fail.${TableCtr}.49" />
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Comments.${TableCtr}.49" name="Comments.${TableCtr}.49" />
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Sign_off.${TableCtr}.49" name="Sign_off.${TableCtr}.49" />
							</div>
							</td>
							</tr>

							<tr>
							<td>Observation Start Date Time
							</td>
							<td>
								OBR-7
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="ISCV_IBE_Parsing.${TableCtr}.46" name="ISCV_IBE_Parsing.${TableCtr}.46" />
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_HL7_Parsing.${TableCtr}.47" name="Expected_HL7_Parsing.${TableCtr}.47" />
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_Value.${TableCtr}.47" name="Expected_Value.${TableCtr}.47" />
								</div>
							</td>
							<td colspan="2">
								<div class="ui form">
									<input type="text" id="Actual_Value.${TableCtr}.47" name="Actual_Value.${TableCtr}.47" />
								</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Pass_fail.${TableCtr}.50" name="Pass_fail.${TableCtr}.50" />
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Comments.${TableCtr}.50" name="Comments.${TableCtr}.50" />
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Sign_off.${TableCtr}.50" name="Sign_off.${TableCtr}.50" />
							</div>
							</td>
							</tr>

							<tr>
							<td>Observation End Date Time
							</td>
							<td>
								OBR-8
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="ISCV_IBE_Parsing.${TableCtr}.47" name="ISCV_IBE_Parsing.${TableCtr}.47"  />
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_HL7_Parsing.${TableCtr}.48" name="Expected_HL7_Parsing.${TableCtr}.48" />
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_Value.${TableCtr}.48" name="Expected_Value.${TableCtr}.48" />
								</div>
							</td>
							<td colspan="2">
								<div class="ui form">
									<input type="text" id="Actual_Value.${TableCtr}.48" name="Actual_Value.${TableCtr}.48" />
								</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Pass_fail.${TableCtr}.51" name="Pass_fail.${TableCtr}.51" />
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Comments.${TableCtr}.51" name="Comments.${TableCtr}.51" />
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Sign_off.${TableCtr}.51" name="Sign_off.${TableCtr}.51" />
							</div>
							</td>
							</tr>

							<tr>
							<td>Ordering Physician
							</td>
							<td>
								OBR-16
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="ISCV_IBE_Parsing.${TableCtr}.48" name="ISCV_IBE_Parsing.${TableCtr}.48" />
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_HL7_Parsing.${TableCtr}.49" name="Expected_HL7_Parsing.${TableCtr}.49" />
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_Value.${TableCtr}.49" name="Expected_Value.${TableCtr}.49" />
								</div>
							</td>
							<td colspan="2">
								<div class="ui form">
									<input type="text" id="Actual_Value.${TableCtr}.49" name="Actual_Value.${TableCtr}.49" />
								</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Pass_fail.${TableCtr}.52" name="Pass_fail.${TableCtr}.52" />
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Comments.${TableCtr}.52" name="Comments.${TableCtr}.52" />
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Sign_off.${TableCtr}.52" name="Sign_off.${TableCtr}.52" />
							</div>
							</td>
							</tr>

							<tr>
							<td>Accession Number
							</td>
							<td>
								OBR-18
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="ISCV_IBE_Parsing.${TableCtr}.49" name="ISCV_IBE_Parsing.${TableCtr}.49" />
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_HL7_Parsing.${TableCtr}.50" name="Expected_HL7_Parsing.${TableCtr}.50" />
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_Value.${TableCtr}.50" name="Expected_Value.${TableCtr}.50" />
								</div>
							</td>
							<td colspan="2">
								<div class="ui form">
									<input type="text" id="Actual_Value.${TableCtr}.50" name="Actual_Value.${TableCtr}.50" />
								</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Pass_fail.${TableCtr}.53" name="Pass_fail.${TableCtr}.53" />
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Comments.${TableCtr}.53" name="Comments.${TableCtr}.53" />
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Sign_off.${TableCtr}.53" name="Sign_off.${TableCtr}.53" />
							</div>
							</td>
							</tr>

							<tr>
							<td>Order Status
							</td>
							<td>
								 ORC-5

							</td>
							<td>
								<div class="ui form">
									<input type="text" id="ISCV_IBE_Parsing.${TableCtr}.50" name="ISCV_IBE_Parsing.${TableCtr}.50" />
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_HL7_Parsing.${TableCtr}.51" name="Expected_HL7_Parsing.${TableCtr}.51" />
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_Value.${TableCtr}.51" name="Expected_Value.${TableCtr}.51" />
								</div>
							</td>
							<td colspan="2">
								<div class="ui form">
									<input type="text" id="Actual_Value.${TableCtr}.51" name="Actual_Value.${TableCtr}.51" />
								</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Pass_fail.${TableCtr}.54" name="Pass_fail.${TableCtr}.54" />
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Comments.${TableCtr}.54" name="Comments.${TableCtr}.54" />
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Sign_off.${TableCtr}.54" name="Sign_off.${TableCtr}.54" />
							</div>
							</td>
							</tr>

							<tr>
							<td>Report Version
							</td>
							<td>
								OBR-20
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="ISCV_IBE_Parsing.${TableCtr}.51" name="ISCV_IBE_Parsing.${TableCtr}.51" />
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_HL7_Parsing.${TableCtr}.52" name="Expected_HL7_Parsing.${TableCtr}.52" />
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_Value.${TableCtr}.52" name="Expected_Value.${TableCtr}.52" />
								</div>
							</td>
							<td colspan="2">
								<div class="ui form">
									<input type="text" id="Actual_Value.${TableCtr}.52" name="Actual_Value.${TableCtr}.52" />
								</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Pass_fail.${TableCtr}.55" name="Pass_fail.${TableCtr}.55" />
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Comments.${TableCtr}.55" name="Comments.${TableCtr}.55" />
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Sign_off.${TableCtr}.55" name="Sign_off.${TableCtr}.55" />
							</div>
							</td>
							</tr>

							<tr>
							<td>Results Last Signed Date Time
							</td>
							<td>
								OBR-22
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="ISCV_IBE_Parsing.${TableCtr}.52" name="ISCV_IBE_Parsing.${TableCtr}.52"/>
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_HL7_Parsing.${TableCtr}.53" name="Expected_HL7_Parsing.${TableCtr}.53" />
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_Value.${TableCtr}.53" name="Expected_Value.${TableCtr}.53" />
								</div>
							</td>
							<td colspan="2">
								<div class="ui form">
									<input type="text" id="Actual_Value.${TableCtr}.53" name="Actual_Value.${TableCtr}.53" />
								</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Pass_fail.${TableCtr}.56" name="Pass_fail.${TableCtr}.56" />
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Comments.${TableCtr}.56" name="Comments.${TableCtr}.56" />
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Sign_off.${TableCtr}.56" name="Sign_off.${TableCtr}.56" />
							</div>
							</td>
							</tr>

							<tr>
							<td>Diagnostic Serv Sect ID
							</td>
							<td>
								OBR-24
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="ISCV_IBE_Parsing.${TableCtr}.53" name="ISCV_IBE_Parsing.${TableCtr}.53" placeholder="CUS" />
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_HL7_Parsing.${TableCtr}.54" name="Expected_HL7_Parsing.${TableCtr}.54" />
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_Value.${TableCtr}.54" name="Expected_Value.${TableCtr}.54" />
								</div>
							</td>
							<td colspan="2">
								<div class="ui form">
									<input type="text" id="Actual_Value.${TableCtr}.54" name="Actual_Value.${TableCtr}.54" />
								</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Pass_fail.${TableCtr}.57" name="Pass_fail.${TableCtr}.57" />
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Comments.${TableCtr}.57" name="Comments.${TableCtr}.57" />
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Sign_off.${TableCtr}.57" name="Sign_off.${TableCtr}.57" />
							</div>
							</td>
							</tr>

							<tr>
							<td>Results Status
							</td>
							<td>
								OBR-25
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="ISCV_IBE_Parsing.${TableCtr}.54" name="ISCV_IBE_Parsing.${TableCtr}.54" placeholder="	P | F | C | R | D" />
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_HL7_Parsing.${TableCtr}.55" name="Expected_HL7_Parsing.${TableCtr}.55" />
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_Value.${TableCtr}.55" name="Expected_Value.${TableCtr}.55" />
								</div>
							</td>
							<td colspan="2">
								<div class="ui form">
									<input type="text" id="Actual_Value.${TableCtr}.55" name="Actual_Value.${TableCtr}.55" />
								</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Pass_fail.${TableCtr}.58" name="Pass_fail.${TableCtr}.58" />
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Comments.${TableCtr}.58" name="Comments.${TableCtr}.58" />
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Sign_off.${TableCtr}.58" name="Sign_off.${TableCtr}.58" />
							</div>
							</td>
							</tr>

							<tr>
							<td>Reason for Study

							</td>
							<td>
								OBR-31

							</td>
							<td>
								<div class="ui form">
									<input type="text" id="ISCV_IBE_Parsing.${TableCtr}.55" name="ISCV_IBE_Parsing.${TableCtr}.55"  />
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_HL7_Parsing.${TableCtr}.56" name="Expected_HL7_Parsing.${TableCtr}.56" />
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_Value.${TableCtr}.56" name="Expected_Value.${TableCtr}.56" />
								</div>
							</td>
							<td colspan="2">
								<div class="ui form">
									<input type="text" id="Actual_Value.${TableCtr}.56" name="Actual_Value.${TableCtr}.56" />
								</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Pass_fail.${TableCtr}.59" name="Pass_fail.${TableCtr}.59" />
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Comments.${TableCtr}.59" name="Comments.${TableCtr}.59" />
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Sign_off.${TableCtr}.59" name="Sign_off.${TableCtr}.59" />
							</div>
							</td>
							</tr>

							<tr>
							<td><b>Principal Interpreter</b>

							</td>
							<td>
								<b>OBR-32 </b>


							</td>
							<td>
								<div class="ui form">
									<input type="text" id="ISCV_IBE_Parsing.${TableCtr}.56" name="ISCV_IBE_Parsing.${TableCtr}.56"  />
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_HL7_Parsing.${TableCtr}.57" name="Expected_HL7_Parsing.${TableCtr}.57" />
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_Value.${TableCtr}.57" name="Expected_Value.${TableCtr}.57" />
								</div>
							</td>
							<td colspan="2">
								<div class="ui form">
									<input type="text" id="Actual_Value.${TableCtr}.57" name="Actual_Value.${TableCtr}.57" />
								</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Pass_fail.${TableCtr}.60" name="Pass_fail.${TableCtr}.60" />
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Comments.${TableCtr}.60" name="Comments.${TableCtr}.60" />
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Sign_off.${TableCtr}.60" name="Sign_off.${TableCtr}.60" />
							</div>
							</td>
							</tr>

							<tr>
							<td>  ID Number
							</td>
							<td>
								OBR-32.1.1
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="ISCV_IBE_Parsing.${TableCtr}.57" name="ISCV_IBE_Parsing.${TableCtr}.57"  />
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_HL7_Parsing.${TableCtr}.58" name="Expected_HL7_Parsing.${TableCtr}.58" />
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_Value.${TableCtr}.58" name="Expected_Value.${TableCtr}.58" />
								</div>
							</td>
							<td colspan="2">
								<div class="ui form">
									<input type="text" id="Actual_Value.${TableCtr}.58" name="Actual_Value.${TableCtr}.58" />
								</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Pass_fail.${TableCtr}.61" name="Pass_fail.${TableCtr}.61" />
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Comments.${TableCtr}.61" name="Comments.${TableCtr}.61" />
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Sign_off.${TableCtr}.61" name="Sign_off.${TableCtr}.61" />
							</div>
							</td>
							</tr>

							<tr>
							<td>  Family Name
							</td>
							<td>
								OBR-32.1.2
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="ISCV_IBE_Parsing.${TableCtr}.58" name="ISCV_IBE_Parsing.${TableCtr}.58"  />
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_HL7_Parsing.${TableCtr}.59" name="Expected_HL7_Parsing.${TableCtr}.59" />
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_Value.${TableCtr}.59" name="Expected_Value.${TableCtr}.59" />
								</div>
							</td>
							<td colspan="2">
								<div class="ui form">
									<input type="text" id="Actual_Value.${TableCtr}.59" name="Actual_Value.${TableCtr}.59" />
								</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Pass_fail.${TableCtr}.62" name="Pass_fail.${TableCtr}.62" />
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Comments.${TableCtr}.62" name="Comments.${TableCtr}.62" />
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Sign_off.${TableCtr}.62" name="Sign_off.${TableCtr}.62" />
							</div>
							</td>
							</tr>

							<tr>
							<td>  Given Name
							</td>
							<td>
								OBR-32.1.3
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="ISCV_IBE_Parsing.${TableCtr}.59" name="ISCV_IBE_Parsing.${TableCtr}.59"  />
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_HL7_Parsing.${TableCtr}.60" name="Expected_HL7_Parsing.${TableCtr}.60" />
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_Value.${TableCtr}.60" name="Expected_Value.${TableCtr}.60" />
								</div>
							</td>
							<td colspan="2">
								<div class="ui form">
									<input type="text" id="Actual_Value.${TableCtr}.60" name="Actual_Value.${TableCtr}.60" />
								</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Pass_fail.${TableCtr}.63" name="Pass_fail.${TableCtr}.63" />
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Comments.${TableCtr}.63" name="Comments.${TableCtr}.63" />
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Sign_off.${TableCtr}.63" name="Sign_off.${TableCtr}.63" />
							</div>
							</td>
							</tr>

							<tr>
							<td>  Middle Name
							</td>
							<td>
								OBR-32.1.4
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="ISCV_IBE_Parsing.${TableCtr}.60" name="ISCV_IBE_Parsing.${TableCtr}.60"  />
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_HL7_Parsing.${TableCtr}.61" name="Expected_HL7_Parsing.${TableCtr}.61" />
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_Value.${TableCtr}.61" name="Expected_Value.${TableCtr}.61" />
								</div>
							</td>
							<td colspan="2">
								<div class="ui form">
									<input type="text" id="Actual_Value.${TableCtr}.61" name="Actual_Value.${TableCtr}.61" />
								</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Pass_fail.${TableCtr}.64" name="Pass_fail.${TableCtr}.64" />
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Comments.${TableCtr}.64" name="Comments.${TableCtr}.64" />
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Sign_off.${TableCtr}.64" name="Sign_off.${TableCtr}.64" />
							</div>
							</td>
							</tr>


							<td colspan="10"> <b>OBX </b></td>

							<tr>
							<td>Set ID
							</td>
							<td>
								OBX-1
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="ISCV_IBE_Parsing.${TableCtr}.61" name="ISCV_IBE_Parsing.${TableCtr}.61" />
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_HL7_Parsing.${TableCtr}.62" name="Expected_HL7_Parsing.${TableCtr}.62" />
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_Value.${TableCtr}.62" name="Expected_Value.${TableCtr}.62" />
								</div>
							</td>
							<td colspan="2">
								<div class="ui form">
									<input type="text" id="Actual_Value.${TableCtr}.62" name="Actual_Value.${TableCtr}.62" />
								</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Pass_fail.${TableCtr}.65" name="Pass_fail.${TableCtr}.65" />
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Comments.${TableCtr}.65" name="Comments.${TableCtr}.65" />
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Sign_off.${TableCtr}.65" name="Sign_off.${TableCtr}.65" />
							</div>
							</td>
							</tr>

							<tr>
							<td>Value Type
							</td>
							<td>
								OBX-2
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="ISCV_IBE_Parsing.${TableCtr}.62" name="ISCV_IBE_Parsing.${TableCtr}.62" placeholder="TX" />
								</div>

							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_HL7_Parsing.${TableCtr}.63" name="Expected_HL7_Parsing.${TableCtr}.63" />
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_Value.${TableCtr}.63" name="Expected_Value.${TableCtr}.63" />
								</div>
							</td>
							<td colspan="2">
								<div class="ui form">
									<input type="text" id="Actual_Value.${TableCtr}.63" name="Actual_Value.${TableCtr}.63" />
								</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Pass_fail.${TableCtr}.66" name="Pass_fail.${TableCtr}.66" />
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Comments.${TableCtr}.66" name="Comments.${TableCtr}.66" />
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Sign_off.${TableCtr}.66" name="Sign_off.${TableCtr}.66" />
							</div>
							</td>
							</tr>

							<tr>
							<td><b>Observation Identifier
							 </b>
							</td>
							<td>
							<b>	OBX-3 </b>

							</td>
							<td>
								<div class="ui form">
									<input type="text" id="ISCV_IBE_Parsing.${TableCtr}.63" name="ISCV_IBE_Parsing.${TableCtr}.63" placeholder="ISCV Study ID" />
								</div>

							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_HL7_Parsing.${TableCtr}.64" name="Expected_HL7_Parsing.${TableCtr}.64" />
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_Value.${TableCtr}.64" name="Expected_Value.${TableCtr}.64" />
								</div>
							</td>
							<td colspan="2">
								<div class="ui form">
									<input type="text" id="Actual_Value.${TableCtr}.64" name="Actual_Value.${TableCtr}.64" />
								</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Pass_fail.${TableCtr}.67" name="Pass_fail.${TableCtr}.67" />
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Comments.${TableCtr}.67" name="Comments.${TableCtr}.67" />
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Sign_off.${TableCtr}.67" name="Sign_off.${TableCtr}.67" />
							</div>
							</td>
							</tr>

							<tr>
							<td>   Identifier

							</td>
							<td>
							  OBX-3.1

							</td>
							<td>
								<div class="ui form">
									<input type="text" id="ISCV_IBE_Parsing.${TableCtr}.64" name="ISCV_IBE_Parsing.${TableCtr}.64" />
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_HL7_Parsing.${TableCtr}.65" name="Expected_HL7_Parsing.${TableCtr}.65" />
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_Value.${TableCtr}.65" name="Expected_Value.${TableCtr}.65" />
								</div>
							</td>
							<td colspan="2">
								<div class="ui form">
									<input type="text" id="Actual_Value.${TableCtr}.65" name="Actual_Value.${TableCtr}.65" />
								</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Pass_fail.${TableCtr}.68" name="Pass_fail.${TableCtr}.68" />
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Comments.${TableCtr}.68" name="Comments.${TableCtr}.68" />
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Sign_off.${TableCtr}.68" name="Sign_off.${TableCtr}.68" />
							</div>
							</td>
							</tr>

							<tr>
							<td>    Text
							</td>
							<td>
								OBX-3.2
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="ISCV_IBE_Parsing.${TableCtr}.65" name="ISCV_IBE_Parsing.${TableCtr}.65" />
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_HL7_Parsing.${TableCtr}.66" name="Expected_HL7_Parsing.${TableCtr}.66" />
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_Value.${TableCtr}.66" name="Expected_Value.${TableCtr}.66" />
								</div>
							</td>
							<td colspan="2">
								<div class="ui form">
									<input type="text" id="Actual_Value.${TableCtr}.66" name="Actual_Value.${TableCtr}.66" />
								</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Pass_fail.${TableCtr}.69" name="Pass_fail.${TableCtr}.69" />
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Comments.${TableCtr}.69" name="Comments.${TableCtr}.69" />
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Sign_off.${TableCtr}.69" name="Sign_off.${TableCtr}.69" />
							</div>
							</td>
							</tr>

							<tr>
							<td>Observation Sub Identifier
							</td>
							<td>
								OBX-4
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_HL7_Parsing.${TableCtr}.67" name="Expected_HL7_Parsing.${TableCtr}.67" placeholder="1" />
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_Value.${TableCtr}.67" name="Expected_Value.${TableCtr}.67" />
								</div>
							</td>
							<td colspan="2">
								<div class="ui form">
									<input type="text" id="Actual_Value.${TableCtr}.67" name="Actual_Value.${TableCtr}.67" />
								</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Pass_fail.${TableCtr}.70" name="Pass_fail.${TableCtr}.70" />
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Comments.${TableCtr}.70" name="Comments.${TableCtr}.70" />
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Sign_off.${TableCtr}.70" name="Sign_off.${TableCtr}.70" />
							</div>
							</td>
							</tr>

							<tr>
							<td>Observation Value
							</td>
							<td>
								OBX-5
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="ISCV_IBE_Parsing.${TableCtr}.66" name="ISCV_IBE_Parsing.${TableCtr}.66" />
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_HL7_Parsing.${TableCtr}.68" name="Expected_HL7_Parsing.${TableCtr}.68" />
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_Value.${TableCtr}.68" name="Expected_Value.${TableCtr}.68" />
								</div>
							</td>
							<td colspan="2">
								<div class="ui form">
									<input type="text" id="Actual_Value.${TableCtr}.68" name="Actual_Value.${TableCtr}.68" />
								</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Pass_fail.${TableCtr}.71" name="Pass_fail.${TableCtr}.71" />
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Comments.${TableCtr}.71" name="Comments.${TableCtr}.71" />
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Sign_off.${TableCtr}.71" name="Sign_off.${TableCtr}.71" />
							</div>
							</td>
							</tr>

							<tr>
							<td>Observation Status
							</td>
							<td>
								OBX-11

							</td>
							<td>
								<div class="ui form">
									<input type="text" id="ISCV_IBE_Parsing.${TableCtr}.67" name="ISCV_IBE_Parsing.${TableCtr}.67" placeholder="P | F | C | R | D" />
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_HL7_Parsing.${TableCtr}.69" name="Expected_HL7_Parsing.${TableCtr}.69" />
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_Value.${TableCtr}.69" name="Expected_Value.${TableCtr}.69" />
								</div>
							</td>
							<td colspan="2">
								<div class="ui form">
									<input type="text" id="Actual_Value.${TableCtr}.69" name="Actual_Value.${TableCtr}.69" />
								</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Pass_fail.${TableCtr}.72" name="Pass_fail.${TableCtr}.72" />
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Comments.${TableCtr}.72" name="Comments.${TableCtr}.72" />
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Sign_off.${TableCtr}.72" name="Sign_off.${TableCtr}.72" />
							</div>
							</td>
							</tr>


							<td colspan="10"> <b> ZDS
							 </b></td>

							<tr>
							<td>Study Instance UID
							</td>
							<td>
								ZDS-1
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="ISCV_IBE_Parsing.${TableCtr}.68" name="ISCV_IBE_Parsing.${TableCtr}.68" />
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_HL7_Parsing.${TableCtr}.70" name="Expected_HL7_Parsing.${TableCtr}.70" />
								</div>
							</td>
							<td>
								<div class="ui form">
									<input type="text" id="Expected_Value.${TableCtr}.70" name="Expected_Value.${TableCtr}.70" />
								</div>
							</td>
							<td colspan="2">
								<div class="ui form">
									<input type="text" id="Actual_Value.${TableCtr}.70" name="Actual_Value.${TableCtr}.70" />
								</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Pass_fail.${TableCtr}.73" name="Pass_fail.${TableCtr}.73" />
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Comments.${TableCtr}.73" name="Comments.${TableCtr}.73" />
							</div>
							</td>
							<td>
							<div class="ui form">
								<input type="text" id="Sign_off.${TableCtr}.73" name="Sign_off.${TableCtr}.73" />
							</div>
							</td>
							</tr>

							</tbody>
						</table>	`

	$('#results_textTable').append(rowString);
	$('#TableCtr').Value(TableCtr);
	$('.editField').prop('readOnly', false);
	
});