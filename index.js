import LinkedList from "./linkedList.js";

let Test = new LinkedList();


// add node at the end
Test.append(1);
Test.append(4);
Test.append(6);
Test.append(8);
Test.append(19);

//add node at the start of the list
Test.prepend(15);

//get size of list
Test.totalSize();

//get top node of list
Test.head();

//get last node of list
Test.tail();

//remove last node of list
Test.pop(); 

//print list 
Test.toString();

//find value on list return true if its found or false if not
Test.contains(15);

//find value at index of list
Test.find(8)

//find index with value
Test.at(2)