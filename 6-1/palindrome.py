def palindrome(word : str):
    
    # Return True if the word is a palindrome

    if word.lower() == word.lower()[::-1]:
        return True
    
    # Return the word backwards if it is not a palindrome

    else:
        return word[::-1]
