
count = 0 
likedCount = document.getElementById("count")

function increment() {
    count = count + 1;
    likedCount = document.getElementById("count")
    likedCount.innerText = count
    console.log("the button was clicked " + count + " times")
}                                                                                           

function savedCount() {
    savedCount = count 
    console.log("the Count Saved is " + savedCount)
    
}


function loggedTest() {
    	let userName = "Shiv"
    	let greetUser = "Hi " + userName + ", Welcome to Resume"
	console.log(greetUser)

}
