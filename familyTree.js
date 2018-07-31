//ex// `filterFamilyMembers` accepts two arguments, a family tree object, and a truth test. `filterFamilyMembers` returns an array, in any order, of the full names of family members who pass the passed in truth test. You will need to use recursion in your solution in order to handle nested familty trees.


// EXAMPLE:
//The family tree
const familyTree = {
  'firstName': 'Simon',
  'lastName': 'Smith',
  'location': 'San Francisco',
  'children': [
    {
      'firstName': 'Bob',
      'lastName': 'Smith',
      'location': 'San Francisco',
      'children': [
        {
        'firstName': 'Sam',
        'lastName': 'Smith',
        'location': 'Tokyo',
        'children': []
      } 
      ]
    },
    {
      'firstName': 'Stacy',
      'lastName': 'Williams',
      'location': 'San Francisco',
      'children': [
      {
        'firstName': 'Sean',
        'lastName': 'Williams',
        'location': 'San Francisco',
        'children': []
      } 
      ]
    }
  ]
};

// The truth test function
const livesInSF = (familyMember) => {
  return familyMember.location === 'San Francisco';
}

const filterFamilyMembers = (tree, truthTest) => {
  let outputArr = []

  const familyTest = (tr) => {
    if(truthTest(tr) === true){
    outputArr.push(tr.firstName, tr.lastName)
  }
    if(Array.isArray(tr.children)){
      for(let i = 0; i < tr.children.length; i++){
        familyTest(tr.children[i])
      }
    }
  
  }
  familyTest(tree)
  return outputArr 
  
};

filterFamilyMembers(familyTree, livesInSF); //[ 'Simon Smith', 'Bob Smith', 'Stacy Williams', 'Sean Williams' ]