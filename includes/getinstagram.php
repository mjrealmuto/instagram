<?php

$Eric_and_Kathy_Client_ID = ""; //Empty for security purposes

$Eric_and_Kathy_Client_Secret = ""; //Empty for security purposes

$access_token = ""; //Empty for security purposes

$ek_user_id = ""; //Empty for security purposes

$ch = curl_init( );

curl_setopt( $ch, CURLOPT_URL, "https://api.instagram.com/v1/users/" . $ek_user_id . "/media/recent/?client_id=" . $Eric_and_Kathy_Client_ID );

curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1 );

$instagram_json = curl_exec( $ch );



if( $fh = fopen("ek_instagram.json", "w") )
{
	fwrite( $fh, $instagram_json);

	fclose( $fh );

}
else
{
	echo "fail";
	die;
}




