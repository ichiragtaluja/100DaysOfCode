

// Write a function that uses destructuring to extract the first two elements from an array, and returns them in an object with keys 'first' and 'second'.

const anonymousFunction = ([element1, element2])=>({first: element1, second: element2})

console.log(anonymousFunction(["chirag","taluja"]))




// Write an ES6 function checkForTeam which takes a obj with properties firstname , lastname and a optional property team . It will check if a student already has a team. If team is not given then add them to team “A” and return the object else do nothing and return the same object. Avoid using in-built methods.

const checkForTeam = ({firstname, lastname, team="A"}) => ({firstname, lastname, team})

console.log(checkForTeam({firstname: "Chirag", lastname: "taluja", team: "b"}))

