// var newDiv = document.createElement('div')
// newDiv.className = "addedClass"
// var textHere = document.createTextNode('what is your name?')
// newDiv.appendChild(textHere)
// var addHere = document.getElementById('addHere')
// addHere.appendChild(newDiv)
function getInfo() {
	var username = document.getElementById('username').value
	var comment = document.getElementById('comment').value
	var newImg = document.createElement('img')
	newImg.setAttribute('src', 'img/mario.jpg')

	var userText = document.createTextNode(username)
	var commentText = document.createTextNode(comment)

	var listItem = document.createElement('li')
	listItem.className = "list"

	var newUser = document.createElement('h2')
	newUser.appendChild(userText)
	var newComment = document.createElement('p')
	newComment.appendChild(commentText)

	listItem.appendChild(newUser)
	listItem.appendChild(newComment)
	listItem.appendChild(newImg)
	document.getElementById('listItem').appendChild(listItem)
}

