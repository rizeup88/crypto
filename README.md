# Message Encrypter (Cryptosquare)

#### This page is designed to convert messages into encrypted words to decipher,  Updated as of September 6, 2019

#### By Chase J. Smith

## Description

Using this page, you can enter in any message you like, and the message will be returned to you as an encrypted message with words that have jumbled letters. This works as a great way to hide any messages from others you don't want viewing your words.

## Specifications

When you open the page, an entry bar will be given that allows you to enter a message.

As you submit your message, the program will analyze each character to make sure only letters are detected. For any characters that are not letters or numbers, these will be removed. 

Once the character count is calculated, each word entered in will to be split into separate strings that will later be organized into arrays.

Using the total character count as a base (without spaces factored in), the program will calculate the square root total of that count, and then round down that total. The purpose of this is to obtain the number of elements that will be stored inside an array, which will be organized into a grid comprised of columns/rows that use the rounded-down total. 

After the arrays are created (which would visually appear as a square or rectangle-shaped grid), each character is down-cased in preparation for being rearranged. 

* Ex. "Hello my name is Chase" stores as: 
** [h,e,l,l,o]
** [m,y,n,a,m]
** [e,i,s,c,h]
** [a,s,e, , ]

After this, the program will automatically remove any blank spaces detected. 

* Ex. Using the above array, the grid would remove the final two spaces present in the last array prior.

After removing empty elements/arrays, the program will then recreate your message entered. This will be done using every fifth element present in the grid going from left to right.

* Ex. Using the message and array above, the first word will display as "hoass," taking the first element in the array "h," and then counting up to the fifth element shown "o," which will continue until it reaches it's maximum amount of five elements per word.

This process will continue until all the elements are organized into as many words are possible using the grid.

## Known bugs

None

## Contact info

If you should have any questions regarding this page's content or structure, please contact me at chasesmithstudios@gmail.com

## Technologies used

* Sublime Text
* Bootstrap
* HTML/CSS
* JavaScript/jQuery
* GitHub

### License

Creative Commons license

Copyright (c) 2019 ** Chase J. Smith