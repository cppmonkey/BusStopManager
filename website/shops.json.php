<?php
include "config.inc.php";
$db_connections = new mysqli($db_host, $db_user, $db_pass, $db_name);

if($db_connections->errno) {
	// TODO output error
} else {
	$query = "SELECT `number`, `name`, `pallet` FROM `tbl_stores`";	
	$results = $db_connections->query($query);
	// TODO Handle possible errors
	$detailsArray = array();
	while ($row = $results->fetch_assoc()) {
		array_push($detailsArray, $row);
	}
	echo json_encode($detailsArray);
}
?>