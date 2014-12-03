"use strict";

angular.module('instagramFilter',['ngSanitize']).filter('userLink', function( ){
	
	return function( input )
	{
		var words = input.split(" ");
		
		var returnValue = "";
		
		for ( var i in words )
		{
			
			if( words[i].match( /^@/ ) )
			{
				var user_tag = words[i].split("");
				
				user_tag.shift( );	
				
				var bad_punc = new Array("!", ".", ",");
				
				var end_punc = "";
				
				var word_remainder = "";
				
				if( bad_punc.indexOf( user_tag[(user_tag.length - 1)] ) != -1 )
				{
					user_tag.pop( );
					
					var letters = words[i].split("");
						
					end_punc = letters.pop( );
						
					words[i] = letters.join("");
				} 
					
				if( user_tag.indexOf("'") != -1 )
				{
					var apos_index = user_tag.indexOf("'");
					
					var cut_length = user_tag.length - apos_index;
					
					var word_remainder = user_tag.splice(apos_index, cut_length);
					
					var letters = words[i].split("");
					
					letters.splice(letters.indexOf("'"), (letters.length - letters.indexOf("'") ) );	
					
					words[i] = letters.join("");
					
				}
					
				if( returnValue == "" )
				{
					returnValue += "<a href=\"http://www.instagram.com/" + user_tag.join("") + "\" target=\"_blank\">" + words[i] + "</a>";
				}
				else
				{
					returnValue += " <a href=\"http://www.instagram.com/" + user_tag.join("") + "\" target=\"_blank\">" + words[i] + "</a>";	
				}
				
				if( word_remainder != "" )
				{
					returnValue += word_remainder.join("");
				}
				
				
				if( end_punc != "" )
				{
					returnValue += end_punc;	
				}
			}
			else if( words[i].match(/^http:/) )
			{
				returnValue += " <a href=\"" + words[i] + "\" target=\"_blank\">" + words[i] + "</a>";
			}
			else if( words[i].match(/^www./) )
			{
				returnValue += " <a href=\"http://" + words[i] + "\" target=\"_blank\">" + words[i] + "</a>";
			}
			else if( words[i].match(/#/) )
			{
				returnValue += " <b>" + words[i] + "</b>";	
			}
			else
			{
				if( returnValue == "" )
				{
					returnValue += words[i];
				}
				else
				{
					returnValue += "  " + words[i];	
				}
			}
		}
		
		return returnValue;
	};
});
