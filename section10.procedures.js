


//Order Table

var TableCtr=0 ;
$("#addrow_procedures").click(function()
{
	
	TableCtr++;


	rowString = `
        <table class="ui celled table black unstackable" >

        <thead>
                                      
                                        <th colspan="2"><center>HIS Procedures</center></th>
                                        <th colspan="7"><center>ISCV Mapping Test Results</center></th>
                                        <th colspan="7"><center>HIS Report Test Results</center></th>

                                                </thead>
        <tbody>


                                                <tr>
                                                                        <th class="one wide"><center>Procedure Code</center></th>
                                                                        <th class="two wide"><center>Procedure</center></th>
                                                                        <th class="one wide"><center>ISCV Study Type</center></th>
                                                                        <th class="one wide"><center>Test Date</center></th>
                                                                        <th class="one wide"><center>Expected_Result</center></th>
                                                                        <th class="one wide"><center>Actual_result</center></th>
                                                                        <th class="one wide"><center>Pass/Fail</center></th>
                                                                        <th class="one wide"><center>Accession Number</center></th>
                                                                        <th class="two wide"><center>Comments <br></center></th>
                                                                        <th class="one wide"><center>Test Date</center></th>
                                                                        <th class="one wide"><center>Expected_Result</center></th>
                                                                        <th class="one wide"><center>Actual_result</center></th>
                                                                        <th class="one wide"><center>Pass/Fail</center></th>
                                                                        <th class="one wide"><center>Accession Number</center></th>
                                                                        <th class="one wide"><center>Report Format in HIS Accepted</center> <br>
                                                                        <th class="one wide"><center>Comments <br>
                                        Sign-Off</center></th>
                                                                </tr>
                                                                <tr>
                                                                <td>
                                                                        <div class="ui form">
                                                                                <input type="text" id="Procedure_Code.${TableCtr}.1" name="Procedure_Code.${TableCtr}.1" />
                                                                        </div>
                                                                </td>
                                                                <td>
                                                                        <div class="ui form">
                                                                                <input type="text" id="Procedures.${TableCtr}.1" name="Procedures.${TableCtr}.1" />
                                                                        </div>
                                                                </td>
                                                                <td>
                                                                        <div class="ui form">
                                                                                <input type="text" id="ISCV_Study_Type.${TableCtr}.1" name="ISCV_Study_Type.${TableCtr}.1" />
                                                                        </div>
                                                                </td>
                                                                <td>
                                                                        <div class="ui form">
                                                                                <input type="text" id="ISCV_Test_Date.${TableCtr}.1" name="ISCV_Test_Date.${TableCtr}.1" />
                                                                        </div>
                                                                </td>
                                                                <td>
                                                                        <div class="ui form">
                                                                                <input type="text" id="ISCV_Expectedresult.${TableCtr}.1" name="ISCV_Expectedresult.${TableCtr}.1" />
                                                                        </div>
                                                                </td>
                                                                <td>
                                                                        <div class="ui form">
                                                                                <input type="text" id="ISCV_Actualresult.${TableCtr}.1" name="ISCV_Actualresult.${TableCtr}.1" />
                                                                        </div>
                                                                </td>
                                                                <td>
                                                                        <div class="ui form">
                                                                                <input type="text" id="ISCV_Pass_fail.${TableCtr}.1" name="ISCV_Pass_fail.${TableCtr}.1" />
                                                                        </div>
                                                                </td>
                                                                <td>
                                                                        <div class="ui form">
                                                                                <input type="text" id="ISCV_accesionnumber.${TableCtr}.1" name="ISCV_accesionnumber.${TableCtr}.1" />
                                                                        </div>
                                                                </td>
                                                                <td>
                                                                        <div class="ui form">
                                                                                <input type="text" id="ISCV_signoff.${TableCtr}.1" name="ISCV_signoff.${TableCtr}.1" />
                                                                        </div>
                                                                </td>
                                                                <td>
                                                                        <div class="ui form">
                                                                                <input type="text" id="HIS_Test_Date.${TableCtr}.1" name="HIS_Test_Date.${TableCtr}.1" />
                                                                        </div>
                                                                </td>
                                                                <td>
                                                                        <div class="ui form">
                                                                                <input type="text" id="HIS_Expectedresult.${TableCtr}.1" name="HIS_Expectedresult.${TableCtr}.1" />
                                                                        </div>
                                                                </td>
                                                                <td>
                                                                        <div class="ui form">
                                                                                <input type="text" id="HIS_Actualresult.${TableCtr}.1" name="HIS_Actualresult.${TableCtr}.1" />
                                                                        </div>
                                                                </td>
                                                                <td>
                                                                        <div class="ui form">
                                                                                <input type="text" id="HIS_Pass_fail.${TableCtr}.1" name="HIS_Pass_fail.${TableCtr}.1" />
                                                                        </div>
                                                                </td>
                                                                <td>
                                                                        <div class="ui form">
                                                                                <input type="text" id="HIS_accesionnumber.${TableCtr}.1" name="HIS_accesionnumber.${TableCtr}.1" />
                                                                        </div>
                                                                </td>
                                                                <td>
                                                                        <div class="ui form">
                                                                                <input type="text" id="HIS_report.${TableCtr}.1" name="HIS_report.${TableCtr}.1" />
                                                                        </div>
                                                                </td>
                                                                <td>
                                                                        <div class="ui form">
                                                                                <input type="text" id="HIS_signoff.${TableCtr}.1" name="HIS_signoff.${TableCtr}.1" />
                                                                        </div>
                                                                </td>
                                                        </tr>

                                </tbody>
                        </table>             `

	$('#proceduresTable').append(rowString);
        $('#TableCtr').val($TableCtr);
	$('.editField').prop('readOnly', false);
	
});