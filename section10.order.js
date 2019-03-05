


//Order Table

var TableCtr=0 ;
$("#addrow_order").click(function()
{
	
	TableCtr++;


	rowString = `
<table class="ui celled table black unstackable" >
				
						<thead>

			              	  <th colspan="2">Test</th>
				              <th colspan="3">Expected Results</th>
				              <th colspan="6">Test Results</th>
			              	

						</thead>

		<tbody>



	<tr>
              <th class="one wide"><center>Order Status</center></th>
              <th class="two wide"><center>HIS Test Steps</center></th>
              <th class="two wide"><center>ISCV IBE</center></th>
              <th class="two wide"><center>ISCV</center></th>
              <th class="two wide"><center>DICOM Modality Worklist <br>
              (DWML)</center></th>
              <th class="one wide"><center>Test Date</center></th>
              <th class="one wide"><center>Pass/fail</center></th>
              <th class="one wide"><center>Expected Result</center></th>
              <th class="one wide"><center>Actual Result</center></th>
              <th class="two wide"><center>Comments</center></th>
              <th class="one wide"><center>Sign_off</center></th>
            </tr>
            <tr>
<td colspan="11"><b>New Order</b></td>
            </tr>
            <tr>
              <td><center>
                ORM_NW <br>
                New Order </center>
              </td>
              <td>
                <center>
                  Create a new order for an ISCV procedure scheduled for today
</center>
              </td>
              <td>
                <center>
                  ORM_NW message was received and processed without error
                </center>
              </td>
              <td>
                <center>
                  1. Verify a new patient folder was created in ISCV <br>

                  2. Order in ISCV worklist under the new patient folder<br>

                  3. Verify all expected fields are populated
                </center>
              </td>
              <td>
                <center>
                  Order seen on DWML
                </center>
              </td>
              <td>
                <div class="ui form">
                  <input type="text" id="test_details.${TableCtr}.1" name="test_details.${TableCtr}.1" />
                </div>
              </td>
              <td>
                <div class="ui form">
                  <input type="text" id="Pass_fail.${TableCtr}.1" name="Pass_fail.${TableCtr}.1" />
                </div>
              </td>
              <td>
                <div class="ui form">
                  <input type="text" id="Expected_result.${TableCtr}.1" name="Expected_result.${TableCtr}.1" />
                </div>
              </td>
              <td>
                <div class="ui form">
                  <input type="text" id="actual_result.${TableCtr}.1" name="actual_result.${TableCtr}.1" />
                </div>
              </td>
              <td>
                <div class="ui form">
                  <input type="text" id="Comments.${TableCtr}.1" name="Comments.${TableCtr}.1
" />
                </div>
              </td>
              <td>
                <div class="ui form">
                  <input type="text" id="Sign_off.${TableCtr}.1" name="Sign_off.${TableCtr}.1
" />
                </div>
              </td>
            </tr>

            <tr>
              <td><center>
                ORM_NW <br>
               Future Order
              </center>
              </td>
              <td>
                <center>
                  Create future order in for an ISCV procedure scheduled for tomorrow
</center>
              </td>
              <td>
                <center>
                  ORM_NW message was received and processed without error. The order posts in database and is forwarded to ISCV on scheduled date
                </center>
              </td>
              <td>
                <center>
                  Order seen on ISCV on the scheduled date
                </center>
              </td>
              <td>
                <center>
                  Order seen on DWML on scheduled date
                </center>
              </td>
              <td>
                <div class="ui form">
                  <input type="text" id="test_details.${TableCtr}.2" name="test_details.${TableCtr}.2" />
                </div>
              </td>
              <td>
                <div class="ui form">
                  <input type="text" id="Pass_fail.${TableCtr}.2" name="Pass_fail.${TableCtr}.2" />
                </div>
              </td>
              <td>
                <div class="ui form">
                  <input type="text" id="Expected_result.${TableCtr}.2" name="Expected_result.${TableCtr}.2" />
                </div>
              </td>
              <td>
                <div class="ui form">
                  <input type="text" id="actual_result.${TableCtr}.2" name="actual_result.${TableCtr}.2" />
                </div>
              </td>
              <td>
                <div class="ui form">
                  <input type="text" id="Comments.${TableCtr}.2" name="Comments.${TableCtr}.2
" />
                </div>
              </td>
              <td>
                <div class="ui form">
                  <input type="text" id="Sign_off.${TableCtr}.2" name="Sign_off.${TableCtr}.2
" />
                </div>
              </td>
            </tr>

            <tr>
              <td><center>
                ORM_NW <br>
                Repeat Orders
                </center>
              </td>
              <td>
                <center>
                  Create order for patient with existing order in ISCV
</center>
              </td>
              <td>
                <center>
                  All ORM_NW messages were received processed without error
                </center>
              </td>
              <td>
                <center>
                  Multiple orders seen in ISCV worklist
                </center>
              </td>
              <td>
                <center>
                  Multiple orders on the DWML
                </center>
              </td>
              <td>
                <div class="ui form">
                  <input type="text" id="test_details.${TableCtr}.3" name="test_details.${TableCtr}.3" />
                </div>
              </td>
              <td>
                <div class="ui form">
                  <input type="text" id="Pass_fail.${TableCtr}.3" name="Pass_fail.${TableCtr}.3" />
                </div>
              </td>
              <td>
                <div class="ui form">
                  <input type="text" id="Expected_result.${TableCtr}.3" name="Expected_result.${TableCtr}.3" />
                </div>
              </td>
              <td>
                <div class="ui form">
                  <input type="text" id="actual_result.${TableCtr}.3" name="actual_result.${TableCtr}.3" />
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

            <tr>
              <td><center>
                ORM_NW <br>
               Recurring Order
</center>
              </td>
              <td>
                <center>
                  Create recurring order scheduled for today and tomorrow
</center>
              </td>
              <td>
                <center>
                  Verify that the ORM_NW was received by the XcC and multiple Orders were generated for the specified times.
                </center>
              </td>
              <td>
                <center>
                  Each order seen on ISCV worklist on the scheduled date
                </center>
              </td>
              <td>
                <center>
                  Each order seen on DWML on scheduled date
                </center>
              </td>
              <td>
                <div class="ui form">
                  <input type="text" id="test_details.${TableCtr}.4" name="test_details.${TableCtr}.4" />
                </div>
              </td>
              <td>
                <div class="ui form">
                  <input type="text" id="Pass_fail.${TableCtr}.4" name="Pass_fail.${TableCtr}.4" />
                </div>
              </td>
              <td>
                <div class="ui form">
                  <input type="text" id="Expected_result.${TableCtr}.4" name="Expected_result.${TableCtr}.4" />
                </div>
              </td>
              <td>
                <div class="ui form">
                  <input type="text" id="actual_result.${TableCtr}.4" name="actual_result.${TableCtr}.4" />
                </div>
              </td>
              <td>
                <div class="ui form">
                  <input type="text" id="Comments.${TableCtr}.4" name="Comments.${TableCtr}.4
" />
                </div>
              </td>
              <td>
                <div class="ui form">
                  <input type="text" id="Sign_off.${TableCtr}.4" name="Sign_off.${TableCtr}.4
" />
                </div>
              </td>
            </tr>

            <tr>
              <td><center>
                ORM_NW <br>
                 Non-Cardiology Order
</center>
              </td>
              <td>
                <center>
                  Order Non-Cardiology Order in scheduled for today
</center>
              </td>
              <td>
                <center>
                  Scenario 1 - HIS filtering - Messsage not received <br>

Scenario 2 - IBE filtering - Message received but not forwarded to ISCV or worklist

                </center>
              </td>
              <td>
                <center>
                  Order not seen in ISCV
                </center>
              </td>
              <td>
                <center>
                  Order not on DWML
                </center>
              </td>
              <td>
                <div class="ui form">
                  <input type="text" id="test_details.${TableCtr}.5" name="test_details.${TableCtr}.5" />
                </div>
              </td>
              <td>
                <div class="ui form">
                  <input type="text" id="Pass_fail.${TableCtr}.5" name="Pass_fail.${TableCtr}.5" />
                </div>
              </td>
              <td>
                <div class="ui form">
                  <input type="text" id="Expected_result.${TableCtr}.5" name="Expected_result.${TableCtr}.5" />
                </div>
              </td>
              <td>
                <div class="ui form">
                  <input type="text" id="actual_result.${TableCtr}.5" name="actual_result.${TableCtr}.5" />
                </div>
              </td>
              <td>
                <div class="ui form">
                  <input type="text" id="Comments.${TableCtr}.5" name="Comments.${TableCtr}.5
" />
                </div>
              </td>
              <td>
                <div class="ui form">
                  <input type="text" id="Sign_off.${TableCtr}.5" name="Sign_off.${TableCtr}.5
" />
                </div>
              </td>
            </tr>

				

		<tr>
			<td colspan="11"><b>Order Cancel
			</b></td>
			</tr>
			<tr>
			<td><center>
			  ORM_CA <br>
			Cancel Order
			</center>
			</td>
			<td>
			  <center>
			    Cancel an existing ISCV order

			</center>
			</td>
			<td>
			  <center>
			    Status changed to Cancelled
			  </center>
			</td>
			<td>
			  <center>
			    Order removed from ISCV worklist

			  </center>
			</td>
			<td>
			  <center>
			    Order removed from modality DWML
			  </center>
			</td>
			<td>
			  <div class="ui form">
			    <input type="text" id="test_details.${TableCtr}.6" name="test_details.${TableCtr}.6" />
			  </div>
			</td>
			<td>
			  <div class="ui form">
			    <input type="text" id="Pass_fail.${TableCtr}.6" name="Pass_fail.${TableCtr}.6" />
			  </div>
			</td>
			<td>
			  <div class="ui form">
			    <input type="text" id="Expected_result.${TableCtr}.6" name="Expected_result.${TableCtr}.6" />
			  </div>
			</td>
			<td>
			  <div class="ui form">
			    <input type="text" id="actual_result.${TableCtr}.6" name="actual_result.${TableCtr}.6" />
			  </div>
			</td>
			<td>
			  <div class="ui form">
			    <input type="text" id="Comments.${TableCtr}.6" name="Comments.${TableCtr}.6
			" />
			  </div>
			</td>
			<td>
			  <div class="ui form">
			    <input type="text" id="Sign_off.${TableCtr}.6" name="Sign_off.${TableCtr}.6
			" />
			  </div>
			</td>
			</tr>

			<tr>
			<td><center>
			  ORM_OC <br>
			Cancel Order

			</center>
			</td>
			<td>
			  <center>
			    Cancel an existing ISCV order
			</center>
			</td>
			<td>
			  <center>
			    Status changed to Cancelled
			</center>
			</td>
			<td>
			  <center>
			    Order removed from ISCV worklist

			  </center>
			</td>
			<td>
			  <center>
			    Order removed from modality DWML
			  </center>
			</td>
			<td>
			  <div class="ui form">
			    <input type="text" id="test_details.${TableCtr}.7" name="test_details.${TableCtr}.7" />
			  </div>
			</td>
			<td>
			  <div class="ui form">
			    <input type="text" id="Pass_fail.${TableCtr}.7" name="Pass_fail.${TableCtr}.7" />
			  </div>
			</td>
			<td>
			  <div class="ui form">
			    <input type="text" id="Expected_result.${TableCtr}.7" name="Expected_result.${TableCtr}.7" />
			  </div>
			</td>
			<td>
			  <div class="ui form">
			    <input type="text" id="actual_result.${TableCtr}.7" name="actual_result.${TableCtr}.7" />
			  </div>
			</td>
			<td>
			  <div class="ui form">
			    <input type="text" id="Comments.${TableCtr}.7" name="Comments.${TableCtr}.7
			" />
			  </div>
			</td>
			<td>
			  <div class="ui form">
			    <input type="text" id="Sign_off.${TableCtr}.7" name="Sign_off.${TableCtr}.7
			" />
			  </div>
			</td>
			</tr>

			<tr>
			<td><center>
			  ORM_DC <br>
			Discontinue Order

			  </center>
			</td>
			<td>
			  <center>
			    Discontinue an existing ISCV order

			</center>
			</td>
			<td>
			  <center>
			    Status changed to Cancelled
			  </center>
			</td>
			<td>
			  <center>
			    Order removed from ISCV worklist

			  </center>
			</td>
			<td>
			  <center>
			    Order removed from modality DWML
			  </center>
			</td>
			<td>
			  <div class="ui form">
			    <input type="text" id="test_details.${TableCtr}.8" name="test_details.${TableCtr}.8" />
			  </div>
			</td>
			<td>
			  <div class="ui form">
			    <input type="text" id="Pass_fail.${TableCtr}.8" name="Pass_fail.${TableCtr}.8" />
			  </div>
			</td>
			<td>
			  <div class="ui form">
			    <input type="text" id="Expected_result.${TableCtr}.8" name="Expected_result.${TableCtr}.8" />
			  </div>
			</td>
			<td>
			  <div class="ui form">
			    <input type="text" id="actual_result.${TableCtr}.8" name="actual_result.${TableCtr}.8" />
			  </div>
			</td>
			<td>
			  <div class="ui form">
			    <input type="text" id="Comments.${TableCtr}.8" name="Comments.${TableCtr}.8
			" />
			  </div>
			</td>
			<td>
			  <div class="ui form">
			    <input type="text" id="Sign_off.${TableCtr}.8" name="Sign_off.${TableCtr}.8
			" />
			  </div>
			</td>
			</tr>

			<tr>
			<td><center>
			  ORM_OD <br>
			Discontinue Order

			</center>
			</td>
			<td>
			  <center>
			    Discontinue an existing ISCV order
			</center>
			</td>
			<td>
			  <center>
			    Status changed to Cancelled
			  </center>
			</td>
			<td>
			  <center>
			    Order removed from ISCV worklist
			  </center>
			</td>
			<td>
			  <center>
			    Order removed from ISCV worklist
			  </center>
			</td>
			<td>
			  <div class="ui form">
			    <input type="text" id="test_details.${TableCtr}.9" name="test_details.${TableCtr}.9" />
			  </div>
			</td>
			<td>
			  <div class="ui form">
			    <input type="text" id="Pass_fail.${TableCtr}.9" name="Pass_fail.${TableCtr}.9" />
			  </div>
			</td>
			<td>
			  <div class="ui form">
			    <input type="text" id="Expected_result.${TableCtr}.9" name="Expected_result.${TableCtr}.9" />
			  </div>
			</td>
			<td>
			  <div class="ui form">
			    <input type="text" id="actual_result.${TableCtr}.9" name="actual_result.${TableCtr}.9" />
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
			<td><center>
			  ORM_CA <br>
			Cancel Future Order

			</center>
			</td>
			<td>
			  <center>
			    Cancel future order not yet seen in ISCV
			</center>
			</td>
			<td>
			  <center>
			    Status changed to Cancelled
			</center>
			</td>
			<td>
			  <center>
			    Order not seen in ISCV on scheduled date
			  </center>
			</td>
			<td>
			  <center>
			    Order not seen on modality DWML on scheduled date
			  </center>
			</td>
			<td>
			  <div class="ui form">
			    <input type="text" id="test_details.${TableCtr}.10" name="test_details.${TableCtr}.10" />
			  </div>
			</td>
			<td>
			  <div class="ui form">
			    <input type="text" id="Pass_fail.${TableCtr}.10" name="Pass_fail.${TableCtr}.10" />
			  </div>
			</td>
			<td>
			  <div class="ui form">
			    <input type="text" id="Expected_result.${TableCtr}.10" name="Expected_result.${TableCtr}.10" />
			  </div>
			</td>
			<td>
			  <div class="ui form">
			    <input type="text" id="actual_result.${TableCtr}.10" name="actual_result.${TableCtr}.10" />
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
			<td><center>
			  ORM_CA <br>
			Cancel Future Order

			</center>
			</td>
			<td>
			  <center>
			    Cancel future order not yet seen in ISCV
			</center>
			</td>
			<td>
			  <center>
			    Status changed to Cancelled
			</center>
			</td>
			<td>
			  <center>
			    Order not seen in ISCV on scheduled date
			  </center>
			</td>
			<td>
			  <center>
			    Order not seen on modality DWML on scheduled date
			  </center>
			</td>
			<td>
			  <div class="ui form">
			    <input type="text" id="test_details.${TableCtr}.11" name="test_details.${TableCtr}.11" />
			  </div>
			</td>
			<td>
			  <div class="ui form">
			    <input type="text" id="Pass_fail.${TableCtr}.11" name="Pass_fail.${TableCtr}.11" />
			  </div>
			</td>
			<td>
			  <div class="ui form">
			    <input type="text" id="Expected_result.${TableCtr}.11" name="Expected_result.${TableCtr}.11" />
			  </div>
			</td>
			<td>
			  <div class="ui form">
			    <input type="text" id="actual_result.${TableCtr}.11" name="actual_result.${TableCtr}.11" />
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
			<td><center>
			  ORM_CA <br>
			Cancel Future Order

			</center>
			</td>
			<td>
			  <center>
			    Cancel future order not yet seen in ISCV
			</center>
			</td>
			<td>
			  <center>
			    Status changed to Cancelled
			</center>
			</td>
			<td>
			  <center>
			    Order not seen in ISCV on scheduled date
			  </center>
			</td>
			<td>
			  <center>
			    Order not seen on modality DWML on scheduled date
			  </center>
			</td>
			<td>
			  <div class="ui form">
			    <input type="text" id="test_details.${TableCtr}.12" name="test_details.${TableCtr}.12" />
			  </div>
			</td>
			<td>
			  <div class="ui form">
			    <input type="text" id="Pass_fail.${TableCtr}.12" name="Pass_fail.${TableCtr}.12" />
			  </div>
			</td>
			<td>
			  <div class="ui form">
			    <input type="text" id="Expected_result.${TableCtr}.12" name="Expected_result.${TableCtr}.12" />
			  </div>
			</td>
			<td>
			  <div class="ui form">
			    <input type="text" id="actual_result.${TableCtr}.12" name="actual_result.${TableCtr}.12" />
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
			<td><center>
			  ORM_OC   <br>
			Cancel Future Order


			</center>
			</td>
			<td>
			  <center>
			    Cancel future order not yet seen in ISCV
			</center>
			</td>
			<td>
			  <center>
			    Status changed to Cancelled
			</center>
			</td>
			<td>
			  <center>
			    Order not seen in ISCV on scheduled date
			  </center>
			</td>
			<td>
			  <center>
			    Order not seen on modality DWML on scheduled date
			  </center>
			</td>
			<td>
			  <div class="ui form">
			    <input type="text" id="test_details.${TableCtr}.13" name="test_details.${TableCtr}.13" />
			  </div>
			</td>
			<td>
			  <div class="ui form">
			    <input type="text" id="Pass_fail.${TableCtr}.13" name="Pass_fail.${TableCtr}.13" />
			  </div>
			</td>
			<td>
			  <div class="ui form">
			    <input type="text" id="Expected_result.${TableCtr}.13" name="Expected_result.${TableCtr}.13" />
			  </div>
			</td>
			<td>
			  <div class="ui form">
			    <input type="text" id="actual_result.${TableCtr}.13" name="actual_result.${TableCtr}.13" />
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
			<td><center>
			  ORM_DC  <br>
			Discontinue Future Order


			</center>
			</td>
			<td>
			  <center>
			    Discontinue future order not yet seen in ISCV
			</center>
			</td>
			<td>
			  <center>
			    Status changed to Cancelled
			</center>
			</td>
			<td>
			  <center>
			    Order not seen in ISCV on scheduled date

			  </center>
			</td>
			<td>
			  <center>
			    Order not seen on modality DWML on scheduled date

			  </center>
			</td>
			<td>
			  <div class="ui form">
			    <input type="text" id="test_details.${TableCtr}.14" name="test_details.${TableCtr}.14" />
			  </div>
			</td>
			<td>
			  <div class="ui form">
			    <input type="text" id="Pass_fail.${TableCtr}.14" name="Pass_fail.${TableCtr}.14" />
			  </div>
			</td>
			<td>
			  <div class="ui form">
			    <input type="text" id="Expected_result.${TableCtr}.14" name="Expected_result.${TableCtr}.14" />
			  </div>
			</td>
			<td>
			  <div class="ui form">
			    <input type="text" id="actual_result.${TableCtr}.14" name="actual_result.${TableCtr}.14" />
			  </div>
			</td>
			<td>
			  <div class="ui form">
			    <input type="text" id="Comments.${TableCtr}.14" name="Comments.${TableCtr}.14
			" />
			  </div>
			</td>
			<td>
			  <div class="ui form">
			    <input type="text" id="Sign_off.${TableCtr}.14" name="Sign_off.${TableCtr}.14
			" />
			  </div>
			</td>
			</tr>

			<tr>
			<td><center>
			  ORM_OD   <br>
			Discontinue Future Order



			</center>
			</td>
			<td>
			  <center>
			    Discontinue future order not yet seen in ISCV
			</center>
			</td>
			<td>
			  <center>
			    Status changed to Cancelled
			</center>
			</td>
			<td>
			  <center>
			    Order not seen in ISCV on scheduled date

			  </center>
			</td>
			<td>
			  <center>
			    Order not seen on modality DWML on scheduled date

			  </center>
			</td>
			<td>
			  <div class="ui form">
			    <input type="text" id="test_details.${TableCtr}.15" name="test_details.${TableCtr}.15" />
			  </div>
			</td>
			<td>
			  <div class="ui form">
			    <input type="text" id="Pass_fail.${TableCtr}.15" name="Pass_fail.${TableCtr}.15" />
			  </div>
			</td>
			<td>
			  <div class="ui form">
			    <input type="text" id="Expected_result.${TableCtr}.15" name="Expected_result.${TableCtr}.15" />
			  </div>
			</td>
			<td>
			  <div class="ui form">
			    <input type="text" id="actual_result.${TableCtr}.15" name="actual_result.${TableCtr}.15" />
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

			<!------->

			<tr>
			<td colspan="11"><b>Status Change
			</b></td>
			</tr>
			<tr>
			<td><center>
			  ORM_SC_SC <br>
			Procedure Change

			</center>
			</td>
			<td>
			  <center>
			    Change procedure of an existing ISCV order


			</center>
			</td>
			<td>
			  <center>
			    Procedure updated

			  </center>
			</td>
			<td>
			  <center>
			    New study type seen in ISCV worklist


			  </center>
			</td>
			<td>
			  <center>
			    New procedure seen on modality DWML (if modality capable of displaying)
			  </center>
			</td>
			<td>
			  <div class="ui form">
			    <input type="text" id="test_details.${TableCtr}.16" name="test_details.${TableCtr}.16" />
			  </div>
			</td>
			<td>
			  <div class="ui form">
			    <input type="text" id="Pass_fail.${TableCtr}.16" name="Pass_fail.${TableCtr}.16" />
			  </div>
			</td>
			<td>
			  <div class="ui form">
			    <input type="text" id="Expected_result.${TableCtr}.16" name="Expected_result.${TableCtr}.16" />
			  </div>
			</td>
			<td>
			  <div class="ui form">
			    <input type="text" id="actual_result.${TableCtr}.16" name="actual_result.${TableCtr}.16" />
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
			<tr>
			<td><center>
			  ORM_SC_SC  <br>
			Scheduled Date Change
			</center>
			</td>
			<td>
			  <center>
			    Change the order date of existing ISCV order

			</center>
			</td>
			<td>
			  <center>
			    Scheduled date updated

			</center>
			</td>
			<td>
			  <center>
			    Existing order still seen in ISCV worklist
			  </center>
			</td>
			<td>
			  <center>
			    Order seen on DWML on scheduled date
			  </center>
			</td>
			<td>
			  <div class="ui form">
			    <input type="text" id="test_details.${TableCtr}.17" name="test_details.${TableCtr}.17" />
			  </div>
			</td>
			<td>
			  <div class="ui form">
			    <input type="text" id="Pass_fail.${TableCtr}.17" name="Pass_fail.${TableCtr}.17" />
			  </div>
			</td>
			<td>
			  <div class="ui form">
			    <input type="text" id="Expected_result.${TableCtr}.17" name="Expected_result.${TableCtr}.17" />
			  </div>
			</td>
			<td>
			  <div class="ui form">
			    <input type="text" id="actual_result.${TableCtr}.17" name="actual_result.${TableCtr}.17" />
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
			<td><center>
			  ORM_SC_IP  <br>
			Status Update to In Progress
			</center>
			</td>
			<td>
			  <center>
			    Change the status existing ISCV order to in progress
			</center>
			</td>
			<td>
			  <center>
			    Status changed to In Progress

			  </center>
			</td>
			<td>
			  <center>
			    Existing order still seen in ISCV worklist
			</center>
			</td>
			<td>
			  <center>
			    Existing order still seen on DWML
			  </center>
			</td>
			<td>
			  <div class="ui form">
			    <input type="text" id="test_details.${TableCtr}.18" name="test_details.${TableCtr}.18" />
			  </div>
			</td>
			<td>
			  <div class="ui form">
			    <input type="text" id="Pass_fail.${TableCtr}.18" name="Pass_fail.${TableCtr}.18" />
			  </div>
			</td>
			<td>
			  <div class="ui form">
			    <input type="text" id="Expected_result.${TableCtr}.18" name="Expected_result.${TableCtr}.18" />
			  </div>
			</td>
			<td>
			  <div class="ui form">
			    <input type="text" id="actual_result.${TableCtr}.18" name="actual_result.${TableCtr}.18" />
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
			<td><center>
			  ORM_SC_CA  <br>
			Status Update to Cancel
			</center>
			</td>
			<td>
			  <center>
			    Change the status existing ISCV order to Cancel
			</center>
			</td>
			<td>
			  <center>
			    Status changed to Cancelled
			  </center>
			</td>
			<td>
			  <center>
			    Order removed from ISCV worklist
			  </center>
			</td>
			<td>
			  <center>
			    Order removed from modality DWML
			  </center>
			</td>
			<td>
			  <div class="ui form">
			    <input type="text" id="test_details.${TableCtr}.19" name="test_details.${TableCtr}.19" />
			  </div>
			</td>
			<td>
			  <div class="ui form">
			    <input type="text" id="Pass_fail.${TableCtr}.19" name="Pass_fail.${TableCtr}.19" />
			  </div>
			</td>
			<td>
			  <div class="ui form">
			    <input type="text" id="Expected_result.${TableCtr}.19" name="Expected_result.${TableCtr}.19" />
			  </div>
			</td>
			<td>
			  <div class="ui form">
			    <input type="text" id="actual_result.${TableCtr}.19" name="actual_result.${TableCtr}.19" />
			  </div>
			</td>
			<td>
			  <div class="ui form">
			    <input type="text" id="Comments.${TableCtr}.19" name="Comments.${TableCtr}.19
			" />
			  </div>
			</td>
			<td>
			  <div class="ui form">
			    <input type="text" id="Sign_off.${TableCtr}.19" name="Sign_off.${TableCtr}.19
			" />
			  </div>
			</td>
			</tr>
			<tr>
			<td><center>
			  ORM_SC_DC
			Status Update to Discontinue <br>
			</center>
			</td>
			<td>
			  <center>
			    Change the status existing ISCV order to Discontinue
			</center>
			</td>
			<td>
			  <center>
			    Status changed to Cancelled
			</center>
			</td>
			<td>
			  <center>
			    Order not seen in ISCV on scheduled date
			  </center>
			</td>
			<td>
			  <center>
			    Order not seen on modality DWML on scheduled date
			  </center>
			</td>
			<td>
			  <div class="ui form">
			    <input type="text" id="test_details.${TableCtr}.20" name="test_details.${TableCtr}.20" />
			  </div>
			</td>
			<td>
			  <div class="ui form">
			    <input type="text" id="Pass_fail.${TableCtr}.20" name="Pass_fail.${TableCtr}.20 />
			  </div>
			</td>
			<td>
			  <div class="ui form">
			    <input type="text" id="Expected_result.${TableCtr}.20" name="Expected_result.${TableCtr}.20 />
			  </div>
			</td>
			<td>
			  <div class="ui form">
			    <input type="text" id="actual_result.${TableCtr}.20" name="actual_result.${TableCtr}.20 />
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
			<td><center>
			  ORM_SC_CM   <br>
			Status Update to Complete
			</center>
			</td>
			<td>
			  <center>
			    Change the status existing ISCV order to complete
			</center>
			</td>
			<td>
			  <center>
			    Status changed to Completed
			</center>
			</td>
			<td>
			  <center>
			    Order not seen in ISCV on scheduled date
			  </center>
			</td>
			<td>
			  <center>
			    Order not seen on modality DWML on scheduled date
			  </center>
			</td>
			<td>
			  <div class="ui form">
			    <input type="text" id="test_details.${TableCtr}.21" name="test_details.${TableCtr}.21" />
			  </div>
			</td>
			<td>
			  <div class="ui form">
			    <input type="text" id="Pass_fail.${TableCtr}.21" name="Pass_fail.${TableCtr}.21" />
			  </div>
			</td>
			<td>
			  <div class="ui form">
			    <input type="text" id="Expected_result.${TableCtr}.21" name="Expected_result.${TableCtr}.21" />
			  </div>
			</td>
			<td>
			  <div class="ui form">
			    <input type="text" id="actual_result.${TableCtr}.21" name="actual_result.${TableCtr}.21" />
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

		</tbody>
	</table>

		`

	$('#orderTable').append(rowString);
	$('#TableCtr').value(TableCtr);
	$('.editField').prop('readOnly', false);
	
});