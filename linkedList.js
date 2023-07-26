import Node from "./node.js"

export default class LinkedList  {
    constructor() {
        this.topNode = null;
        this.size = 0;
    }

    append(value) {
        
        let newNode = new Node(value);
        let activeNode;

        if ( this.topNode == null ){
            this.topNode = newNode;
        }
        else {
            activeNode = this.topNode;

            while(activeNode.nextNode != null){
                activeNode = activeNode.nextNode 
            }
            activeNode.nextNode = newNode;            

        }
        this.size++;
    }

    prepend(value) {
        
        let newNode = new Node(value);
        let activeNode;

        if ( this.topNode == null ){
            this.topNode = newNode;
        }
      
        activeNode = this.topNode;
        this.topNode = newNode;    
        this.topNode.nextNode = activeNode;               

        this.size++;
    }

    totalSize() {

        console.log(this.size);
        return this.size;
    }

    toString() {
        let activeNode;
        let list = "";
        if ( this.size > 0 ) {
           
            activeNode = this.topNode;
    
            
            while(activeNode != null){
                list = list + "( " + activeNode.value + " ) -> " ;
                activeNode = activeNode.nextNode;
              
            }
            list = list + " null";
            console.log(list);
            return list;
        }
        else {
            console.log("Empty List");
            return null;
        }
      
    }

    head() {
        if (this.topNode ){
            console.log(this.topNode.value);
            return this.topNode.value;
        }
        else {
            console.log("Empty List");
            return null;
        }
            
    }

    tail(){     
        let activeNode;
        if (this.topNode)  {
            
            activeNode = this.topNode;
    
            while(activeNode.nextNode != null){
                activeNode = activeNode.nextNode 
            }
            console.log(activeNode.value);   
            return activeNode.value;
        } 
        else  {
            console.log("Empty List");
            return null;
        }
                        
    }

    at(index) {
        let activeNode;
        let count = 0; 
        if (this.topNode)  {
           
            activeNode = this.topNode;
            if(this.size == index +1 ) {
                this.tail();
            } else {
                while(activeNode.nextNode != null){
                    if(count == index) {
                        console.log(activeNode.value);     
                        return activeNode.value;                 
                    }
                    activeNode = activeNode.nextNode ;
                    count++;                    
                }
            }                       
        } 
        else {
            console.log("Empty List");
            return null;
        }
    }

    pop() {
        let activeNode  = this.topNode;
        let previousNode;
        if (this.topNode)  {
             
            while(activeNode.nextNode != null){
                previousNode = activeNode;
                activeNode = activeNode.nextNode;
            }
            previousNode.nextNode = null;
              
        } 
        else  {
            console.log("Empty List");
            return null;
        }
    }
   
    contains(value) {
        let activeNode  = this.topNode; 
        if (activeNode)  {     
            
            if(this.tail() == value ) {
                console.log(1)
                return true;    
            }else{
                while(activeNode.nextNode != null){
                    if(activeNode.value == value) {   
                        console.log(1)
                        return true;                 
                    }                    
                    activeNode = activeNode.nextNode ;                                                        
                                                  
                }    
                console.log(0)
                return false;    
            }                                  
        } 
        else  {
            console.log("Empty List");
            return null;
        }
    }

    find(value) {
        let activeNode  = this.topNode; 
        let cont = 0;
        if (activeNode)  {     
            
            if(this.tail() == value ) {
                console.log(this.size-1)
                return this.size-1;    
            }else{
                while(activeNode.nextNode != null){
                    if(activeNode.value == value) {   
                        console.log(cont)
                        return cont;                 
                    }                   
                    activeNode = activeNode.nextNode ; 
                    cont++;                                                                                              
                }  
                console.log(null)
                return null;   
            }                                  
        } 
        else{
            console.log("Empty List");
            return null;
        }  
    
    }


}