def echo(string)
	return string
end

def shout(string)
	return string.upcase
end

def repeat(string,number = 1)
	final_string = string
	until number == 0
		final_string += " " + string
		number -= 1
	end
	return final_string
end